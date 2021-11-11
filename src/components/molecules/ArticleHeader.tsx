import { AiOutlineMenu } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import Link from "next/link";

import { isOpenSideMenuState } from "src/states/isOpenSideMenu";
import { config } from "src/config";

const Header: React.FC = () => {
  const setIsOpenSideMenu = useSetRecoilState(isOpenSideMenuState);
  return (
    <header className="relative mb-10 text-left">
      <Link href="/">
        <a>
          <h1 className="my-3 font-bold lg:text-4xl">
            {config.siteTitle}
          </h1>
        </a>
      </Link>
      <p className="my-3 text-sm">{config.siteDescription}</p>
      <button
        type="button"
        className="absolute inset-y-0 right-0 my-auto px-1 hover:text-gray-100 text-gray-400 hover:bg-gray-300 rounded-md sm:px-6 lg:hidden"
        aria-expanded="false"
        onClick={() => setIsOpenSideMenu((prev) => !prev)}
      >
        <span className="sr-only">Open menu</span>
        <AiOutlineMenu className="text-3xl sm:text-4xl" />
      </button>
    </header>
  );
};

export default Header;
