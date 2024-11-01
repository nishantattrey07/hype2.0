/* eslint-disable react/prop-types */
export function RevenueCard({ title, revenue, orderCount }) {
  return (
    <div className=" flex-grow flex flex-col h-fit rounded-[8px] bg-white shadow-md min-w-[300px]">
      <div className="flex  gap-1 text-gray-600 m-5">
        <h5 className="text-gray-600 text-sm">{title}</h5>
        <p className="m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </p>
      </div>
      <div className="flex justify-between ml-5 mb-3">
        <p className="text-2xl text-black font-medium">₹{revenue}</p>
        {orderCount ? (
          <a
            href="#"
            className="flex text-blue-700 underline underline-offset-1 font-medium"
          >
            {orderCount} Orders{" "}
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
          </a>
        ) : null}
      </div>
    </div>
  );
}
