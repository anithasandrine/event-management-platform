import DataTable, { TableColumn } from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { TextSlice } from "../utils/textlength";

export const SessionBookings = ({
  Handle_student,
  Handle_modle,
  sessions,
}: {
  Handle_student: (id: string, email: string) => void;
  Handle_modle: () => void;
  sessions: SessionAttribute[];
}) => {
  const columns: TableColumn<SessionAttribute>[] = [
    {
      name: "Student Name",
      selector: (row: SessionAttribute) =>
        TextSlice(row?.Student?.name ?? "", 20),
    },
    {
      name: "Department",
      selector: (row: SessionAttribute) => row?.Student?.Department?.name ?? "",
    },
    {
      name: "Year",
      selector: (row: SessionAttribute) =>
        TextSlice(row.Student?.YearOfStudy?.name ?? "", 20),
    },
    {
      name: "Reg Number ",
      selector: (row: SessionAttribute) =>
        TextSlice(row?.Student?.regNo ?? "", 20),
    },
    {
      name: "Email",
      selector: (row: SessionAttribute) =>
        TextSlice(row?.Student?.updatedEmail ?? "", 20),
    },
    {
      name: "Phone",
      selector: (row: SessionAttribute) =>
        TextSlice(row.Student?.updatedPhone ?? "", 20),
    },
    {
      name: "Actions",
      width: "8rem",

      cell: (row: SessionAttribute) => (
        <div className=" flex justify-between gap-5 relative">
          <button
            disabled={row.replay !== null}
            className={`${
              row?.replay !== null ? "bg-blue" : "bg-green-400"
            }  text-white px-4 py-1 rounded-lg`}
            onClick={() => {
              Handle_student(row?.id ?? "", row?.Student?.updatedEmail ?? "");
              Handle_modle();
            }}
          >
            <Tippy content="Edit">
              <span>{row?.replay !== null ? "Replayed" : "Replay"}</span>
            </Tippy>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={sessions}
        pagination
        theme="solarized"
      />
    </div>
  );
};
