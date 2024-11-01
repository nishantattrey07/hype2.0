export function FilterButtons() { 
    return (
      <div className="flex  flex-col gap-3">
        <h5 className="font-medium text-xl">Transactions | This Month</h5>

        <div className="flex flex-row gap-3">
          <button className="rounded-full px-6 py-2 bg-[#e7e6e7] text-[#818180]">
            Payouts(22)
          </button>

          <button className="rounded-full bg-[#136cb5] text-[#fefeff] px-5 py-2 ">
            Refunds(6)
          </button>
        </div>
      </div>
    );
}