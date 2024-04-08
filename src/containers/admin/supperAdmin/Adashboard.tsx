import { PageLayout } from "../../../components/pageLayout";
import Muhabura from "../../../assets/picture/Muhabura.png";
import { ContentLayout } from "../../../components/contentLayout";
import { useNavigate } from "react-router-dom";
export const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <ContentLayout>
        <>
          <div
            className="w-full h-[20vh] md:h-[60vh]   bg-cover bg-center relative  flex justify-center items-center "
            style={{
              backgroundImage: `url(${Muhabura})`,
            }}
          >
            <div className="mb-10 text-white z-10 md:text-2xl lg:text-3xl xl:text-4xl text-center">
              <span>Welcome to CST </span>
              <span className=" font-bold font-sans">Management Dashboard</span>
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-blue opacity-70"></div>
          </div>
          <div className=" flex flex-col md:flex-row md:gap-4 items-center md:justify-between lg:mb-12 xl:mb-14 md:max-w-[90%] lg:max-w-[60%] mx-auto my-auto md:my-10">
            <button
              onClick={() => navigate("/admin/office")}
              className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-0  text-white  "
            >
              Manage Offices
            </button>
            <button
              onClick={() => navigate("/admin/student")}
              className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
            >
              Manage Student
            </button>
            <button
              onClick={() => navigate("/admin/communicate")}
              className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
            >
              Communications
            </button>
          </div>
        </>
      </ContentLayout>
    </PageLayout>
  );
};
