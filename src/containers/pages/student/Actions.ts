import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  comfirmUpdateInfo,
  getStudentById,
  studentUpdateInfo,
  studentUpdatePicture,
  updatePassword,
} from "../../../api/student";
import { createSession } from "../../../api/session";

export const Profile = () => {
  const { isPending, mutate: updateProfile } = useMutation({
    mutationFn: (Files: FileList) => studentUpdatePicture(Files),
    onSuccess: (res: Responce) => toast.success(res.message),
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, updateProfile };
};

export const Student = (id: string) => {
  const {
    isPending: pendingStudent,
    error,
    data: student,
  } = useQuery({
    queryKey: ["Student"],
    queryFn: async () => await getStudentById(id),
  });
  return { pendingStudent, error, student };
};

export const UpdateInfo = () => {
  const { isPending, mutate: updateProfile } = useMutation({
    mutationFn: (data: UpdateStudentAttributes) => studentUpdateInfo(data),
    onSuccess: (res: Responce) => toast.success(res.message),
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, updateProfile };
};

export const Confirm = () => {
  const { isPending, mutate: confirmUpdate } = useMutation({
    mutationFn: (data: ConfirmStudentAttributes) => comfirmUpdateInfo(data),
    onSuccess: (res: Responce) => toast.success(res.message),
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, confirmUpdate };
};

export const UpdatePassword = () => {
  const { isPending, mutate: updatepassword } = useMutation({
    mutationFn: (data: UpdatePasswordAttributes) => updatePassword(data),
    onSuccess: (res: Responce) => toast.success(res.message),
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, updatepassword };
};

export const CreateSession = () => {
  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationFn: (bookingReason: string) => createSession(bookingReason),
    onSuccess: (data: Responce) => {
      toast.success(data?.message ?? "Booking created successfuly!");
      queryClient.invalidateQueries({ queryKey: ["Session"] });
    },
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { error, isPending, mutate };
};
