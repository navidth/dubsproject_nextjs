'use server';
import {z} from 'zod'
import { FormDataSchemaLogin, FormDataShemaRegister } from "./lib/shema";

type Inputs = z.infer<typeof FormDataSchemaLogin>
type InputsRegister = z.infer<typeof FormDataShemaRegister>

export async function addEntry(data: Inputs){
      const resualt = FormDataSchemaLogin.safeParse(data);
      if(resualt.success){
            return {success: true, data: resualt.data}
      }

      if(resualt.error){
            return {success: false, data: resualt.error.format()}
      }
}

export async function addEntryRegister(data:InputsRegister) {
      const resualt = FormDataShemaRegister.safeParse(data);
      if(resualt.success){
            return {success: true, data: resualt.data}
      }
      if(resualt.error){
            return {success: false, data: resualt.error.format()}
      }
      
}