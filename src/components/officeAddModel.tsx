import { CreateOffice } from "./form/office/createOffice";

export const AddOfficeModel = ({
  Handle_Addmodle,
}: {
  Handle_Addmodle: () => void;
}) => {
  return (
    <div className=" w-full h-fit min-h-full absolute top-0 bg-red-60 ">
      <div className="absolute -z-0 bg-black opacity-30 w-full h-full rounded-lg"></div>
      <div className="mx-auto absolute z-10 top-0 w-fit md:w-[70%] md:left-[15%] lg:left-[20%] lg:w-[60%] px-r bg-white min-h-[10rem] h-fit my-4 rounded-lg shadow-xl px-4 py-2 border-[2px]">
        <p className=" text-lg w-fit mx-auto ">Create Office</p>
        <CreateOffice Handle_Addmodle={Handle_Addmodle} />
      </div>
    </div>
  );
};
