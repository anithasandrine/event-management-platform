import { SetStateAction, useState } from "react";
import { ContentLayout } from "../../../components/contentLayout";
import { PageLayout } from "../../../components/pageLayout";
import { OfficeTable } from "../../../components/officeTable";
import { DeleteOffice } from "../../../components/officeDelete";
import { AddOfficeModel } from "../../../components/officeAddModel";
import { Offices } from "./Actions";
import { AdminSkeleton } from "../../../components/Skleton/adminSkeleton";
import { useNavigate } from "react-router-dom";
import { EditModel } from "../../../components/officeEdit";

export const ManageOffice = () => {
  const [ismodelOpen, setIsmodelOpen] = useState<boolean>(false);
  const [oppenAdd, setOpenAdd] = useState<boolean>(false);
  const [oppenEdit, setOpenEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [TableData, setTableData] = useState<OfficeAttributes[]>();
  const [item, setItem] = useState<{ id: string; name: string } | null>(null);
  const { isPending, error, offices } = Offices();
  const navigate = useNavigate();
  function Handle_modle() {
    setIsmodelOpen(!ismodelOpen);
    setOpenAdd(false);
    setOpenEdit(false);
  }
  function Handle_Addmodel() {
    setOpenAdd(!oppenAdd);
    setIsmodelOpen(false);
    setOpenEdit(false);
  }
  function Handle_EditModel() {
    setOpenEdit(!oppenEdit);
    setOpenAdd(false);
    setIsmodelOpen(false);
  }

  function Handle_id(id: string, name: string) {
    setItem({ id, name });
  }

  function Handle_TableSearch(e: {
    target: { value: SetStateAction<string | undefined> };
  }) {
    setSearch(e.target.value);
  }

  function Fielter_searchedData(search: string, data: OfficeAttributes[]) {
    const value = data.filter(
      (elements: OfficeAttributes) =>
        elements.officeName.match(new RegExp(search, "ig")) ||
        elements.userName.match(new RegExp(search, "ig"))
    );
    setTableData(value);
  }

  if (isPending) {
    return <AdminSkeleton />;
  }
  if (error) {
    navigate("/error");
  }
  if (offices) {
    return (
      <PageLayout>
        <ContentLayout>
          <div className=" w-full h-full min-h-fit relative">
            <div className=" flex justify-start items-center gap-6">
              <button
                onClick={Handle_Addmodel}
                className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
              >
                Add office
              </button>
              <button
                onClick={() => navigate(-1)}
                className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
              >
                Back
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search office"
                onChange={Handle_TableSearch}
                className=" md:min-w-[40%]  px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
              />
              <button
                onClick={() =>
                  Fielter_searchedData(search ?? "", offices.message)
                }
                className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
              >
                Search
              </button>
            </div>
            {
              <OfficeTable
                offices={TableData || offices.message}
                Handle_modle={Handle_modle}
                Handle_id={Handle_id}
                Handle_EditModel={Handle_EditModel}
              />
            }
            {ismodelOpen && (
              <DeleteOffice
                Handle_modle={Handle_modle}
                item={item ?? { id: "", name: "" }}
              />
            )}
            {oppenEdit && (
              <EditModel
                Handle_Editmodle={Handle_EditModel}
                item={item ?? { id: "", name: "" }}
              />
            )}

            {oppenAdd && <AddOfficeModel Handle_Addmodle={Handle_Addmodel} />}
          </div>
        </ContentLayout>
      </PageLayout>
    );
  }
};
