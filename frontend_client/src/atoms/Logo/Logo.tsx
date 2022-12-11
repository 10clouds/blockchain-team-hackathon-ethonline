import { HeartIcon } from "@heroicons/react/24/solid";

export const Logo = () => {
  return (
    <div className="relative text-2xl font-semibold font-logo">
      nftpadLock
      <HeartIcon className="fill-red-600 absolute rotate-6 top-[-5px] w-[13px] left-[52px]" />
    </div>
  );
};
