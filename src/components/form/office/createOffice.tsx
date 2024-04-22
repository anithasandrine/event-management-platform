import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { CreateOffice as office } from "../../../containers/admin/supperAdmin/Actions";

export function CreateOffice({
  Handle_Addmodle,
}: {
  Handle_Addmodle: () => void;
}) {
  const { register, handleSubmit, getValues, reset, formState } =
    useForm<CreateOfficeAttributes>();
  const { errors } = formState;
  const { isPending, create } = office();
  const subForm: SubmitHandler<CreateOfficeAttributes> = (data) => {
    create(data, {
      onSuccess: () => {
        reset();
        Handle_Addmodle();
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
        className="mx-auto px-2 w-full md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center md:w-[80%]"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
          type="text"
          placeholder="User name"
          {...register("userName", {
            required: "User name is required",
          })}
        />
        {errors?.userName?.message && (
          <FormError>
            {<span>{errors.userName.message.toString()}</span>}
          </FormError>
        )}

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
          type="text"
          placeholder="Office Name"
          {...register("officeName", {
            required: "Office name is required",
          })}
        />
        {errors?.officeName?.message && (
          <FormError>
            {<span>{errors.officeName.message.toString()}</span>}
          </FormError>
        )}

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
          type="email"
          placeholder="Office email"
          {...register("officeEmail", {
            required: "Office email is required",
          })}
        />
        {errors?.officeEmail?.message && (
          <FormError>
            {<span>{errors.officeEmail.message.toString()}</span>}
          </FormError>
        )}

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
          type="text"
          placeholder="Office phone"
          {...register("officePhone", {
            required: "Office phone is required",
          })}
        />
        {errors?.officePhone?.message && (
          <FormError>
            {<span>{errors.officePhone.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
            type="password"
            placeholder="Password "
            {...register("password", {
              required: "Password is Required.",
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
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-2 placeholder:text-blue  "
            type={"password"}
            placeholder="Confirm  password"
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
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-2 md:mt-4 lg:mt-6   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Create Office
            {isPending && <ButtonLoader />}
          </button>

          <button
            disabled={isPending}
            onClick={Handle_Addmodle}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-2 md:mt-4 lg:mt-6   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
