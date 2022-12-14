import React from "react";

function FinanceList({ topic }) {
  return (
    <div className="flex flex-col  items-center mb-2 mt-8">
      <article className="w-[350px] bg-white border h-[380px] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-[234px]"
          src={
            topic?.image ||
            topic?.thumbnailImage ||
            "https://www.acibadem.com.tr/hayat/Images/YayinTestler/siz-mi-paranin-esirisiniz-para-mi-sizin-esiriniz_4335_1.jpg"
          }
          alt="image"
        />

        <div className="p-5">
          <p className="mb-3 text-left text-sm font-normal text-gray-700 dark:text-gray-400">
            {topic?.title}
          </p>
          <a
            href="#"
            className="inline-flex mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                fillule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}

export default FinanceList;
