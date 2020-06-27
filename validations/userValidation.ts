import Schema, { Type, string, number } from 'https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts';


const UserSchema = Schema({
  name: string.trim().normalize().between(3, 40),
  username: /^[a-z0-9]{3,10}$/,
  status: Schema.either('active' as const, 'suspended' as const),
  age: number.gte(18).integer(),
 });


type UserType = Type<typeof UserSchema>;
const validator = UserSchema.destruct();

export {
  UserType,
  validator
}