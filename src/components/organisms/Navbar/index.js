import React from "react";
import { IcBell, Logo, User } from "../../../assets";

function Navbar() {
    return (
        <div className="flex flex-row flex-wrap w-full items-center bg-white p-4 border-b border-gray-200 fixed">
            <div className="flex-none w-56 flex flex-row items-center">
                <img src={Logo} className="w-20 flex-none" alt="logo" />
            </div>

            <div
                id="navbar"
                className="animate flex-1 flex flex-row items-center"
            >
                <div className="flex flex-row w-full justify-end items-center">
                    <div className="dropdown">
                        <button className="menu-btn mr-2">
                            <img src={IcBell} alt="" />
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className="flex">
                            <div className="w-8 h-8 overflow-hidden rounded-full">
                                <img
                                    className="w-full h-full object-cover"
                                    src={User}
                                    alt="user"
                                />
                            </div>
                            <div className="flex flex-col text-left ml-2 mr-8">
                                <h1 className="font-sans font-medium text-sm text-primary">
                                    Agus Sunanto
                                </h1>
                                <h5 className="font-sans font-normal text-xs text-secondary">
                                    agus.susanto@example.com
                                </h5>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
