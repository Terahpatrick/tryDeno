import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import Response from './responses.ts';


async function errorHandler (context: RouterContext, next: any) {
  try {
    await next();
  } catch (ex) {
    if(ex.status === 500) {
      context.response.body = Response.errorResponse("Internal Server Error");
    }
  }
}