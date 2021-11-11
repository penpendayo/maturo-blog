import { useSetRecoilState } from "recoil";
import { CgClose } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import Drawer from "src/components/molecules/Drawer";
import { isOpenSideMenuState } from "src/states/isOpenSideMenu";

const SideMenu: React.FC = () => {
  const setisOpenSideMenu = useSetRecoilState(isOpenSideMenuState);
  const sideMenuContent = () => (
    <>
      <h2 className="mb-2">🐣書いてる人</h2>
      <img
        src="/img/profile-tonnma.png"
        alt="プロフィール画像"
        className="mb-2 bg-gray-100 border-2 rounded-full shadow-sm pr-3"
      />
      <p>
        SEOアフィリエイトでご飯を食べていましたが、諦めて別の道に行くことにしました。
        <br />
        (<FaTwitter className="inline" />：
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
