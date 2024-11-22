import { RiFileCopyLine } from "react-icons/ri";

export default function NPMInstall({ className }: { className: string }) {
  return (
    <div className={className}>
      <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
        <RiFileCopyLine />
      </button>
      <input
        type="text"
        placeholder="npm i @cresteem/richie-js"
        className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>
  );
}
