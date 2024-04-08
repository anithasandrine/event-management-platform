export const DeleteStudent = ({
  Handle_modle,
  item,
}: {
  Handle_modle: () => void;
  item: { id: string; name: string };
}) => {
  return (
    <div className=" w-full h-full absolute top-0 bg-red-60">
      <div className=" bg-black opacity-30 w-full h-full rounded-lg"></div>
      <div className=" absolute top-0 w-full md:w-[70%] md:left-[15%] lg:left-[30%] lg:w-[40%] px-r bg-white min-h-[10rem] h-fit my-4 rounded-lg shadow-xl px-4 py-2 border-[2px]">
        <p className=" text-lg ">
          You are ready to delete{" "}
          <span className=" font-semibold">{item?.name}</span>
        </p>
        <div className=" flex gap-4 mt-14 justify-center items-center">
          <button
            onClick={Handle_modle}
            className=" bg-blue hover:bg-blueWhite px-6 py-1   text-xl text-white "
          >
            consel
          </button>
          <button className=" bg-red-600 hover:bg-blueWhite px-6 py-1   text-xl text-white ">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
