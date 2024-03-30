import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../../../components/contentLayout";
import { PageLayout } from "../../../components/pageLayout";
// import { Table } from "../../../components/table";
// import { DeleteStudent } from "../../../components/stdDeleteModel";
// import { useState } from "react";

export const ManageStudent = () => {
  const navigate = useNavigate();
  // const [ismodelOpen, setIsmodelOpen] = useState<boolean>(false);
  // const [item, setItem] = useState<{ id: string; name: string } | null>(null);
  // function Handle_modle() {
  //   setIsmodelOpen(!ismodelOpen);
  // }
  // function Handle_id(id: string, name: string) {
  //   setItem({ id, name });
  // }
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" w-full h-full min-h-fit relative">
          <button
            onClick={() => navigate("/admin/student")}
            className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
          >
            Add student
          </button>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search student"
              className=" md:min-w-[40%]  px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
            />
            <button className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white ">
              Search
            </button>
          </div>
          {/* <Table Handle_modle={Handle_modle} Handle_id={Handle_id} /> */}
          {/* {ismodelOpen && (
            <DeleteStudent
              Handle_modle={Handle_modle}
              item={item ?? { id: "", name: "" }}
            />
          )} */}
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
