import { z } from "zod";

export const FormDataSchemaLogin = z.object({
  phone: z
    .string()
    .nonempty("شماره تلفن خود را وارد کنید")
    .length(11, { message: "شماره تلفن صحیح نیست" })
    .refine((value) => /^09/.test(value), {
      message: "شماره تلفن باید با 09 شروع شود",
    }),
  password: z
    .string()
    .nonempty("رمز عبور خود را وارد کنید")
    .min(8, { message: "رمز عبور باید بیشتر از 8 کاراکتر باشد" }),
});

export const FormDataShemaRegister = z.object({
  nameUser: z.string().nonempty("نام کاربری خود را وارد کنید"),
  phoneUsers: z
    .string()
    .nonempty("شماره تلفن خود را وارد کنید")
    .length(11, { message: "شماره تلفن صحیح نیست" })
    .refine((value) => /^09/.test(value), {
      message: "شماره تلفن باید با 09 شروع شود",
    }),
      password: z
    .string()
    .nonempty("رمز عبور خود را وارد کنید")
    .min(8, { message: "رمز عبور باید بیشتر از 8 کاراکتر باشد" }),
});
