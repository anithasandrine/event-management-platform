import { NavLink } from "react-router-dom";

export const LinkFormat = ({
  url,
  name,
  target,
}: {
  url: string;
  name: string;
  target?: string;
}) => {
  return (
    <NavLink to={url} target={target}>
      {({ isActive }) => (
        <div className="flex flex-col items-center">
          <div
            className={` hover:cursor-pointer hover:bg-blueWhite px-3 py-1 transition duration-300 rounded-xl `}
          >
            {name}
          </div>
          {isActive && (
            <div className="w-2 h-2 bg-white rounded-full transition duration-300 ease-in-out"></div>
          )}
        </div>
      )}
    </NavLink>
  );
};

export const LinkFormatPhone = ({
  url,
  name,
  target,
  Handle_click,
}: {
  url: string;
  name: string;
  target?: string;
  Handle_click: () => void;
}) => {
  return (
    <NavLink to={url} target={target} onClick={Handle_click}>
      {({ isActive }) => (
        <div className={`flex flex-col hover:bg-gray-100 hover:text-black`}>
          <div
            className={` hover:cursor-pointer px-3 py-1 transition duration-300 rounded-xl `}
          >
            {name}
          </div>
          {isActive && (
            <div className="w-full  h-[1px]  bg-blue rounded-full transition duration-300 ease-in-out"></div>
          )}
        </div>
      )}
    </NavLink>
  );
};
