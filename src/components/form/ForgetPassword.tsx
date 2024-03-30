import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../FormError";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { ForgetPassword } from "../../containers/Auth/Actions";
import { ButtonLoader } from "../buttonLoader";

export function ForgetPasswordForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<forgetPasswordAttributes>();
  const { errors } = formState;
  const navigate = useNavigate();

  const { isPending, mutate } = ForgetPassword();
  const subForm: SubmitHandler<forgetPasswordAttributes> = (data) => {
    mutate(data, {
      onSuccess: () => navigate("/reset"),
    });
    reset();
  };

  function HandleForgetPassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  return (
    <>
      <form
        onSubmit={HandleForgetPassword}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="User name"
          {...register("userName", {
            required: "Verfication token is required",
          })}
        />
        {errors?.userName?.message && (
          <FormError>
            {<span>{errors.userName.message.toString()}</span>}
          </FormError>
        )}

        <div>
          <p className=" italic my-3 font-semibold">
            Select where you want to receive your velification token
          </p>
          <select
            className=" border-[] border-[2px] w-full rounded-xl px-4"
            {...register("to", {})}
          >
            <option value="email"> Email</option>
            <option value="sms"> Simple message</option>
          </select>
        </div>

        <button
          disabled={isPending}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10 rounded-full text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Send token
          {isPending && <ButtonLoader />}
        </button>
      </form>
      <div className=" mt-6">
        <p className=" text-xl mt-4">
          Already have account?{" "}
          <span className=" text-blue hover:text-blueWhite pl-4 font-bold italic">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </>
  );
}
