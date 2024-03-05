"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import { FormDataSchemaLogin} from "@/app/lib/shema";
import { addEntry} from "@/app/_action";
import { useRouter } from "next/navigation";

type Inputs = z.infer<typeof FormDataSchemaLogin>;

function Register() {
  const router= useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchemaLogin),
  });
// Login.............................................
  const processForm:SubmitHandler<Inputs> = async (data: Inputs) => {
    const resualt = await addEntry(data);
    if (!resualt) {
      console.log("errorssssssssssssss");
      return;
    }
    if (resualt.success) {
      console.log(resualt.success);
      return;
    }
    reset();
  };

  return (
    <div className="login-page  mx-auto my-5 pt-2 pb-3">
      <div className=" my-5 form-page">
        <div className="rounded-4  bg-white form-page-div1">

          <div className="form-content rounded-4 bg-white mt-5">
            <div
              className="login-content border border-danger-subtile "
              id="login-content"
            >
            <div className="header-form">
            <button
              type="button"
              id="login"
              className="p-3 w-100 btn-outline-danger"
              style={{
                cursor:'auto !important',
                background:"#dc3545",
                color:"#f8f9fa",
              }}
            >
              <span className="fs-3">ورود</span>
            </button>
          </div>
              <form onSubmit={handleSubmit(processForm)} className="my-4 mx-3">
                <label htmlFor="phone" className="form-label mt-3">
                  شماره تلفن :
                </label>
                <input
                  type="text"
                  className="form-control mx-2 my-0"
                  placeholder="شماره تلفن خود را وارد کنید ..."
                  {...register("phone")}
                />
                <br />
                {errors.phone?.message && (
                  <li className="text-danger errorsMessage mx-2">
                    {errors.phone?.message}
                  </li>
                )}
                <label htmlFor="password" className="form-label mt-3">
                  رمز عبور :
                </label>
                <input
                  type="password"
                  className="form-control mx-2 my-0"
                  placeholder="رمز عبور خود را وارد کنید ..."
                  {...register("password")}
                />
                <br />
                {errors.password?.message && (
                  <li className="text-danger errorsMessage mx-2">
                    {errors.password?.message}
                  </li>
                )}
                <button
                  type="submit"
                  className=" mt-2 mx-auto btn rounded-2 btn-danger"
                >
                  ورود
                </button>
              </form>
            </div>
            <div className="register d-flex flex-column align-items-center justify-content-center">
              <div className="headerRegister my-4">
                <h3>عضویت در سایت </h3>
              </div>
              <div className=" text-muted text-center w-75">
               <p> با ایجاد یک حساب کاربری میتوانید سریع تر بررسی کنید، خرید کنید، سفارش هارا بررسی و پیگیری کنید و موارد دیگر
              </p>
              <button className="btn mt-3 btn-danger mb-3" onClick={()=> router.push('/register')}>
                ساخت اکانت جدید
              </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
