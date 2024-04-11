import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FindSchools } from "../containers/admin/supperAdmin/Actions";
import { GeneralSkeleton } from "./Skleton/generalSkeleton";

export const SchoolsAndDepartment = ({
  HandleSelection,
  navigate,
}: {
  HandleSelection: (receiver: Receiver[]) => void;
  navigate: (url: string) => void;
}) => {
  const [opentSchool, setOpenSchool] = useState<string[]>([]);
  const [checkedSchool, setCheckedSchool] = useState<string[]>([]);
  const [selected, setSelected] = useState<
    {
      school: string;
      dpt: string[];
    }[]
  >([]);
  const { error, isPending, schools } = FindSchools();
  HandleSelection(selected);

  if (isPending) {
    return <GeneralSkeleton />;
  }
  if (error) {
    navigate("/error");
  }
  if (schools) {
    return (
      <div className="bg-blue">
        {schools.map((school: School) => {
          return (
            <div key={school.id} className=" w-full ">
              <div>
                <div className=" flex justify-start items-center gap-4 hover:bg-blueWhite w-fit my-2 px-2">
                  <input
                    onChange={(e) => {
                      const target = e.target;
                      "checked" in target &&
                        target.checked === true &&
                        setCheckedSchool((prev) => [...prev, school.id]);
                      "checked" in target &&
                        target.checked === true &&
                        setSelected((prev) => {
                          const schoolExists = prev.some(
                            (element) => element.school === school.id
                          );
                          if (!schoolExists) {
                            return [...prev, { school: school.id, dpt: [] }];
                          }
                          return prev.map((element) =>
                            element.school === school.id
                              ? { ...element, dpt: [] }
                              : element
                          );
                        });
                      "checked" in target &&
                        target.checked === false &&
                        setSelected((prev) => {
                          return prev.filter(
                            (element) => element.school !== school.id
                          );
                        });
                      "checked" in target &&
                        target.checked === true &&
                        setOpenSchool((prev) => [...prev, school.id]);
                      "checked" in target &&
                        target.checked === false &&
                        setCheckedSchool((prev) =>
                          prev.filter((id) => id !== school.id)
                        );
                    }}
                    type="checkbox"
                  />
                  <p
                    className=" cursor-pointer flex items-center justify-start gap-2 w-fit"
                    onClick={() =>
                      !opentSchool.includes(school.id)
                        ? setOpenSchool((prev) => [...prev, school.id])
                        : setOpenSchool((prev) =>
                            prev.filter((id) => id !== school.id)
                          )
                    }
                  >
                    {school.fullName}

                    <FontAwesomeIcon
                      className=" transition ease-in-out duration-300 text-xl"
                      icon={
                        opentSchool.includes(school.id) &&
                        !checkedSchool.includes(school.id)
                          ? faAngleUp
                          : faAngleDown
                      }
                    />
                  </p>
                </div>
                {/**department************** */}
                {!checkedSchool.includes(school.id) &&
                  opentSchool.includes(school.id) &&
                  school.Departments.map((department) => {
                    return (
                      <div className=" pl-6 flex items-center gap-4">
                        <input
                          onChange={(e) => {
                            const target = e.target;
                            "checked" in target &&
                              target.checked === true &&
                              setSelected((prev) => {
                                const schoolExists = prev.some(
                                  (element) => element.school === school.id
                                );
                                if (!schoolExists) {
                                  return [
                                    ...prev,
                                    { school: school.id, dpt: [department.id] },
                                  ];
                                }
                                return prev.map((element) =>
                                  element.school === school.id
                                    ? {
                                        ...element,
                                        dpt: [...element.dpt, department.id],
                                      }
                                    : element
                                );
                              });

                            "checked" in target &&
                              target.checked === false &&
                              setSelected((prev) => {
                                return prev.map((element) =>
                                  element.school === school.id
                                    ? {
                                        ...element,
                                        dpt: element.dpt.filter(
                                          (id) => id !== department.id
                                        ),
                                      }
                                    : element
                                );
                              });
                          }}
                          type="checkbox"
                        />
                        <p>{department.name}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
