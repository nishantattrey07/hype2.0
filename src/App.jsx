import { RevenueCard } from "./components/RevenueCard";
import "./App.css";
import { Payout } from "./components/Payout";
import { AppBar } from "./components/AppBar";
import { OverViewBar } from "./components/OverViewBar";
import { SideBar } from "./components/SideBar";
import { FilterButtons } from "./components/FilterButtons";
import { TabelList } from "./components/TabelList";

function App() {
  return (
    <div className="flex bg-[#fbfafb]">
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className="flex-1">
        <div>
          <AppBar title={"Payouts"} />
        </div>

        <div>
          <OverViewBar title={"Overview"} />
        </div>

        <div>
          <div className="flex gap-5 flex-wrap sm:p-8 p-4">
            <div className="flex-grow rounded ">
              <Payout
                title={"Next Payout"}
                amount={"2,312.23"}
                orders={"23"}
                paymentTiming={"Today,4:00PM"}
              />
            </div>

            <div className="flex-grow rounded ">
              <RevenueCard
                title={"Amount Pending"}
                revenue={"92,312.20"}
                orderCount={"13"}
              />
            </div>

            <div className="flex-grow rounded">
              <RevenueCard
                title={"Amount Processed"}
                revenue={"23,92,312.19"}
              />
            </div>
          </div>
        </div>

        <div className="mx-8">
          <FilterButtons />
        </div>
        <div className="my-7 p-7">
          <TabelList />
        </div>
      </div>
    </div>
  );
}

export default App;
