import { RouterContext } from 'https://deno.land/x/oak/mod.ts';

import db from '../config/databases.ts';
import {validator, UserType } from '../validations/userValidation.ts';
import Response from '../middlewares/responses.ts';


const User= db.collection("users");

export default {

  async index(context:RouterContext) {
    try {
      const users = await User.find();
      context.response.body = Response.successResponse(users);
    } catch (ex) {
      context.response.body = Response.errorResponse("Internal Server Error")
    }
  },

  show(context:RouterContext) {},

  async store(context:RouterContext){
    const { value } = await context.request.body();
    if(!value|| Object.keys(value).length === 0){
      context.response.status = 400;
      context.response.body = Response.errorResponse("Please provide the required data");
      return;
    }
    const [err,]= validator(value);
    console.log(err?.errors![0].error.message);
    if(err?.errors![0].error) {
      context.response.status = 400;
      context.response.body = Response.errorResponse(err?.errors![0].error.message);
      return;
    }
    const user = User.insertOne(value);
    context.response.body = user;
  },


  async update(context:RouterContext){
    const {name} = context.params;
    const { value } = await context.request.body();
    await User.updateOne({name}, {$set:value})
    context.response.status = 201;
    context.response.body = {message: "Record successfully updated"};
  },


  async destroy(context:RouterContext){
    const {name} = context.params;
    await User.deleteOne({name});
    context.response.status = 204; // no context
    context.response.body = {message: 'Record successfully deleted'};
  }

}