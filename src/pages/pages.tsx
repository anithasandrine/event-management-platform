import { AdminDashboard } from "../containers/admin/supperAdmin/Adashboard";
import { Login } from "../containers/Auth/login";
import { Signup } from "../containers/Auth/signup";
import { Error } from "../containers/error";
import { LandingPage } from "../containers/Home";
import { NotFound } from "../containers/Notfound";
import { CareerDashboard } from "../containers/admin/CareerGuidance/carrerDashboard";
import { Mailing } from "../containers/pages/mail/mailing";
import { OfficeDashboard } from "../containers/admin/offices/dashboard";
import { CareerHome } from "../containers/pages/careerGuidance/carrerHome";
import { CareerPost } from "../containers/pages/careerGuidance/careerPosts";
import { BookCareerSession } from "../containers/pages/careerGuidance/bookSession";
import { Velification } from "../containers/Auth/verfication";
import { ForgetPassword } from "../containers/Auth/frogetPassword";
import { ResetPassword } from "../containers/Auth/resetPassword";
import { UnOuthorized } from "../containers/unouthrozed";
import { StudentProfile } from "../containers/pages/student/studentProfile";
import AdminProfile from "../containers/admin/supperAdmin/profile";
import { OfficeProfile } from "../containers/admin/OfficeProfile";
import { UpdateStudentProfile } from "../containers/pages/student/updatePrifile";
import { ConfirmProfileUpdale } from "../containers/pages/student/confirmUpdate";
import { ChangePassword } from "../containers/pages/student/changePassword";
import { ManageOffice } from "../containers/admin/supperAdmin/manageOffice";
import { ManageStudent } from "../containers/admin/supperAdmin/manageStudent";
import { ManageCommunication } from "../containers/admin/supperAdmin/communication";
import { UpdateOfficePassword } from "../containers/admin/UpdateOfficePassword";
import { UpdateOfficeProfile } from "../containers/admin/updateOffice";
import { CareerPostsDashboard } from "../containers/admin/CareerGuidance/posts";
import { OneToOneCarrerSessions } from "../containers/admin/CareerGuidance/sesions";

export const HomePage = () => <LandingPage />;
export const SignUP = () => <Signup />;
export const VerficationPage = () => <Velification />;
export const LoginPage = () => <Login />;
export const ForgetPasswordPage = () => <ForgetPassword />;
export const ResetPasswordPage = () => <ResetPassword />;
export const StudentProfilePage = () => <StudentProfile />;
export const CareerPostPage = () => <CareerPost />;
export const BookCareerSessionPage = () => <BookCareerSession />;
export const CareerHomPage = () => <CareerHome />;

export const UpdateStudentPage = () => <UpdateStudentProfile />;
export const ConfirmUpdatePage = () => <ConfirmProfileUpdale />;
export const ChangePasswordPage = () => <ChangePassword />;

export const OfficesDashboard = () => <OfficeDashboard />;
export const UpdateOfficePasswordPage = () => <UpdateOfficePassword />;
export const UpdateOfficePage = () => <UpdateOfficeProfile />;

export const CarrerGuidanceDashboard = () => <CareerDashboard />;
export const CareerGuidancePostDashboardPage = () => <CareerPostsDashboard />;
export const CareerGuidanceSessionPage = () => <OneToOneCarrerSessions />;

// general
export const OfficeProfilePage = () => <OfficeProfile />;

export const SupperAdmin = () => <AdminDashboard />;
export const AdminProfilePage = () => <AdminProfile />;
export const ManageOfficePage = () => <ManageOffice />;
export const ManageStudentPage = () => <ManageStudent />;
export const Communications = () => <ManageCommunication />;

export const UnOuthorizedPage = () => <UnOuthorized />;
export const NotFoundPage = () => <NotFound />;
export const ErrorPage = () => <Error />;
export const CommunicatingPage = () => <Mailing />;
