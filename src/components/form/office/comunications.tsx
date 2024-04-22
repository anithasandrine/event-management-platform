import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent, useState } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { SendCommunication } from "../../../containers/admin/supperAdmin/Actions";
import { Quil } from "../../reactQuil";
import { SchoolsAndDepartment } from "../../CollegeAnd schools";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { StudentById } from "../../tableStudents";

export function CommunicationMessage() {
  const { register, handleSubmit, setValue, getValues, reset, formState } =
    useForm<CommunicationMessage>();
  const { errors } = formState;
  const navigate = useNavigate();
  const [selectedChannel, setSelectedChanel] = useState<"sms" | "email">(
    "email"
  );

  const [reciverSelectinMethod, setRecieverSelectionMethod] = useState<
    "student" | "department"
  >("department");
  const { isPending, Comunicate } = SendCommunication();
  const subForm: SubmitHandler<CommunicationMessage> = (data) => {
    console.log(data);
    if (getValues("receiver").length === 0) {
      toast.error("Please select message Reciever.");
    } else {
      getValues("channel") !== "email" && setValue("subject", " nothing ");
      Comunicate(data, {
        onSuccess: () => {
          reset();
        },
      });
    }
  };
  function Handle_updatePassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }
  function HandleChange(content: string) {
    setValue("content", content);
  }
  function HandleSelection(
    select: {
      school: string;
      dpt: string[];
    }[]
  ) {
    setValue("receiver", select);
  }
  return (
    <>
      <form
        onSubmit={Handle_updatePassword}
        className="mt-4 mx-auto px-2 w-full md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center md:w-[80%]"
      >
        <div className="w-full text-blue">
          <select
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] border-t-0 border-r-0 border-l-0 outline-none mb-4 placeholder:text-blue  "
            {...register("channel", {})}
            value={selectedChannel}
            onChange={(e) => {
              setSelectedChanel(
                "value" in e.target &&
                  typeof e.target.value === "string" &&
                  e.target.value === "sms"
                  ? "sms"
                  : "email"
              );
              setValue("content", "");
            }}
          >
            <option value="email">Use email</option>
            <option value="sms">Use SMS</option>
          </select>
        </div>
        {selectedChannel === "email" && (
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[2px] border-t-0 border-r-0 border-l-0 outline-none mb-4 placeholder:text-blue  "
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
            })}
          />
        )}
        {errors?.subject?.message && (
          <FormError>
            {<span>{errors.subject.message.toString()}</span>}
          </FormError>
        )}

        {selectedChannel === "email" && <Quil HandleChange={HandleChange} />}
        {selectedChannel === "sms" && (
          <textarea
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] rounded-lg outline-none mb-4 placeholder:text-blue  "
            placeholder="Type message..."
            {...register("content", {
              required: "Message Content is required",
            })}
          ></textarea>
        )}
        {errors?.content?.message && (
          <FormError>
            {<span>{errors.content.message.toString()}</span>}
          </FormError>
        )}
        <div className="mt-6 w-full  text-white p-2">
          {reciverSelectinMethod === "department" && (
            <button
              onClick={() => {
                setRecieverSelectionMethod("student");
                setValue("receiver", []);
              }}
              disabled={isPending}
              className=" bg-blue w-full
             hover:bg-blueWhite px-6 py-1 text-lg  text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Filter student
            </button>
          )}
          {reciverSelectinMethod === "student" && (
            <button
              onClick={() => {
                setRecieverSelectionMethod("department");
                setValue("receiver", []);
              }}
              disabled={isPending}
              className=" bg-blue w-full
             hover:bg-blueWhite px-6 py-1 text-lg  text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Filter Department
            </button>
          )}
          {reciverSelectinMethod === "department" && (
            <SchoolsAndDepartment
              HandleSelection={HandleSelection}
              navigate={navigate}
            />
          )}

          {reciverSelectinMethod === "student" && (
            <div className=" w-full">
              <StudentById setValue={setValue} />
            </div>
          )}
        </div>
        <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
          <button
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Send
            {isPending && <ButtonLoader />}
          </button>

          <button
            onClick={() => navigate(-1)}
            disabled={isPending}
            className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
