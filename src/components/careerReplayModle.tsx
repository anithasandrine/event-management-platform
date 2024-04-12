import { useForm } from "react-hook-form";
import { FormError } from "./FormError";
import { FormEvent } from "react";
import { ReplaySession } from "../containers/admin/CareerGuidance/Actions";

export const ReplayModle = ({
  Handle_modle,
  item,
  sessions,
}: {
  Handle_modle: () => void;
  item: { id: string; email: string };
  sessions: SessionAttribute[];
}) => {
  const { register, handleSubmit, setValue, reset, formState } = useForm<{
    subject: string;
    email: string;
    replay: string;
  }>();
  const { errors } = formState;
  const { isPending, error, replay } = ReplaySession(item.id);
  const content = sessions.filter(
    (session: SessionAttribute) => session.id === item.id
  )[0].bookingReason;

  function onsubmit(data: any) {
    replay(data, {
      onSuccess: () => {
        reset();
        Handle_modle();
      },
    });
    console.log(data);
  }
  function Handle_submit(e: FormEvent<HTMLElement>) {
    setValue("email", item?.email ?? "");
    e.preventDefault();
    handleSubmit(onsubmit)(e);
  }
  return (
    <div className="fixed top-10 left-auto right-auto h-full">
      <form
        onSubmit={Handle_submit}
        className=" w-full px-r bg-white min-h-[10rem] h-fit my-4 rounded-lg shadow-xl px-4 py-2 border-[2px]"
      >
        <textarea
          disabled={true}
          value={content}
          className=" w-full px-2 py-1 shadow-lg h-[10rem] rounded-lg  border-[1px] outline-none mb-4 placeholder:text-blue  "
        ></textarea>

        <input
          disabled={true}
          className=" w-full px-2 py-1 rounded-lg shadow-lg  border-[1px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Receiver"
          value={item?.email ?? ""}
        />

        <input
          disabled={isPending}
          className=" w-full px-2 py-1 rounded-lg border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: " Image  is required",
          })}
        />
        {errors?.subject?.message && (
          <FormError>
            {<span>{errors.subject.message.toString()}</span>}
          </FormError>
        )}

        <textarea
          disabled={isPending}
          className=" w-full px-2 py-1 border-[#00628B] h-[10rem] rounded-lg  border-[1px] outline-none mb-4 placeholder:text-blue  "
          {...register("replay", {
            required: " Image  is required",
          })}
        ></textarea>
        {errors?.replay?.message && (
          <FormError>
            {<span>{errors.replay.message.toString()}</span>}
          </FormError>
        )}
        <div className=" flex gap-4 mt-14 justify-center items-center">
          <button
            onClick={Handle_modle}
            className=" bg-blue hover:bg-blueWhite px-6 py-1   text-xl text-white "
          >
            concel
          </button>
          <button className=" bg-blue hover:bg-blueWhite px-6 py-1   text-xl text-white ">
            Replay
          </button>
        </div>
      </form>
    </div>
  );
};
