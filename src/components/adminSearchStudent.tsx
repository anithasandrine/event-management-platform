import DataTable, { TableColumn } from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import { GeneralSkeleton } from "./Skleton/generalSkeleton";
import { StudentByRegNo } from "../containers/admin/supperAdmin/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const AdminSearchStudentById = ({
  Handle_student,
  Handle_openModel,
}: {
  Handle_student: (student: StudentAtribute) => void;
  Handle_openModel: () => void;
}) => {
  const [regNO, setRegNo] = useState<string>();
  const [studetn, setStudent] = useState<StudentAtribute[]>([]);
  const { pendingStudent, mutate } = StudentByRegNo();
  if (pendingStudent) {
    <GeneralSkeleton />;
  }
  const columns: TableColumn<StudentAtribute>[] = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "regNo",
      selector: (row: { regNo: string }) => row.regNo,
    },
    {
      name: "Email",
      selector: (row: { updatedEmail: string }) => row.updatedEmail,
    },
    {
      name: "Phone",
      selector: (row: { updatedPhone: string }) => row.updatedPhone,
    },
    {
      name: "Department",
      selector: (row) => row.Department.name,
    },

    {
      name: "Actions",
      width: "8rem",

      cell: () => (
        <div className=" flex justify-between gap-5">
          <Tippy content="Edit">
            <button
              className=" text-blue text-lg w-full mx-auto"
              onClick={() => {
                Handle_student(studetn[0]);
                Handle_openModel();
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </Tippy>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mt-4 flex flex-wrap w-full">
        <input
          type="text"
          value={regNO}
          placeholder="Type student regNo...."
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
              onSuccess: (data: StudentAtribute) => setStudent([data]),
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
