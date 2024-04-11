import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { QuilFormats, QuilModules } from "./form/office/QuilToolBar";

export const Quil = ({
  HandleChange,
}: {
  HandleChange: (content: string) => void;
}) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={QuilModules}
        formats={QuilFormats}
        onChange={HandleChange}
      />
      <style>{`
        .ql-editor {
          min-height: 15rem
        }
      `}</style>
    </>
  );
};
