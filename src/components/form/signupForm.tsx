import { useForm, SubmitHandler } from "react-hook-form";
import { FormError } from "../FormError";
import { Link } from "react-router-dom";
import { StudentSignUP } from "../../containers/Auth/Actions";
import { FormEvent } from "react";
import { ButtonLoader } from "../buttonLoader";

export function SignupForm() {
  const { register, getValues, handleSubmit, reset, formState } =
    useForm<StudentSignupATributes>();
  const { errors } = formState;

  const { isPending, mutate } = StudentSignUP();
  const subForm: SubmitHandler<StudentSignupATributes> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(subForm)(e);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Registration Number"
          {...register("regNo", {
            required: "Name is required",
          })}
        />
        {errors?.regNo?.message && (
          <FormError>
            {<span>{errors.regNo.message.toString()}</span>}
          </FormError>
        )}

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="email"
          placeholder="Email"
          {...register("updatedEmail", {
            required: "Email is required",
          })}
        />
        {errors?.updatedEmail?.message && (
          <FormError>
            {<span>{errors.updatedEmail.message.toString()}</span>}
          </FormError>
        )}
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Phone Number"
          {...register("updatedPhone", {
            required: "Phone is required.",
          })}
        />
        {errors?.updatedPhone?.message && (
          <FormError>
            {<span>{errors.updatedPhone.message.toString()}</span>}
          </FormError>
        )}
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            validate: (value) => {
              return (
                value.length >= 8 || "Password must be atleaste 8 characters."
              );
            },
          })}
        />
        {errors?.password?.message && (
          <FormError>
            {<span>{errors.password.message.toString()}</span>}
          </FormError>
        )}
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Password confirmatin is required",
            validate: (value) => {
              const password = getValues("password");
              return value === password || " Password do not match";
            },
          })}
        />
        {errors?.confirmPassword?.message && (
          <FormError>
            {<span>{errors.confirmPassword.message.toString()}</span>}
          </FormError>
        )}
        <button
          disabled={isPending}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10 rounded-full text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          SignUp
          {isPending && <ButtonLoader />}
        </button>
      </form>
      <div className=" mt-6">
        <p className=" text-xl mt-4">
          Already have account?{" "}
          <span className=" text-blue pl-4 font-bold italic hover:text-blueWhite">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </>
  );
}
