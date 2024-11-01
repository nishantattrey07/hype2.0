/* eslint-disable react/prop-types */
export function Payout({title,amount,orders,paymentTiming}) { 
    return (
      <div className="rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] shadow-md  min-w-[300px]">
        <div className="flex gap-1">
          <h5 className="text-[#F2F2F2] m-3">{title}</h5>

          <p className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#f8fbfc"
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

        <div className="flex justify-between mb-3 gap-5 ">
          <p className="text-3xl text-white font-medium ml-3">₹{amount}</p>

          {orders ? (
            <a
              href="#"
              className="flex text-white underline underline-offset-1 font-medium mt-2"
            >
              {orders} Orders{" "}
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

        <div className="px-6 py-2 hover:bg-[#0E4F82] bg-[#0E4F82] text-[#F2F2F2] flex justify-between rounded-[8px]">
          <p>Next Payment Date:</p>
          <p>{paymentTiming}</p>
        </div>
      </div>
    );
}