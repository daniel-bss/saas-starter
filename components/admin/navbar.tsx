import { Triangle } from "lucide-react";

export default function AdminNavbar() {
  return (
    <div className="flex justify-end">
      <div className=" mt-2 pl-1.5 pr-4 rounded-full bg-gray-400 h-10 flex justify-start items-center mr-6">
        {/* TODO: shadcn avatar */}
        <div className="bg-white rounded-full border-black border-[1px] w-7 h-7 mr-1.5"></div>
        <div className="text-sm mr-4">Admin</div>
        <Triangle className="fill-black w-3 rotate-180 hover:cursor-pointer" />
      </div>
    </div>
  );
}
