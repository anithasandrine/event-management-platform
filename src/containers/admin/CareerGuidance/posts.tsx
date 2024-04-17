import { SetStateAction, useState } from "react";
import { ContentLayout } from "../../../components/contentLayout";
import { PageLayout } from "../../../components/pageLayout";
import { AdminSkeleton } from "../../../components/Skleton/adminSkeleton";
import { useNavigate } from "react-router-dom";
import { CareerAddPostModel } from "../../../components/careerAddPostModel";
import Tippy from "@tippyjs/react";
import { PostsTable } from "../../../components/careerPostTable";
import { FindAllPosts } from "./Actions";
import { filterTypes } from "../../../utils/fitlterPostTypes";
import { DeletePost } from "../../../components/careerDeletePost";
import { EditPost } from "../../../components/form/Career/editPost";

export const CareerPostsDashboard = () => {
  const [ismodelOpen, setIsmodelOpen] = useState<boolean>(false);
  const [oppenAdd, setOpenAdd] = useState<boolean>(false);
  const [oppenEdit, setOpenEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [TableData, setTableData] = useState<CareerPostAtributes[]>();
  const [item, setItem] = useState<{
    id: string;
    name: string;
    post: PostAtributes;
  } | null>(null);
  const [selectedChategory, setSelectedCategory] = useState<string>();
  const { isPending, error, Posts } = FindAllPosts();

  const navigate = useNavigate();
  function Handle_modle() {
    setIsmodelOpen(!ismodelOpen);
    setOpenAdd(false);
    setOpenEdit(false);
  }
  function Handle_Addmodel() {
    setOpenAdd(!oppenAdd);
    setIsmodelOpen(false);
    setOpenEdit(false);
  }
  function Handle_EditModel() {
    setOpenEdit(!oppenEdit);
    setOpenAdd(false);
    setIsmodelOpen(false);
  }

  function Handle_id(id: string, name: string, post: PostAtributes) {
    setItem({ id, name, post });
  }

  function Handle_TableSearch(e: {
    target: { value: SetStateAction<string | undefined> };
  }) {
    setSearch(e.target.value);
  }

  function Fielter_searchedData(search: string, data: CareerPostAtributes[]) {
    const value = data.filter(
      (elements: CareerPostAtributes) =>
        elements.title.match(new RegExp(search, "ig")) ||
        elements.author.match(new RegExp(search, "ig"))
    );
    setTableData(value);
    setSelectedCategory("");
  }

  function Fielter_ByCategory(search: string, data: CareerPostAtributes[]) {
    const value = data.filter((elements: CareerPostAtributes) =>
      elements.category.match(new RegExp(search, "ig"))
    );
    setTableData(value);
  }

  if (isPending) {
    return <AdminSkeleton />;
  }
  if (error) {
    return navigate("/error");
  }
  let foundTypes: string[] = [];
  if (Posts) {
    foundTypes = filterTypes(Posts?.message);
  }
  return (
    Posts && (
      <PageLayout>
        <ContentLayout>
          <div className=" w-full h-full min-h-fit relative">
            <div className=" flex justify-start items-center gap-6">
              <Tippy content="create post">
                <button
                  onClick={Handle_Addmodel}
                  className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
                >
                  Make post
                </button>
              </Tippy>

              <button
                onClick={() => navigate(-1)}
                className=" bg-blue hover:bg-blueWhite px-6 py-1  mt-4 md:mt-0 text-white "
              >
                Back
              </button>
            </div>

            {oppenAdd && (
              <CareerAddPostModel Handle_Addmodle={Handle_Addmodel} />
            )}

            {!oppenAdd && !oppenEdit && (
              <div>
                <div className="mt-4 flex flex-wrap w-full">
                  <input
                    type="text"
                    placeholder="Type post title...."
                    onChange={Handle_TableSearch}
                    className=" md:min-w-[40%]  px-2 py-1 my-1 border-[#00628B]  border-[1px] outline-none placeholder:text-blue  "
                  />
                  <button
                    onClick={() =>
                      Fielter_searchedData(search ?? "", Posts.message)
                    }
                    className=" bg-blue hover:bg-blueWhite px-6 py-1 my-1  h-full  text-white"
                  >
                    Search
                  </button>
                </div>

                <div>
                  {foundTypes.map((type: string) => {
                    return (
                      <div
                        key={type}
                        className=" my-2 flex gap-4  items-center justify-start flex-wrap"
                      >
                        <input
                          type="checkbox"
                          checked={type === selectedChategory}
                          onChange={(e) => {
                            e.target &&
                              "checked" in e.target &&
                              e.target.checked === true &&
                              Fielter_ByCategory(type, Posts.message);
                            "checked" in e.target &&
                              e.target.checked === true &&
                              setSelectedCategory(type);
                            "checked" in e.target &&
                              e.target.checked === false &&
                              setSelectedCategory("");
                          }}
                        />
                        <span>{type}</span>
                      </div>
                    );
                  })}
                </div>
                <PostsTable
                  posts={TableData || Posts.message}
                  Handle_modle={Handle_modle}
                  Handle_id={Handle_id}
                  Handle_EditModel={Handle_EditModel}
                />
              </div>
            )}
            {ismodelOpen && (
              <DeletePost
                Handle_modle={Handle_modle}
                item={item ?? { id: "", name: "" }}
              />
            )}
            {oppenEdit && item?.post !== undefined && (
              <EditPost Handle_EditModel={Handle_EditModel} post={item?.post} />
            )}
          </div>
        </ContentLayout>
      </PageLayout>
    )
  );
};
