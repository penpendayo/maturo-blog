import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";

import { isOpenSideMenuState } from "src/states/isOpenSideMenu";

const Drawer: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenSideMenuState);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 min-h-screen text-right overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child as={Fragment}>
            <Dialog.Overlay className="tran fixed inset-0 bg-black opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-100"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            {children}
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
export default Drawer;
