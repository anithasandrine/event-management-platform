import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "../../FormError";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../../buttonLoader";
import { Quil } from "../../reactQuil";
import {
  FindPost,
  UpdatePost,
} from "../../../containers/admin/CareerGuidance/Actions";
import { GeneralSkeleton } from "../../Skleton/generalSkeleton";

export function EditPost({
  Handle_EditModel,
  postId,
}: {
  Handle_EditModel: () => void;
  postId: string;
}) {
  const { register, handleSubmit, setValue, reset, formState } =
    useForm<CareerPostAtributes>();
  const { errors } = formState;
  const navigate = useNavigate();
  const { Fetching, Post } = FindPost(postId);
  const { isPending, error, mutate } = UpdatePost(postId);
  const subForm: SubmitHandler<CareerPostAtributes> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        Handle_EditModel();
      },
    });
  };
  function Handle_updatePassword(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    handleSubmit(subForm)(e);
  }

  function HandleChange(content: string) {
    setValue("description", content);
  }

  if (error) {
    navigate("/error");
  }
  if (Fetching) {
    return GeneralSkeleton;
  }

  if (Post && Post.message) {
    const post: CareerPostAtributes = Post?.message;
    return (
      <>
        <form
          onSubmit={Handle_updatePassword}
          className="mt-4 xl:mt-12 px-2 w-full md:shadow-xl md:px-4 md:py-4 lg:text-xl flex flex-col items-center "
        >
          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
            type="text"
            defaultValue={post.title}
            placeholder="Post Title"
            {...register("title", {
              required: "User name is required",
            })}
          />
          {errors?.title?.message && (
            <FormError>
              {<span>{errors.title.message.toString()}</span>}
            </FormError>
          )}

          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
            type="text"
            defaultValue={post.category}
            placeholder="category"
            {...register("category", {
              required: "Office name is required",
            })}
          />
          {errors?.category?.message && (
            <FormError>
              {<span>{errors.category.message.toString()}</span>}
            </FormError>
          )}

          <Quil HandleChange={HandleChange} defaulValue={post.description} />
          {errors?.description?.message && (
            <FormError>
              {<span>{errors.description.message.toString()}</span>}
            </FormError>
          )}

          <input
            disabled={isPending}
            className=" w-full px-2 py-1 border-[#00628B]  border-[1px] outline-none mb-4 placeholder:text-blue  "
            type="text"
            defaultValue={post.author}
            placeholder="Auther "
            {...register("author", {
              required: "Auther name  is required",
            })}
          />
          {errors?.author?.message && (
            <FormError>
              {<span>{errors.author.message.toString()}</span>}
            </FormError>
          )}

          <div className=" flex flex-col md:flex-row md:gap-4 lg:gap-6 xl:gap-8">
            <button
              disabled={isPending}
              className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Update
              {isPending && <ButtonLoader />}
            </button>

            <button
              disabled={isPending}
              onClick={Handle_EditModel}
              className=" bg-blue hover:bg-blueWhite px-6 py-1 mt-4 md:mt-8 lg:mt-10   text-white  italic disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Close
            </button>
          </div>
        </form>
      </>
    );
  }
}
