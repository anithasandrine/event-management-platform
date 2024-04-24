import { PageLayout } from "../pageLayout";

export const AdminSkeleton = () => {
  return (
    <PageLayout>
      <div className=" overflow-auto">
        {Array.from({ length: 7 }).map(() => {
          return (
            <div className="animate-pulse flex justify-between">
              <div className="px-6 py-4 ">
                <div className="w-24 md:w-28 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="px-6 py-4 whitespace-nowrap">
                <div className="w-24 md:w-28 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="px-6 py-4 whitespace-nowrap">
                <div className="w-24 md:w-28 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="px-6 py-4 whitespace-nowrap">
                <div className="w-24 md:w-28 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};
