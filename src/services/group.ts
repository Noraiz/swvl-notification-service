import groupSchema from "../models/group";

export const create = async (user) => {
  return await groupSchema.create(user);
}

export const getGroup = async (id) => {
  return await groupSchema.findById(id).exec();
}