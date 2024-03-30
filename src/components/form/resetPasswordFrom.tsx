import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../FormError";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { ResetPassword } from "../../containers/Auth/Actions";
import { ButtonLoader } from "../buttonLoader";

export function ResetPasswordForm() {
  const { register, getValues, handleSubmit, reset, formState } =
    useForm<resetPasswordAttributes>();
  const { errors } = formState;
  const navigate = useNavigate();

  const { isPending, mutate } = ResetPassword();
  const subForm: SubmitHandler<resetPasswordAttributes> = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
    reset();
  };
  function Handle_resetPassword(e: FormEvent) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  return (
    <>
      <form
        onSubmit={Handle_resetPassword}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Verification token"
          {...register("verificationToken", {
            required: "Verfication token is required",
          })}
        />
        {errors?.verificationToken?.message && (
          <FormError>
            {<span>{errors.verificationToken.message.toString()}</span>}
          </FormError>
        )}

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="password"
          placeholder="New password"
          {...register("newPassword", {
            required: "Password is required.",
            validate: (value) => {
              return (
                value.length >= 8 ||
                "Atlease 8 characters are required for password"
              );
            },
          })}
        />
        {errors?.newPassword?.message && (
          <FormError>
            {<span>{errors.newPassword.message.toString()}</span>}
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
              const password = getValues("newPassword");
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
          Reset
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
