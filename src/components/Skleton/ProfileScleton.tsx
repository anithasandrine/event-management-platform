export const ProfileScreton = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4 items-center justify-between">
          <div className="flex flex-col gap-2 items-center">
            <div className="h-20 w-20 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex-shrink-0">
            <div className="h-5 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </dd>
          </div>
          {/*more profile details  */}
        </dl>
      </div>
    </div>
  );
};
