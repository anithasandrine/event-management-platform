import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import { GeneralSkeleton } from "./Skleton/generalSkeleton";
import { StudentByRegNo } from "../containers/admin/supperAdmin/Actions";

export const StudentById = ({
  setValue,
}: {
  setValue: (key: string, value: string[]) => void;
}) => {
  const [selectedStudent, setSeletecStudent] = useState<string[]>([]);
  setValue("receiver", selectedStudent);

  const columns = [
    {
      name: "Name",
      selector: (row: { name: string }) => row.name,
    },
    {
      name: "regNo",
      selector: (row: { regNo: string }) => row.regNo,
    },
    {
      name: "Department",
      selector: (row: { Department: { name: string } }) => row.Department.name,
    },

    {
      name: "Actions",
      width: "8rem",

      cell: (row: { id: string }) => (
        <div className=" flex justify-between gap-5 relative">
          <Tippy content="SelectStudent">
            <input
              type="checkbox"
              checked={selectedStudent.includes(row.id)}
              onChange={(e) => {
                "checked" in e.target &&
                  e.target.checked === true &&
                  setSeletecStudent((prev) => [...prev, row.id]);
                "checked" in e.target &&
                  e.target.checked === false &&
                  setSeletecStudent((prev) =>
                    prev.filter((id) => id !== row.id)
                  );
              }}
            />
          </Tippy>
        </div>
      ),
    },
  ];

  const [regNO, setRegNo] = useState<string>();
  const [studetn, setStudent] = useState([]);
  const { pendingStudent, mutate } = StudentByRegNo();
  if (pendingStudent) {
    <GeneralSkeleton />;
  }
  return (
    <div>
      <div className="mt-4 flex flex-wrap w-full">
        <input
          type="text"
          value={regNO}
          placeholder="Type student regNO...."
          onChange={(e) =>
            "value" in e.target &&
            typeof e.target.value === "string" &&
            setRegNo(e.target.value)
          }
          className=" md:min-w-[40%]  px-2 py-1 my-1 text-black  border-[1px] outline-none placeholder:text-blue  "
        />
        <button
          type="button"
          onClick={() => {
            mutate(regNO ?? "", {
              onSuccess: (data) => setStudent([data]),
              onError: () => setStudent([]),
            });
            setRegNo("");
          }}
          className=" bg-blue hover:bg-blueWhite px-6 py-1 my-1  h-full  text-white"
        >
          Search
        </button>
      </div>
      <DataTable
        columns={columns}
        data={studetn}
        pagination
        theme="solarized"
      />
    </div>
  );
};