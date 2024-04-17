import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { UpdateOffice } from "../../../containers/admin/supperAdmin/Actions";

export function EditOffice({
  Handle_Addmodle,
  item,
}: {
  Handle_Addmodle: () => void;
  item: { id: string; name: string; office: OfficeAttributes };
}) {
  const { register, handleSubmit, reset, formState } =
    useForm<EditOfficeAttributes>();
  const { isPending, Update } = UpdateOffice(item.id);

  const { errors } = formState;
  const subForm: SubmitHandler<EditOfficeAttributes> = (data) => {
    Update(data, {
      onSuccess: () => {
        reset();
        Handle_Addmodle();
      },
    });
    console.log(data);
  };
  function Handle_updatePassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }

  return (
    <>
      <form
        onSubmit={Handle_updatePassword}
        className="mt-4 xl:mt-12 px-2 w-full md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center md:w-[80%]"
      >
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          defaultValue={item.office.userName}
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
          defaultValue={item?.office?.officeName}
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
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
          type="email"
          defaultValue={item?.office?.officeEmail}
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
          className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          defaultValue={item?.office?.officePhone}
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

        <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
          <button
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Update Office
            {isPending && <ButtonLoader />}
          </button>

          <button
            disabled={isPending}
            onClick={() => {
              Handle_Addmodle();
            }}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
