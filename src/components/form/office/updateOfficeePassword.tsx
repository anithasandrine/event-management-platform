import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { useNavigate } from "react-router-dom";
import { getLoggedInuser } from "../../../utils/LoggedinUser";
import { UpdateOfficePasswordAction } from "../../../containers/admin/supperAdmin/Actions";

export function ChangeOfficePassword() {
  const { register, handleSubmit, getValues, reset, formState } =
    useForm<UpdatePasswordAttributes>();
  const { errors } = formState;
  const navigate = useNavigate();
  const loggedin = getLoggedInuser();
  const id = "id" in loggedin ? loggedin.id : "";
  const { isPending, updatepassword } = UpdateOfficePasswordAction();
  const subForm: SubmitHandler<UpdatePasswordAttributes> = (data) => {
    updatepassword(data, {
      onSuccess: () => {
        reset();
        navigate(`/office/profile/${id}`);
      },
    });
  };
  function Handle_updatePassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  return (
    <>
      <form
        onSubmit={Handle_updatePassword}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
          type="password"
          placeholder="Password"
          {...register("oldPassword", {
            required: "password is required",
          })}
        />
        {errors?.oldPassword?.message && (
          <FormError>
            {<span>{errors.oldPassword.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
            type="password"
            placeholder="New Password"
            {...register("password", {
              required: "New password is Required.",
              validate: (value) => {
                return (
                  value.length >= 8 || "Password must be atleaste 8 characters."
                );
              },
            })}
          />
        </label>
        {errors?.password?.message && (
          <FormError>
            {<span>{errors.password.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
            type={"password"}
            placeholder="Confirm new password"
            {...register("confirmPassword", {
              required: "password confrmation is Required.",
              validate: (value) => {
                const password = getValues("password");
                return value === password || " Password do not match";
              },
            })}
          />
        </label>
        {errors?.confirmPassword?.message && (
          <FormError>
            {<span>{errors.confirmPassword.message.toString()}</span>}
          </FormError>
        )}

        <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
          <button
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Change Password
            {isPending && <ButtonLoader />}
          </button>

          <button
            disabled={isPending}
            onClick={() => navigate(-1)}
            className=" bg-blue hover:bg-blueWhite px-14 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
