import React from "react";
import { Link } from "react-router-dom";
import Brands from "./Brands";

function FinanceList({ topic }) {
  return (
    <div className="flex flex-col  items-center mb-2 mt-8">
      <article
        className={`w-[350px]  bg-white border   border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ${
          topic.id ? "h-[500px]" : "h-[420px]"
        }`}
      >
        <img
          className="rounded-t-lg w-full h-[234px]"
          src={
            topic?.image ||
            topic?.thumbnailImage ||
            "https://www.acibadem.com.tr/hayat/Images/YayinTestler/siz-mi-paranin-esirisiniz-para-mi-sizin-esiriniz_4335_1.jpg"
          }
          loading="lazy"
          alt="image"
        />

        <div className="flex flex-1  flex-col p-5">
          <div
            className={`flex flex-col justify-center ${
              topic.id && "h-[110px]"
            }`}
          >
            <h5 className="mb-2 text-m font-bold text-gray-900 dark:text-white">
              {topic?.byline}
            </h5>

            <p className="mb-3 text-left text-sm font-normal text-gray-700 dark:text-gray-400">
              {topic?.title}
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <Link
              to={`detail/${topic?.internalID}`}
              className="inline-flex mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Brands topic={topic} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default FinanceList;
