"use server";

const { dbConnect, collections } = require("@/lib/dbConnect");
import bcrypt from "bcrypt";
export const postUser = async (payload) => {
  const { email, password, image, name } = payload;
  // check payload
  if (!email || !password) return null;
  // check user
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) return null;
  // create user
  const newUser = {
    providerId: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 10),
    image,
    role: "user",
  };
  // post user to DB
  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.acknowledged)
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  // check payload
  if (!email || !password) return null;
  // check user email
  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;
  // check user password
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) return user;
  else {
    return null;
  }
};
