import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    IcArrowLeft,
    IcArrowRight,
    IcDatabase,
    IcMessage,
    IcSettings,
} from "../../../assets";

function Sidebar() {
    const [isHidden, setIsHidden] = React.useState(false);
    let location = useLocation();
    return (
        <div
            id="sideBar"
            className={`flex flex-col flex-wrap bg-primary ${
                isHidden ? "overflow-hidden" : "md:w-64"
            } w-16 p-4 mt-20 duration-500 animated faster`}
        >
            <div className="flex flex-col flex-nowrap">
                <button
                    className="font-sans text-sm font-medium pb-6 text-white flex w-64 p-2.5"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? (
                        <img src={IcArrowRight} alt="ic-arrow-left" />
                    ) : (
                        <img src={IcArrowLeft} alt="ic-arrow-left" />
                    )}
                    <p
                        className={`${
                            isHidden
                                ? "pl-10 duration-500"
                                : "pl-10 md:pl-5 duration-500"
                        }`}
                    >
                        Sembunyikan Menu
                    </p>
                </button>
                <hr
                    className={`border-label pl-2.5 animated faster ${
                        isHidden
                            ? "w-10 duration-500"
                            : "w-10 md:w-60 duration-500"
                    }`}
                />
                <Link to="/configure">
                    <div
                        className={`font-sans text-sm font-medium mt-7 text-white flex p-2.5 ${
                            location.pathname === "/configure"
                                ? "bg-label rounded-md"
                                : ""
                        } ${
                            isHidden
                                ? "w-10 duration-500"
                                : "w-10 md:w-60 duration-500"
                        }`}
                    >
                        <img src={IcSettings} alt="ic-settings" />
                        <p
                            className={`${
                                isHidden
                                    ? "pl-10 duration-500"
                                    : "pl-10 md:pl-5 duration-500"
                            }`}
                        >
                            Konfigurasi
                        </p>
                    </div>
                </Link>
                <Link to="/master">
                    <div
                        className={`font-sans text-sm font-medium my-7 text-white flex p-2.5  ${
                            location.pathname === "/master"
                                ? "bg-label rounded-md"
                                : ""
                        } ${
                            isHidden
                                ? "w-10 duration-500"
                                : "w-10 md:w-60 duration-500"
                        }`}
                    >
                        <img src={IcDatabase} alt="ic-settings" />
                        <p
                            className={`${
                                isHidden
                                    ? "pl-10 duration-500"
                                    : "pl-10 md:pl-5 duration-500"
                            }`}
                        >
                            Master
                        </p>
                    </div>
                </Link>
                <Link to="/message">
                    <div
                        className={`font-sans text-sm font-medium mb-7 text-white flex p-2.5  ${
                            location.pathname === "/message"
                                ? "bg-label rounded-md"
                                : ""
                        } ${
                            isHidden
                                ? "w-10 duration-500"
                                : "w-10 md:w-60 duration-500"
                        }`}
                    >
                        <img src={IcMessage} alt="ic-settings" />
                        <p
                            className={`${
                                isHidden
                                    ? "pl-10 duration-500 whitespace-nowrap"
                                    : "pl-10 md:pl-5 duration-500 whitespace-nowrap"
                            }`}
                        >
                            Pesan Kesalahan
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
