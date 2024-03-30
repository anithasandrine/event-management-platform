import { ContentLayout } from "../components/contentLayout";
import Homepic from "../assets/picture/HomePicture.png";
import message from "../assets/message 1.svg";
import social_media from "../assets/social-media 1.svg";
import guidance from "../assets/guidance 1.svg";
import { PageLayout } from "../components/pageLayout";

export const LandingPage = () => {
  return (
    <PageLayout>
      <div className="w-full z-0">
        <div
          className="w-full h-[40vh] md:h-[60vh]   bg-cover bg-center relative  flex justify-center items-end "
          style={{
            backgroundImage: `url(${Homepic})`,
          }}
        >
          <div className="mb-10 text-white z-10 md:text-2xl lg:text-3xl xl:text-4xl text-center">
            <span className=" font-bold font-sans">Welcome to </span>
            University of Rwanda <br />
            <span className=" font-bold font-sans">Communication Portal</span>
          </div>
          <div className="w-full h-full absolute top-0 left-0 bg-blue opacity-50"></div>
        </div>
        <ContentLayout>
          <>
            <div>
              <p className=" text-center md:text-lg">
                Welcome to the Smart Student Communication and Engagement
                Channel, your intelligent platform for enhancing communication,
                collaboration, and student engagement at the University of
                Rwanda, College of Science and Technology. Experience a smarter
                way to stay connected, informed, and involved in the academic
                community.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 my-12">
              <div className=" flex flex-col justify-center items-center">
                <img
                  className=" w-16  h-16 md:w-24 md:h-24"
                  src={message}
                  alt="messages"
                />
                <p className=" text-center md:text-xl pt-2 md:pt-4">
                  Centralized Communication{" "}
                </p>
              </div>

              <div className=" flex flex-col justify-center items-center">
                <img
                  className=" w-16  h-16 md:w-24 md:h-24"
                  src={social_media}
                  alt="messages"
                />
                <p className=" text-center md:text-xl pt-2 md:pt-4">
                  social_media
                </p>
              </div>

              <div className=" flex flex-col justify-center items-center">
                <img
                  className=" w-16  h-16 md:w-24 md:h-24"
                  src={guidance}
                  alt="messages"
                />
                <p className=" text-center md:text-xl pt-2 md:pt-4">
                  Digital Career Guidance Services{" "}
                </p>
              </div>
            </div>
          </>
        </ContentLayout>
      </div>
    </PageLayout>
  );
};
