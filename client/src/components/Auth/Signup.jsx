import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

// react-icons
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/auth/auth.action";
import { getSelf } from "../../redux/reducers/user/user.action";

const Signup = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(signUp(userData));
    await dispatch(getSelf());
    closeModal();
    setUserData({ fullName: "", email: "", password: "" });
  };
  const googleSignUp = () => {
    window.location.href = `${process.env.REACT_APP_CLIENT_URL}auth/google`;
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2 w-full flex flex-col gap-3">
                    <button
                      className=" w-full py-2 px-3 justify-center rounded-lg flex items-center gap-2 border border-gray-400 bg-white text-gray-700 hover:bg-gray-300 "
                      onClick={googleSignUp}
                    >
                      Sign Up With Google <FcGoogle />
                    </button>
                    <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          value={userData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          value={userData.email}
                          onChange={handleChange}
                          placeholder="user@email.com"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label htmlFor="password">Password</label>
                        <input
                          type="text"
                          id="password"
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="*******"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <button
                        className="w-full text-center bg-zomato-400 text-white p-2 rounded-lg mt-2 cursor-pointer  "
                        onClick={submit}
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signup;
