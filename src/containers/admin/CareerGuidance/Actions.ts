import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  findAllPosts,
  findPost,
  updatePost,
} from "../../../api/career";
import toast from "react-hot-toast";
import { getAllSessions, repalySession } from "../../../api/session";

export const CreatePost = () => {
  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationFn: (formData: CareerPostAtributes) => createPost(formData),
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["Posts"] });
    },
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { error, isPending, mutate };
};

export const FindAllPosts = () => {
  const {
    isPending,
    error,
    data: Posts,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: async () => await findAllPosts(),
  });
  return { isPending, error, Posts };
};

export const FindPost = (id: string) => {
  const {
    isPending: Fetching,
    error,
    data: Post,
  } = useQuery({
    queryKey: ["Post"],
    queryFn: async () => await findPost(id),
  });
  return { Fetching, error, Post };
};

export const DeletePost = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: Destroy } = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: (res: Responce) => {
      queryClient.invalidateQueries({ queryKey: ["Posts"] });
      toast.success(res.message);
    },
    onError: (error: ErrorAtributes) => {
      toast.error(error.originalError);
    },
  });
  return { isPending, Destroy };
};

export const UpdatePost = (id: string) => {
  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationFn: (formData: CareerPostAtributes) => updatePost(id, formData),
    onSuccess: () => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["Posts"] });
    },
    onError: (error: ErrorAtributes) => toast.error(error.originalError),
  });
  return { error, isPending, mutate };
};

export const FindSessions = () => {
  const {
    isPending,
    error,
    data: sessions,
  } = useQuery({
    queryKey: ["Sessoins"],
    queryFn: async () => await getAllSessions(),
  });

  return { isPending, error, sessions };
};

export const ReplaySession = (id: string) => {
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    mutate: replay,
  } = useMutation({
    mutationFn: (replay: string) => repalySession(id, replay),
    onSuccess: () => {
      toast.success("Replay sent successfully!");
      queryClient.invalidateQueries({ queryKey: ["Sessoins"] });
    },
  });
  return { isPending, error, replay };
};
