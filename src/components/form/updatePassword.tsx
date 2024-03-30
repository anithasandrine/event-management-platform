import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../FormError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import { Login } from "../../containers/Auth/Actions";
import { ButtonLoader } from "../buttonLoader";

export function UpdateOfficePasswordForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<LoginAttributes>();
  const { errors } = formState;

  const { isPending, mutate } = Login();
  const subForm: SubmitHandler<LoginAttributes> = (data) => {
    mutate(data);
    reset();
  };
  const [show, setShow] = useState<boolean>(false);
  function HandleLogIn(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }

  return (
    <>
      <form
        onSubmit={HandleLogIn}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="update password"
          {...register("userName", {
            required: "Name is required",
          })}
        />
        {errors?.userName?.message && (
          <FormError>
            {<span>{errors.userName.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 pr-8 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
            type={show ? "text" : "password"}
            placeholder="update password"
            {...register("password", {
              required: "Password is Required.",
            })}
          />
          <span
            className=" absolute right-0 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {
              <FontAwesomeIcon
                className="text-blue"
                icon={show ? faEye : faEyeSlash}
              />
            }
          </span>
        </label>
        {errors?.password?.message && (
          <FormError>
            {<span>{errors.password.message.toString()}</span>}
          </FormError>
        )}

        <button
          disabled={isPending}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10 rounded-full text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Login
          {isPending && <ButtonLoader />}
        </button>
      </form>
    </>
  );
}
