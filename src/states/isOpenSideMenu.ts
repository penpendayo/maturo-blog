import { atom } from "recoil";

export const isOpenSideMenuState = atom<boolean>({
  key: "isOpenSideMenu",
  default: false,
});
