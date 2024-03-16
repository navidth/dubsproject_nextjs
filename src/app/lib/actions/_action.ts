"use server";
import { any, z } from "zod";
import { FormDataSchemaLogin, FormDataShemaRegister } from "../shema";
import User from "../db/mongodb";

type Inputs = z.infer<typeof FormDataSchemaLogin>;
type InputsRegister = z.infer<typeof FormDataShemaRegister>;

export async function addEntry(data: Inputs) {
  const resualt = FormDataSchemaLogin.safeParse(data);
  if (resualt.success) {
    return { success: true, data: resualt.data };
  }

  if (resualt.error) {
    return { success: false, data: resualt.error.format() };
  }
}

export async function addEntryRegister(data: InputsRegister) {
  const resualt = FormDataShemaRegister.safeParse(data);
  if (resualt.success) {
    const { nameUser, phoneUsers, password } = resualt.data;
    createUser(nameUser, phoneUsers, password);
  }

}

async function createUser(name: String, phone: String, password: String) {
  const user = new User({
    nameUser: name,
    phone_number: phone,
    password: password,
  });
  const resualt = await user.save();
  console.log(resualt);
  
  return { success: true, data: user, resualt };
}
