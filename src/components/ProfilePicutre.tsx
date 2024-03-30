import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Profile } from "../containers/pages/student/Actions";
import { ButtonLoader } from "./buttonLoader";

export const ProfilePicture = ({ student }: { student: StudentAtribute }) => {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const imageRef = useRef(null);
  const [closeProfile, setClosefile] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [bnData, setBnData] = useState<FileList>();
  const { isPending, updateProfile } = Profile();
  // get studetn
  // end of studnt

  function HandleProfile(e: React.ChangeEvent<HTMLInputElement>) {
    const d = e.target.files;
    const file = e.target.files?.[0];
    if (d) setBnData(d);
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setProfileUrl(result);
      setShowButtons(true);
    };
    reader.readAsDataURL(file);
  }

  function HandleProfileSelection() {
    if (imageRef?.current) {
      const inputElement = imageRef.current as HTMLInputElement;
      return inputElement.click();
    }
  }

  function Handle_submition() {
    if (bnData !== undefined)
      updateProfile(bnData, {
        onSuccess: () => setClosefile(false),
      });
  }

  return (
    <>
      {
        <div className=" flex flex-col gap-2 items-center">
          <div className=" relative">
            {!student?.profilePicture ? (
              <FontAwesomeIcon
                icon={faUser}
                className="text-4xl text-primary mr-2 cursor-pointer"
                onClick={() => setClosefile(true)}
              />
            ) : (
              <img
                src={student?.profilePicture}
                onClick={() => setClosefile(true)}
                className="w-[10rem] h-[10rem] rounded-full cursor-pointer"
                alt=""
              />
            )}
            {closeProfile && (
              <div className=" absolute top-0 min-w-[15rem] min-h-[10rem] rounded-xl px-4 py-2 flex  flex-col   items-center bg-gray-200">
                <div className=" flex flex-col items-center gap-2">
                  <input
                    type="file"
                    className=" hidden"
                    placeholder="shebha"
                    onChange={HandleProfile}
                    ref={imageRef}
                  />

                  <Tippy content="Change profile">
                    <img
                      src={!profileUrl ? student?.profilePicture : profileUrl}
                      className="w-[8rem] h-[8rem] rounded-full cursor-pointer"
                      alt="student prifile"
                      onClick={HandleProfileSelection}
                    />
                  </Tippy>
                  <div className={`${showButtons ? "" : "hidden"}`}>
                    <button
                      type="button"
                      className="bg-blue hover:bgSecondary text-white py-1 px-4 rounded hover:bg-secondary"
                      onClick={Handle_submition}
                    >
                      Update
                      {isPending && <ButtonLoader />}
                    </button>
                    <button
                      type="button"
                      className="bg-blue ml-3 hover:bgSecondary text-white py-1 px-4 rounded hover:bg-secondary"
                      onClick={() => {
                        setClosefile(false);
                        setProfileUrl("");
                        setShowButtons(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {!showButtons && (
                  <FontAwesomeIcon
                    icon={faClose}
                    className=" absolute top-4 right-4 text-xl text-red-600 cursor-pointer"
                    onClick={() => {
                      setClosefile(false);
                      setProfileUrl("");
                    }}
                  />
                )}
              </div>
            )}
          </div>
          <h2 className="text-2xl font-semibold text-primary">{`${student?.name}`}</h2>
        </div>
      }
    </>
  );
};
