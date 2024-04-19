import { useState } from "react";
import { SessionBookings } from "../../../components/careerSessionTable";
import { ContentLayout } from "../../../components/contentLayout";
import { PageLayout } from "../../../components/pageLayout";
import { ReplayModle } from "../../../components/careerReplayModle";
import { FindSessions } from "./Actions";
import { useNavigate } from "react-router-dom";
import { GeneralSkeleton } from "../../../components/Skleton/generalSkeleton";

export const OneToOneCarrerSessions = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [student, setStudent] = useState<{
    id: string;
    email: string;
  }>({
    id: "",
    email: "",
  });
  const navigate = useNavigate();
  const { isPending, error, sessions } = FindSessions();
  function Handle_modle() {
    setOpenModel(!openModel);
  }
  function Handle_student(id: string, email: string) {
    setStudent({ id, email });
  }
  if (error) {
    navigate("/error");
  }
  return (
    <PageLayout>
      <>
        <ContentLayout>
          <>
            <div className=" w-fit px-4 py-1 bg-blue text-white font-semibold text-xl mx-auto text-center">
              ONE TO ONE Career Consultation Meeting Bookings
            </div>
            {isPending && <GeneralSkeleton />}
            {!isPending && sessions && (
              <SessionBookings
                sessions={sessions}
                Handle_student={Handle_student}
                Handle_modle={Handle_modle}
              />
            )}
            {openModel && (
              <ReplayModle
                Handle_modle={Handle_modle}
                item={student}
                sessions={sessions}
              />
            )}
          </>
        </ContentLayout>
      </>
    </PageLayout>
  );
};
