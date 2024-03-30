import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { useNavigate } from "react-router-dom";
import { Confirm, Student } from "../../../containers/pages/student/Actions";
import { getLoggedInuser } from "../../../utils/LoggedinUser";
import { FormSkleton } from "../../Skleton/formSkleton";

export function ConfirmUpdates() {
  const { register, handleSubmit, reset, formState } =
    useForm<ConfirmStudentAttributes>();
  const { errors } = formState;
  const navigate = useNavigate();
  const loggedin = getLoggedInuser();
  const id = "id" in loggedin ? loggedin.id : "";
  const { pendingStudent, error, student } = Student(id);
  const { isPending, confirmUpdate } = Confirm();
  const subForm: SubmitHandler<ConfirmStudentAttributes> = (data) => {
    if (student) {
      confirmUpdate(data, {
        onSuccess: () => {
          navigate(`/student/profile/${student?.id}`);
        },
      });
      reset();
    }
  };

  function Handle_Confirmation(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  if (error) {
    return <div>something went wronggg</div>;
  }
  if (pendingStudent) {
    return <FormSkleton />;
  }
  let field = "";
  if (student?.storeEmail && student.storePhone) {
    field = "all";
  } else if (student?.storeEmail) {
    field = "email";
  } else if (student?.storePhone) {
    field = "phone";
  }

  return (
    <>
      <form
        onSubmit={Handle_Confirmation}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        {(field === "all" || field === "email") && (
          <>
            <label className="w-full relative">
              <input
                disabled={isPending}
                className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
                type="text"
                placeholder="Email token"
                {...register("emailToken", {
                  required: "email token is Required.",
                })}
              />
            </label>
            {errors?.emailToken?.message && (
              <FormError>
                {<span>{errors.emailToken.message.toString()}</span>}
              </FormError>
            )}
          </>
        )}

        {(field === "all" || field === "phone") && (
          <>
            <label className="w-full relative">
              <input
                disabled={isPending}
                className=" w-full px-2 py-1 border-[#00628B]  border-[2px] outline-none mb-4 placeholder:text-blue  "
                type={"text"}
                placeholder="Phone token"
                {...register("phoneToken", {
                  required: "phone token is Required.",
                })}
              />
            </label>
            {errors?.phoneToken?.message && (
              <FormError>
                {<span>{errors.phoneToken.message.toString()}</span>}
              </FormError>
            )}
          </>
        )}

        <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
          <button
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Approve
            {pendingStudent && <ButtonLoader />}
          </button>

          <button
            disabled={isPending}
            onClick={() => navigate(-1)}
            className=" bg-blue hover:bg-blueWhite px-10 py-1 mt-4 md:mt-8 lg:mt-10  text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
