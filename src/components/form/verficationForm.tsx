import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../FormError";
import { Params, useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { VerfiyEmail, VerfiyPhone } from "../../containers/Auth/Actions";
import { ButtonLoader } from "../buttonLoader";

export function PhoneVerificationForm() {
  const { id }: Readonly<Params<string>> = useParams();
  const { register, handleSubmit, reset, formState } = useForm<PhoneToken>();
  const { errors } = formState;
  const navigate = useNavigate();
  const { mutate } = VerfiyEmail();
  useEffect(() => {
    const k = localStorage.getItem("rendered");
    if (k !== "first") {
      mutate(id ?? "");
      localStorage.setItem("rendered", "first");
    } else if (k === "first") {
      localStorage.setItem("rendered", "");
    }
  }, []);

  const { PhonePending, mutatePhone } = VerfiyPhone();
  const subForm: SubmitHandler<PhoneToken> = (token) => {
    mutatePhone(token, {
      onSuccess: () => {
        reset();
        navigate("/");
      },
    });
  };

  const HandleSubmitt = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(subForm)(e);
  };
  return (
    <>
      <form
        onSubmit={HandleSubmitt}
        className="mt-16 xl:mt-12 px-2 w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center"
      >
        <input
          disabled={PhonePending}
          className=" w-full px-2 py-1 border-[#00628B]  border-t-0 border-l-0  border-r-0 border-[3px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Phone verfication token"
          {...register("token", {
            required: "Verfication token is required",
          })}
        />
        {errors?.token?.message && (
          <FormError>
            {<span>{errors.token.message.toString()}</span>}
          </FormError>
        )}

        <button
          disabled={PhonePending}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10 rounded-full text-xl text-white font-semibold italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Verify
          {PhonePending && <ButtonLoader />}
        </button>
      </form>
    </>
  );
}
