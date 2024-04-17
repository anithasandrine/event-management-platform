import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";

export const OfficeTable = ({
  Handle_modle,
  Handle_EditModel,
  Handle_id,
  offices,
}: {
  Handle_modle: () => void;
  Handle_EditModel: () => void;
  Handle_id: (id: string, name: string, office: OfficeAttributes) => void;
  offices: OfficeAttributes[];
}) => {
  // const conditionalRow = [
  //   {
  //     when: (row: OfficeAttributes, index: number) => index % 2 === 0,
  //     style: {
  //       backgroundColor: "#3384a7",
  //     },
  //   },
  // ];
  const columns = [
    {
      name: "Name",
      selector: (row: OfficeAttributes) => row.officeName,
    },
    {
      name: "Email",
      selector: (row: OfficeAttributes) => row.officeEmail,
    },
    {
      name: "Phone",
      selector: (row: OfficeAttributes) => row.officePhone,
    },
    {
      name: "Actions",
      width: "8rem",

      cell: (row: OfficeAttributes) => (
        <div className=" flex justify-between gap-5 relative">
          <button
            onClick={() => {
              Handle_EditModel();
              Handle_id(row.id, row.officeName, row);
            }}
          >
            <Tippy content="Edit">
              <FontAwesomeIcon
                className=" text-blue hover:text-blueWhite text-xl"
                icon={faEdit}
              />
            </Tippy>
          </button>
          <button
            onClick={() => {
              Handle_modle();
              Handle_id(row.id, row.officeName, row);
            }}
          >
            <Tippy content="Delete">
              <FontAwesomeIcon
                className=" text-blue hover:text-red-600 text-xl"
                icon={faTrash}
              />
            </Tippy>
          </button>
        </div>
      ),
    },
  ];
  console.log(offices);
  return (
    <div>
      <DataTable
        columns={columns}
        data={offices}
        pagination
        theme="solarized"
      />
    </div>
  );
};
