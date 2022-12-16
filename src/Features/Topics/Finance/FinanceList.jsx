import React from "react";

function FinanceList({ topic }) {
  return (
    <div className="flex flex-col  items-center mb-2 mt-8">
      <article
        className={`w-[350px] bg-white border   border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ${
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

        <div className="p-5">
          <h5 className="mb-2 text-m font-bold text-gray-900 dark:text-white">
            {topic?.byline}
          </h5>

          <p className="mb-3 text-left text-sm font-normal text-gray-700 dark:text-gray-400">
            {topic?.title}
          </p>
          <a
            href="#"
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
          </a>
          <div className="flex justify-start items-center mt-2">
            {topic?.id ? (
              <>
                <svg
                  className="opacity-75 mr-2"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 97.16 97.16"
                >
                  <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
                  <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
                </svg>
                <span className="font-bold text-gray-500">
                  {topic?.id?.substring(0, 10)}
                </span>
              </>
            ) : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{topic?.primarySite}
              </span>
            )}
          </div>
          <div className="flex flex-wrap mt-3">
            {topic?.secondaryBrands?.map((brand) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{brand}
                </span>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
}

export default FinanceList;
