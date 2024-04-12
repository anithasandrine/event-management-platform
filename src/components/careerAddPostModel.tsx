import { CreatePost } from "./form/Career/createPost";

export const CareerAddPostModel = ({
  Handle_Addmodle,
}: {
  Handle_Addmodle: () => void;
}) => {
  return (
    <div className=" w-full mt-2 rounded-xl flex justify-center items-center  inset-0 h-fit z-10 relative">
      <div className=" absolute w-full rounded-lg h-full bg-black  opacity-50 z-0"></div>
      <div className=" py-2 max-w-full md:w-[70%] lg:w-[55%] xl:w-[50%] px-r bg-white min-h-[10rem] h-fit md:my-6 rounded-lg shadow-xl px-4 border-[2px] z-10">
        <p className=" text-xl font-bold text-blue mx-auto w-fit">
          Make a Post
        </p>
        <CreatePost Handle_Addmodle={Handle_Addmodle} />
      </div>
    </div>
  );
};
