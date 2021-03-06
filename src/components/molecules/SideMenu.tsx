import { useSetRecoilState } from "recoil";
import { CgClose } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import Drawer from "src/components/molecules/Drawer";
import { isOpenSideMenuState } from "src/states/isOpenSideMenu";

const SideMenu: React.FC = () => {
  const setisOpenSideMenu = useSetRecoilState(isOpenSideMenuState);
  const sideMenuContent = () => (
    <>
      <h2 className="mb-2">ð£æ¸ãã¦ãäºº</h2>
      <img
        src="/img/profile-tonnma.png"
        alt="ãã­ãã£ã¼ã«ç»å"
        className="mb-2 bg-gray-100 border-2 rounded-full shadow-sm pr-3"
      />
      <p>
        SEOã¢ãã£ãªã¨ã¤ãã§ãé£¯ãé£ã¹ã¦ãã¾ããããè«¦ãã¦å¥ã®éã«è¡ããã¨ã«ãã¾ããã
        <br />
        (<FaTwitter className="inline" />ï¼
        <a href="https://twitter.com/tonnmaa" className="underline">
          @tonnmaa
        </a>
        )
      </p>
    </>
  );
  return (
    <>
      {sideMenuContent()}
      <>
        <Drawer>
          <div className="fixed right-0 p-4 w-full max-w-md min-h-screen text-left bg-white shadow-xl overflow-hidden transform-gpu">
            <CgClose
              onClick={() => setisOpenSideMenu(false)}
              className="ml-auto p-4 text-gray-900 text-4xl hover:bg-gray-200 focus:outline-none box-content focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            />
            {sideMenuContent()}
          </div>
        </Drawer>
      </>
    </>
  );
};

export default SideMenu;
