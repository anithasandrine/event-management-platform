import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-blue text-white py-4 min-h-[20vh]">
      <div className=" flex flex-col items-center  gap-12 ml-16 md:flex-row md:gap-[40%] md:mx-32 md:justify-center ">
        <div className=" w-[50%]  ">
          <h1 className=" text-xl font-bold mb-2">Contact</h1>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="pl-2">KN 67 Street Nyarugenge, Kigali</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faMailBulk} />

            <span className="pl-2">Po Box: 3900 Kigali-Rwanda</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2">info.cst@ur.ac.rw</span>
          </p>
        </div>
        <div className="w-[50%] ">
          <h1 className=" text-xl font-bold mb-2">Follow us</h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2"> instagram</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2"> facebook</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2"> twitter</span>
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};
