import {
  Home,
  FileText,
  Grid,
  Truck,
  Volume2,
  BarChart2,
  CreditCard,
  Percent,
  Users,
  Palette,
  PlusSquare,
} from "lucide-react";

export function SideBar() {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: FileText, label: "Orders" },
    { icon: Grid, label: "Products" },
    { icon: Truck, label: "Delivery" },
    { icon: Volume2, label: "Marketing" },
    { icon: BarChart2, label: "Analytics" },
    { icon: CreditCard, label: "Payouts" },
    { icon: Percent, label: "Discounts" },
    { icon: Users, label: "Audience" },
    { icon: Palette, label: "Appearance" },
    { icon: PlusSquare, label: "Plugins" },
  ];

  return (
    <div className="w-[225px] bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center">
          <img
            src="/"
            alt="Nishant"
            className="w-10 h-10 rounded"
          />
          <div className="ml-3">
            <h2 className="font-semibold">Nishant</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Visit Store
            </a>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="py-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 hover:bg-gray-800 ${
                item.label === "Payouts" ? "bg-gray-800" : ""
              }`}
            >
              <a href="#" className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 bg-gray-800 mt-auto">
        <div className="flex items-center">
          <div className="bg-gray-700 p-2 rounded">
            <CreditCard className="w-5 h-5" />
          </div>
          <div className="ml-3">
            <p className="text-sm">Available credits</p>
            <p className="font-semibold">224.10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
