export function TabelList() { 
    const data = [
      {
        id: Math.floor(Math.random() * 100000 + 1),
        Status: Math.random() < 0.5 ? "Successful" : "Unsuccessful",
        transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
        refundDate: "Today, 8:45 PM",
        refundAmount: "₹1125.00",
      },
      {
        id: Math.floor(Math.random() * 100000 + 1),
        Status: Math.random() > 0.5 ? "Successful" : "Unsuccessful",
        transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
        refundDate: "Today, 8:45 PM",
        refundAmount: "₹1124.00",
      },
      {
        id: Math.floor(Math.random() * 100000 + 1),
        Status: Math.random() > 0.5 ? "Successful" : "Unsuccessful",
        transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
        refundDate: "Today, 8:45 PM",
        refundAmount: "₹1123.00",
      },
      {
        id: Math.floor(Math.random() * 100000 + 1),
        Status: Math.random() < 0.5 ? "Successful" : "Unsuccessful",
        transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
        refundDate: "Today, 8:45 PM",
        refundAmount: "₹1122.00",
      },
      {
        id: Math.floor(Math.random() * 100000 + 1),
        Status: Math.random() < 0.5 ? "Successful" : "Unsuccessful",
        transactionId: `TRX-${Math.floor(Math.random() * 1000000)}`,
        refundDate: "Today, 8:45 PM",
        refundAmount: "₹1125.00",
      },
    ];
    return (
      <div className="bg-[#fffefe] shadow-md rounded min-w-[300px]">
        {/* Search Bar */}
        <div className="flex justify-between gap-3 mx-3">
          <div className="flex flex-grow gap-2 items-center my-2 max-w-xs  border-[2px] border-solid border-[#dededf] rounded">
            <p className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#919091"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </p>
            <input
              type="text"
              placeholder="Order ID or transaction ID"
              className="bg-transparent w-full outline-none  text-[#9ba2ae]"
            />
          </div>

          <div className="flex gap-3 my-2 ">
            <button className="flex py-1 px-2 items-center gap-1 rounded-md bg-transparent border-solid border-[2px] border-[#dededf]">
              Sort{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#868686"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>

            <button className="bg-transparent rounded-md px-2 py-1 items-center border-solid border-[2px] border-[#dededf]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabel */}
        <div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Refund Date
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">
                  Order Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-blue-600">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.Status === "Successful"
                              ? "bg-green-500"
                              : "bg-gray-400"
                          }`}
                        ></span>
                        <span>
                          {item.Status === "Successful"
                            ? "Successful"
                            : "Processing"}
                        </span>
                      </div>

                      <span className="text-sm text-gray-900">
                        {item.status}
                      </span>
                      <span className="text-sm text-gray-900">
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.transactionId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.refundDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">
                    {item.refundAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}