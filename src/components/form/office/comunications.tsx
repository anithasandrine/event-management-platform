import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent, useState } from "react";
import { ButtonLoader } from "../../buttonLoader";
import { SendCommunication } from "../../../containers/admin/supperAdmin/Actions";
import { Quil } from "../../reactQuil";
import { SchoolsAndDepartment } from "../../CollegeAnd schools";
import { useNavigate } from "react-router-dom";
import { StudentById } from "../../tableStudents";

export function CommunicationMessage() {
  const { register, handleSubmit, setValue, reset, formState } =
    useForm<CommunicationMessage>();
  const { errors } = formState;
  const navigate = useNavigate();
  const [selectedChannel, setSelectedChanel] = useState<string[]>(["email"]);
  const [receiver, setReceiver] = useState<Receiver>({
    school: [],
    department: [],
    class: [],
    year: [],
    student: [],
  });
  const [studentx, setStudent] = useState<string[]>([]);

  const [reciverSelectinMethod, setRecieverSelectionMethod] = useState<
    "student" | "department"
  >("department");

  const { isPending, Comunicate } = SendCommunication();
  const subForm: SubmitHandler<CommunicationMessage> = (data) => {
    console.log(data);

    Comunicate(data, {
      onSuccess: () => {
        reset();
        setValue("receiver", {
          school: [],
          department: [],
          class: [],
          year: [],
          student: [],
        });
      },
    });
  };
  function Handle_updatePassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    setValue("receiver", { ...receiver, student: studentx });
    setValue("channel", selectedChannel);
    handleSubmit(subForm)(e);
  }
  function HandleChange(content: string) {
    setValue("content", content);
  }
  function HandleSelection(select: Receiver) {
    setReceiver(select);
  }
  function Handle_student(student: string[]) {
    setStudent(student);
  }
  return (
    <>
      <form
        onSubmit={Handle_updatePassword}
        className="mt-4 mx-auto px-2 w-full md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center md:w-[80%]"
      >
        <div className=" text-blue py-4 flex gap-8 w-fit mx-auto">
          <div className=" flex items-center gap-2">
            <input
              type="radio"
              checked={selectedChannel.includes("email")}
              onClick={() =>
                selectedChannel.includes("email")
                  ? setSelectedChanel((prev) =>
                      prev.filter((name) => name !== "email")
                    )
                  : setSelectedChanel((prev) => [...prev, "email"])
              }
            />
            <span>Use Email</span>
          </div>
          <div className=" flex items-center gap-2">
            <input
              type="radio"
              checked={selectedChannel.includes("sms")}
              onClick={() =>
                selectedChannel.includes("sms")
                  ? setSelectedChanel((prev) =>
                      prev.filter((name) => name !== "sms")
                    )
                  : setSelectedChanel((prev) => [...prev, "sms"])
              }
            />
            <span>Use Email</span>
          </div>
        </div>
        {selectedChannel.includes("email") && (
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

        {!selectedChannel.includes("sms") && (
          <Quil HandleChange={HandleChange} />
        )}
        {selectedChannel.includes("sms") && (
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
              <StudentById Handle_student={Handle_student} />
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
