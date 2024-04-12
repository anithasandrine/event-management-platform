import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { useNavigate } from "react-router-dom";
import { UpdateofficeInfo } from "../../../containers/admin/supperAdmin/Actions";

export function UpdateOfficeProfile() {
  const { register, handleSubmit, reset, formState } =
    useForm<UpdateOfficeAttributes>();
  const { errors } = formState;
  const navigate = useNavigate();
  const { isPending, updateProfile } = UpdateofficeInfo();
  const subForm: SubmitHandler<UpdateOfficeAttributes> = (data) => {
    updateProfile(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  function Handle_upateStudent(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  return (
    <>
      <form
        onSubmit={Handle_upateStudent}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
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
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Office name"
          {...register("officeName", {
            required: "User name is required",
          })}
        />
        {errors?.officeName?.message && (
          <FormError>
            {<span>{errors.officeName.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
            type="email"
            placeholder="Office email"
            {...register("officeEmail", {
              required: "Email is Required.",
            })}
          />
        </label>
        {errors?.officeEmail?.message && (
          <FormError>
            {<span>{errors.officeEmail.message.toString()}</span>}
          </FormError>
        )}

        <label className="w-full relative">
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
            type={"text"}
            placeholder="Office phone number"
            {...register("officePhone", {
              required: "Phone Number is Required.",
            })}
          />
        </label>
        {errors?.officePhone?.message && (
          <FormError>
            {<span>{errors.officePhone.message.toString()}</span>}
          </FormError>
        )}

        <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
          <button
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Update Profile
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
