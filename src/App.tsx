import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  AdminProfilePage,
  BookCareerSessionPage,
  CareerGuidancePostDashboardPage,
  CareerHomPage,
  CareerPostPage,
  CarrerGuidanceDashboard,
  ChangePasswordPage,
  CommunicatingPage,
  Communications,
  ConfirmUpdatePage,
  ErrorPage,
  ForgetPasswordPage,
  HomePage,
  LoginPage,
  ManageOfficePage,
  ManageStudentPage,
  NotFoundPage,
  OfficeProfilePage,
  OfficesDashboard,
  ResetPasswordPage,
  SignUP,
  StudentProfilePage,
  SupperAdmin,
  UnOuthorizedPage,
  UpdateOfficePage,
  UpdateOfficePasswordPage,
  UpdateStudentPage,
  VerficationPage,
} from "./pages/pages";
import { Footer } from "./components/footer";
import { RequiredAuth } from "./middlewares/RequiredAuth";
import { CAREER, OFFICE, STUDENT, SUPPER_ADMIN } from "./utils/roles";
import { NavBar } from "./components/navBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* public routes */}

          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUP />} />
          <Route path="/verifiy/:id" element={<VerficationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPasswordPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          {/** students */}
          <Route
            path="/student"
            element={<RequiredAuth allowedRoles={[STUDENT]} />}
          >
            <Route path="profile/:id" element={<StudentProfilePage />} />
            <Route path="update" element={<UpdateStudentPage />} />
            <Route path="confirm" element={<ConfirmUpdatePage />} />
            <Route path="password" element={<ChangePasswordPage />} />
          </Route>
          <Route
            path="/career_guidance"
            element={
              <RequiredAuth
                allowedRoles={[CAREER, SUPPER_ADMIN, OFFICE, STUDENT]}
              />
            }
          >
            <Route index element={<Navigate replace to={"posts"} />} />
            <Route path="posts" element={<CareerHomPage />} />
            <Route path="posts/:id" element={<CareerPostPage />} />
            <Route path="session" element={<BookCareerSessionPage />} />
          </Route>

          {/* career guidacne */}
          <Route
            path="/career"
            element={<RequiredAuth allowedRoles={[CAREER]} />}
          >
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<CarrerGuidanceDashboard />} />
            <Route path="posts" element={<CareerGuidancePostDashboardPage />} />
            <Route path="sessions" element={<CarrerGuidanceDashboard />} />
          </Route>

          {/* office */}
          <Route
            path="/office"
            element={<RequiredAuth allowedRoles={[OFFICE]} />}
          >
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<OfficesDashboard />} />
          </Route>

          {/* supperAdmin */}
          <Route
            path="/admin"
            element={<RequiredAuth allowedRoles={[SUPPER_ADMIN]} />}
          >
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<SupperAdmin />} />
            <Route path="profile" element={<AdminProfilePage />} />
            <Route path="office" element={<ManageOfficePage />} />
            <Route path="student" element={<ManageStudentPage />} />
            <Route path="communicate" element={<Communications />} />
          </Route>

          {/** carrer superadmin and office */}
          <Route
            path="/office"
            element={
              <RequiredAuth allowedRoles={[SUPPER_ADMIN, CAREER, OFFICE]} />
            }
          >
            <Route path="profile/:id" element={<OfficeProfilePage />} />
            <Route path="update" element={<UpdateOfficePage />} />
            <Route path="password" element={<UpdateOfficePasswordPage />} />
            <Route path="communicate" element={<Communications />} />
          </Route>
          {/** */}
          <Route path="/mail" element={<CommunicatingPage />} />
          <Route path="/unouthorized" element={<UnOuthorizedPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#362366",
            color: "#fff",
            fontSize: "20px",
            paddingInline: "1rem 1.5rem",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
