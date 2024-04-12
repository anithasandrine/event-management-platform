import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { QuilFormats, QuilModules } from "./form/office/QuilToolBar";

export const Quil = ({
  HandleChange,
  defaulValue,
}: {
  HandleChange: (content: string) => void;
  defaulValue?: string;
}) => {
  return (
    <div className="mb-4">
      <ReactQuill
        defaultValue={defaulValue ?? ""}
        theme="snow"
        modules={QuilModules}
        formats={QuilFormats}
        onChange={HandleChange}
      />
      <style>{`
        .ql-editor {
          min-height: 15rem;
          border: 1px solid #00628B;
        }
        
      `}</style>
    </div>
  );
};
