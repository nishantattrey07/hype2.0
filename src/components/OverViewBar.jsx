/* eslint-disable react/prop-types */
export function OverViewBar({ title }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 sm:py-5">
      <h5 className="text-lg sm:text-xl font-medium mb-2 sm:mb-0">{title}</h5>
      <button className="flex items-center gap-2 px-3 py-1.5 border border-[#D9D9D9] rounded bg-white text-[#4D4D4D] text-sm sm:text-base">
        <span className="hidden sm:inline">This Month</span>
        <span className="sm:hidden">Month</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </button>
    </div>
  );
}