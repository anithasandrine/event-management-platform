import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent } from "react";
import { FormError } from "../../FormError";
import { ButtonLoader } from "../../buttonLoader";
import { UpdateStudentCredentials } from "../../../containers/admin/CareerGuidance/Actions";

export function EditStudent({
  student,
  Handle_openModel,
}: {
  student: StudentAtribute;
  Handle_openModel: () => void;
}) {
  const { register, handleSubmit, setValue, reset, formState } =
    useForm<UpdateStudentAttributes>();
  const { errors } = formState;

  const { isPending, updateStudent } = UpdateStudentCredentials(student.id);
  const subForm: SubmitHandler<UpdateStudentAttributes> = (data) => {
    updateStudent(data, {
      onSuccess: () => reset(),
    });
    console.log(data);
  };
  function HandleLogIn(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    setValue("name", student.name);
    handleSubmit(subForm)(e);
  }
  return (
    <>
      <form
        onSubmit={HandleLogIn}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={true}
          className=" w-full px-2 py-1 shadow-lg border-[1px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Username"
          value={student.name}
        />

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B] border-[1px] outline-none mb-4 placeholder:text-blue  "
          type="email"
          placeholder="Email"
          defaultValue={student.updatedEmail}
          {...register("updatedEmail", {
            required: "Name is required",
          })}
        />
        {errors?.updatedEmail?.message && (
          <FormError>
            {<span>{errors.updatedEmail.message.toString()}</span>}
          </FormError>
        )}
        <input
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B] border-[1px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Phone"
          defaultValue={student.updatedPhone}
          {...register("updatedPhone", {
            required: "Name is required",
          })}
        />
        {errors?.updatedPhone?.message && (
          <FormError>
            {<span>{errors.updatedPhone.message.toString()}</span>}
          </FormError>
        )}

        <button
          disabled={isPending}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Update
          {isPending && <ButtonLoader />}
        </button>

        <button
          disabled={isPending}
          type="button"
          onClick={Handle_openModel}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Cancel
        </button>
      </form>
    </>
  );
}
