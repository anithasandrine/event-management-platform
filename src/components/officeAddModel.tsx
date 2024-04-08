import { CreateOffice } from "./form/office/createOffice";

export const AddOfficeModel = ({
  Handle_Addmodle,
}: {
  Handle_Addmodle: () => void;
}) => {
  return (
    <div className=" w-full h-full absolute top-0 bg-red-60">
      <div className=" bg-black opacity-30 w-full h-full rounded-lg"></div>
      <div className=" absolute top-0 w-full md:w-[70%] md:left-[15%] lg:left-[30%] lg:w-[40%] px-r bg-white min-h-[10rem] h-fit my-4 rounded-lg shadow-xl px-4 py-2 border-[2px]">
        <p className=" text-lg ">Create Office</p>
        <CreateOffice Handle_Addmodle={Handle_Addmodle} />
      </div>
    </div>
  );
};
