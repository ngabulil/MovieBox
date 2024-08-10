import { Logo } from "../../assets";

const Loading = () => {
  return (
    <div className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-center my-auto h-full gap-6">
        <Logo />
        <p className="text-3xl font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
