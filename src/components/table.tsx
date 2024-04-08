// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import DataTable from "react-data-table-component";
// import Tippy from "@tippyjs/react";

// export const Table = ({
//   Handle_modle,
//   Handle_id,
// }: {
//   Handle_modle: () => void;
//   Handle_id: (id: string, name: string) => void;
// }) => {
//   const conditionalRow = [
//     {
//       when: (row: { id: number; title: string; year: string }) =>
//         row.id % 2 === 0,
//       style: {
//         backgroundColor: "#3384a7",
//       },
//     },
//   ];
//   const columns = [
//     {
//       name: "Office",
//       selector: (row: { title: string }) => row.title,
//     },

//     {
//       name: "Actions",
//       width: "8rem",

//       cell: (row: { id: string; title: string }) => (
//         <div className=" flex justify-between gap-5 relative">
//           <button>
//             <Tippy content="Edit">
//               <FontAwesomeIcon
//                 className=" text-blue hover:text-blueWhite text-xl"
//                 icon={faEdit}
//               />
//             </Tippy>
//           </button>
//           <button
//             onClick={() => {
//               Handle_modle();
//               Handle_id(row.id, row.title);
//             }}
//           >
//             <Tippy content="Delete">
//               <FontAwesomeIcon
//                 className=" text-blue hover:text-red-600 text-xl"
//                 icon={faTrash}
//               />
//             </Tippy>
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const data = [
//     {
//       id: 1,
//       title: "Beetlejuice",
//       year: "1988",
//     },
//     {
//       id: 2,
//       title: "Ghostbusters",
//       year: "1984",
//     },
//     {
//       id: 3,
//       title: "Beetlejuice",
//       year: "1988",
//     },
//   ];

//   //   createTheme("solarized", {}, "");
//   //   const pending = false;
//   return (
//     <div>
//       <DataTable
//         columns={columns}
//         data={data}
//         pagination
//         theme="solarized"
//         conditionalRowStyles={conditionalRow}
//       />
//     </div>
//   );
// };
