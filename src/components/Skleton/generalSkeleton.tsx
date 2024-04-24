import { PageLayout } from "../pageLayout";

export const GeneralSkeleton = () => {
  return (
    <PageLayout>
      <>
        {Array.from({ length: 10 }, (_, index) => (
          <div className="bg-white animate-pulse p-4 shadow rounded-md">
            <div key={index} className="mb-4">
              {/* Placeholder for content */}
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-full bg-gray-200 mb-2 rounded"></div>
              <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </>
    </PageLayout>
  );
};
