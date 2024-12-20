import RJSLogo from "./rjs-logo";

export default function HeaderLogo() {
  return (
    <div className="flex justify-center items-center">
      <RJSLogo className="" w={35} h={35} />
      <p className="font-bold ml-2 text-xl text-primary tracking-widest pointer-events-none">
        RICHIE.js
      </p>
    </div>
  );
}
