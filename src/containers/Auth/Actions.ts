import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { studentSignUP } from "../../api/student";
import toast from "react-hot-toast";
import { emailVerification, phoneVerification } from "../../api/verification";
import { forgetPassword, login, resetPassword } from "../../api/login";

type Student = {
  regNo: string;
  updatedEmail: string;
  updatedPhone: string;
  password: string;
  confirmPassword: string;
};

export const StudentSignUP = () => {
  const { isPending, error, mutate } = useMutation({
    mutationFn: (data: Student) => studentSignUP(data),
    onError: (err: ErrorAtributes) => {
      toast.error(
        err?.originalError ?? "something went wrong. try again in while."
      );
    },
    onSuccess: (res: Responce) => {
      toast.success(res.message);
      if (
        "JWT" in res &&
        typeof res.JWT === "string" &&
        "role" in res &&
        typeof res.role === "string"
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            accessToken: res.JWT,
            role: res.role,
            profilePicture: res?.profilePicture,
            name: res?.name,
            id: res?.id,
          })
        );
      }
    },
  });

  return { isPending, error, mutate };
};

export const VerfiyEmail = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (id: string) => emailVerification(id),
    onSuccess: (res: Responce) => toast.success(res.message),
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
      setTimeout(() => {
        navigate("/register");
      }, 4000);
    },
  });
  return { mutate };
};

export const VerfiyPhone = () => {
  const { isPending: PhonePending, mutate: mutatePhone } = useMutation({
    mutationFn: (token: PhoneToken) => phoneVerification(token),
    onSuccess: (res: Responce) => {
      toast.success(res.message);
      if (
        "JWT" in res &&
        typeof res.JWT === "string" &&
        "role" in res &&
        typeof res.role === "string"
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            accessToken: res.JWT,
            role: res.role,
            profilePicture: res?.profilePicture,
            name: res?.name,
            id: res?.id,
          })
        );
      }
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { PhonePending, mutatePhone };
};

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPending, mutate } = useMutation({
    mutationFn: (credentails: LoginAttributes) => login(credentails),
    onSuccess: (res: RoginResponce) => {
      toast.success(res.message);

      localStorage.setItem(
        "user",
        JSON.stringify({
          accessToken: res.JWT,
          role: res.role,
          profilePicture: res?.profilePicture,
          name: res?.name,
          id: res?.id,
        })
      );

      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: ErrorAtributes) => {
      localStorage.removeItem("user");
      toast.error(error.originalError);
    },
  });
  return { isPending, mutate };
};

export const Logout = () => {
  localStorage.removeItem("user");
};

export const ForgetPassword = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (forget: forgetPasswordAttributes) => forgetPassword(forget),
    onSuccess: (res: Responce) => {
      toast.success(res.message);
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, mutate };
};

export const ResetPassword = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: (reset: resetPasswordAttributes) => resetPassword(reset),
    onSuccess: (res: Responce) => {
      toast.success(res.message);
      if (
        "JWT" in res &&
        typeof res.JWT === "string" &&
        "role" in res &&
        typeof res.role === "string"
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            accessToken: res.JWT,
            role: res.role,
            profilePicture: res?.profilePicture,
            name: res?.name,
            id: res?.id,
          })
        );
      }
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, mutate };
};
