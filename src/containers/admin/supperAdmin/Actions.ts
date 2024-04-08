import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  deleteOffice,
  findAllOfficById,
  findAllOffices,
  findAllSchools,
  findStudentByRegNo,
  createOffice as office,
  sendCommunication,
  updateOffice,
} from "../../../api/offices";

export const CreateOffice = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: create } = useMutation({
    mutationFn: (data: CreateOfficeAttributes) => office(data),
    onSuccess: (res: Responce) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["Offices"] });
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, create };
};

export const Offices = () => {
  const {
    isPending,
    error,
    data: offices,
  } = useQuery({
    queryKey: ["Offices"],
    queryFn: async () => await findAllOffices(),
  });
  return { isPending, error, offices };
};

export const DeleteOffice = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: Destroy } = useMutation({
    mutationFn: (id: string) => deleteOffice(id),
    onSuccess: (res: Responce) => {
      queryClient.invalidateQueries({ queryKey: ["Offices"] });
      toast.success(res.message);
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, Destroy };
};

export const Office = (id: string) => {
  const { error, data: office } = useQuery({
    queryKey: ["Office"],
    queryFn: async () => await findAllOfficById(id),
  });
  return { error, office };
};

export const UpdateOffice = (id: string) => {
  const queryClient = useQueryClient();
  const { isPending, mutate: Update } = useMutation({
    mutationFn: (values: EditOfficeAttributes) => updateOffice(id, values),
    onSuccess: (data: Responce) => {
      queryClient.invalidateQueries({ queryKey: ["Offices"] });
      toast.success(data.message);
    },
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { isPending, Update };
};

export const SendCommunication = () => {
  const { isPending, mutate: Comunicate } = useMutation({
    mutationFn: (values: CommunicationMessage) => sendCommunication(values),
    onSuccess: (data: Responce) => {
      toast.success(data.message ?? "Something went wrong,Try again.");
    },
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { isPending, Comunicate };
};

export const FindSchools = () => {
  const {
    error,
    isPending,
    data: schools,
  } = useQuery({
    queryKey: ["Schools"],
    queryFn: async () => await findAllSchools(),
  });
  return { error, isPending, schools };
};

export const StudentByRegNo = () => {
  const { isPending: pendingStudent, mutate } = useMutation({
    mutationFn: (regNO: string) => findStudentByRegNo(regNO),
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { pendingStudent, mutate };
};
