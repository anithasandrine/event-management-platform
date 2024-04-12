import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { TextSlice } from "../utils/textlength";
import { formatDate } from "../utils/formatDate";

export const PostsTable = ({
  Handle_modle,
  Handle_EditModel,
  Handle_id,
  posts,
}: {
  Handle_modle: () => void;
  Handle_EditModel: () => void;
  Handle_id: (id: string, name: string) => void;
  posts: PostAtributes[];
}) => {
  const columns = [
    {
      name: "Title",
      selector: (row: PostAtributes) => TextSlice(row.title, 20),
    },
    {
      name: "Post Description",
      call: (row: PostAtributes) => (
        <div dangerouslySetInnerHTML={{ __html: row.description }} />
      ),
    },
    {
      name: "Category",
      selector: (row: PostAtributes) => TextSlice(row.category, 10),
    },
    {
      name: "Publication Date",
      selector: (row: PostAtributes) => formatDate(row.createdAt),
    },
    {
      name: "Author",
      selector: (row: PostAtributes) => row.author,
    },
    {
      name: "Actions",
      width: "8rem",

      cell: (row: PostAtributes) => (
        <div className=" flex justify-between gap-5 relative">
          <button
            onClick={() => {
              Handle_EditModel();
              Handle_id(row.id, row.title);
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
              Handle_id(row.id, row.title);
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
  console.log(posts);
  return (
    <div>
      <DataTable columns={columns} data={posts} pagination theme="solarized" />
    </div>
  );
};
