import userSchema from "../models/user";

export const create = async (user) => {
  return await userSchema.create(user);
}

export const findByIds = async (ids) => {
  const users = await userSchema.find().where('_id').in(ids).exec();
  return users
}