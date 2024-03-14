"use client";
import { z } from "zod";
import { FormDataShemaRegister } from "@/app/lib/shema";
import { SubmitHandler, useForm } from "react-hook-form";
import { addEntryRegister } from "@/app/lib/actions/_action";
import { zodResolver } from "@hookform/resolvers/zod";

type InputsRegister = z.infer<typeof FormDataShemaRegister>;

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsRegister>({
    resolver: zodResolver(FormDataShemaRegister),
  });
  const onRegister: SubmitHandler<InputsRegister> = async (
    data: InputsRegister
  ) => {
    const resualt = await addEntryRegister(data);

    if (!resualt) {
      console.log("errorssssssssssssss");
      return;
    }
    if (resualt.success) {
      return;
    }
    reset();
  };

  return (
    <div className="register-page   mx-auto my-3">
      <div className=" my-5 form-page">
        <div className="rounded-4  bg-white form-page-div1">
          <div className="form-content rounded-4 bg-white mt-5">
            <div className="border border-danger-subtile">
              <div className="header-form">
                <button
                  type="button"
                  id="login"
                  className="p-3 w-100 btn-outline-danger"
                  style={{
                    cursor: "auto !important",
                    background: "#dc3545",
                    color: "#f8f9fa",
                    borderTopLeftRadius: "0.6rem",
                  }}
                >
                  <span className="fs-3">عضویت در سایت</span>
                </button>
              </div>
              <form
                action=""
                method="post"
                onSubmit={handleSubmit(onRegister)}
                className="my-4 mx-3 d-flex flex-column flex-wrap form"
              >
                <label htmlFor="phone-id" className="form-label">
                  نام کاربری :{" "}
                </label>
                <input
                  type="text"
                  className="form-control mx-3"
                  placeholder="نام خود را وارد کنید ..."
                  {...register("nameUser")}
                />
                {errors.nameUser?.message && (
                  <li className="text-danger errorsMessage mx-3 mt-2  ">
                    {errors.nameUser?.message}
                  </li>
                )}
                <br />
                <label htmlFor="phone-id" className="form-label">
                  شماره تلفن :
                </label>
                <input
                  type="text"
                  className="form-control mx-3"
                  placeholder="شماره تلفن خود را وارد کنید ..."
                  {...register("phoneUsers")}
                />
                {errors.phoneUsers?.message && (
                  <li className="text-danger errorsMessage mx-3 mt-2">
                    {errors.phoneUsers?.message}
                  </li>
                )}
                <br />
                <label htmlFor="phone-id" className="form-label">
                  رمز عبور :
                </label>
                <input
                  type="password"
                  className="form-control mx-3"
                  placeholder="رمز عبور خود را وارد کنید ..."
                  {...register("password")}
                />
                {errors.password?.message && (
                  <li className="text-danger errorsMessage mx-3 mt-2">
                    {errors.password?.message}
                  </li>
                )}
                <br />
                <button
                  type="submit"
                  className=" mt-2 mx-auto d-block btn rounded-2 btn-danger"
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
