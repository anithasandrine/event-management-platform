import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  FindSchools,
  FindSYearOfstudies,
} from "../containers/admin/supperAdmin/Actions";
import { GeneralSkeleton } from "./Skleton/generalSkeleton";

export const SchoolsAndDepartment = ({
  HandleSelection,
  navigate,
}: {
  HandleSelection: (receiver: Receiver) => void;
  navigate: (url: string) => void;
}) => {
  const [openSchool, setOpenSchool] = useState<string[]>([]);
  const [openDepartment, setOpenDepartment] = useState<string[]>([]);
  // new
  const [selectedSchool, setSelectedSchool] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<
    { year: string; department: string }[]
  >([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string[]>([]);
  //end new
  const { error, isPending, schools } = FindSchools();
  const { LoadingYear, Years } = FindSYearOfstudies();
  // to be changed

  useEffect(() => {
    HandleSelection({
      school: selectedSchool,
      department: selectedDepartment,
      class: selectedClass,
      year: selectedYear,
      student: [],
    });
  }, [selectedSchool, selectedDepartment, selectedClass, selectedYear]);

  if (isPending) {
    return <GeneralSkeleton />;
  }
  if (error) {
    navigate("/error");
  }
  if (schools) {
    return (
      <div className="bg-blue py-2">
        {schools.map((school: School) => {
          return (
            <div key={school.id} className=" w-full ">
              <div>
                <div className=" flex justify-start items-center gap-4 hover:bg-blueWhite w-full my-2 px-2">
                  <input
                    type="checkbox"
                    checked={selectedSchool.includes(school.id)}
                    onChange={() =>
                      setSelectedSchool((prev) =>
                        prev.includes(school.id)
                          ? prev.filter((id) => id !== school.id)
                          : [...prev, school.id]
                      )
                    }
                  />
                  <div
                    className=" w-full cursor-pointer flex items-center justify-between gap-2"
                    onClick={() =>
                      !openSchool.includes(school.id)
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
                        openSchool.includes(school.id) &&
                        !selectedSchool.includes(school.id)
                          ? faAngleUp
                          : faAngleDown
                      }
                    />
                  </div>
                </div>
                {/**department************** */}
                {openSchool.includes(school.id) &&
                  !selectedSchool.includes(school.id) &&
                  school.Departments.map((department) => {
                    return (
                      <div
                        className={`${
                          selectedDepartment !== undefined &&
                          selectedDepartment.includes(department.id)
                            ? "animate-pulse"
                            : ""
                        } `}
                      >
                        <div
                          className={`pl-10 flex items-center gap-4 ${
                            openDepartment.includes(department.id) &&
                            "bg-blueWhite"
                          } `}
                          onClick={() =>
                            setOpenDepartment((prev) =>
                              prev.includes(department.id)
                                ? prev.filter((id) => id !== department.id)
                                : [...prev, department.id]
                            )
                          }
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedDepartment !== undefined &&
                              selectedDepartment.includes(department.id)
                            }
                            onChange={() => {
                              selectedDepartment !== undefined &&
                              selectedDepartment.includes(department.id)
                                ? setSelectedDepartment((prev) =>
                                    prev?.filter((id) => id !== department.id)
                                  )
                                : setSelectedDepartment((prev) =>
                                    prev !== undefined
                                      ? [...prev, department.id]
                                      : []
                                  );

                              setSelectedClass((prev) =>
                                prev?.filter(
                                  (ele) => ele.department !== department.id
                                )
                              );
                            }}
                          />
                          <div className=" flex items-center w-full justify-between py-1 pr-6">
                            {department.name}
                            <FontAwesomeIcon
                              className=" transition ease-in-out duration-300 text-xl"
                              icon={
                                openDepartment.includes(department.id) &&
                                !selectedDepartment?.includes(department.id)
                                  ? faAngleUp
                                  : faAngleDown
                              }
                            />{" "}
                          </div>
                        </div>
                        {/**year of study */}
                        {openDepartment.includes(department.id) &&
                          !selectedDepartment?.includes(department.id) && (
                            <div className=" pl-20 gap-4">
                              {Years.map((year: YearOfStudyAttributes) => {
                                return (
                                  <div
                                    className=" flex gap-4"
                                    onClick={() =>
                                      selectedClass !== undefined &&
                                      selectedClass.some(
                                        (vale) =>
                                          vale.year === year.id &&
                                          vale.department === department.id
                                      )
                                        ? setSelectedClass((prev) =>
                                            prev?.filter(
                                              (ele) =>
                                                !(
                                                  ele.year === year.id &&
                                                  ele.department ===
                                                    department.id
                                                )
                                            )
                                          )
                                        : setSelectedClass((prev) =>
                                            prev !== undefined
                                              ? [
                                                  ...prev,
                                                  {
                                                    department: department.id,
                                                    year: year.id,
                                                  },
                                                ]
                                              : []
                                          )
                                    }
                                  >
                                    <input
                                      type="radio"
                                      checked={
                                        selectedClass !== undefined &&
                                        selectedClass.some(
                                          (value) =>
                                            value.year === year.id &&
                                            value.department === department.id
                                        )
                                      }
                                    />
                                    <p>{year.name}</p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
        {/**sepecific year */}
        {!LoadingYear && (
          <div className=" mt-4 pt-2">
            <h1 className=" w-fit mx-auto text-lg font-semibold">
              Selete specificYear
            </h1>
            <div className=" w-fit mx-auto">
              {Years.map((year: YearOfStudyAttributes) => {
                return (
                  <div className=" flex items-center justfy-start gap-4">
                    <input
                      type="radio"
                      checked={selectedYear?.includes(year.id)}
                      onClick={() =>
                        selectedYear && selectedYear.includes(year.id)
                          ? setSelectedYear((prev) =>
                              prev ? prev.filter((id) => id !== year.id) : []
                            )
                          : setSelectedYear((prev) =>
                              prev ? [...prev, year.id] : []
                            )
                      }
                    />
                    <p>{year.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
};
