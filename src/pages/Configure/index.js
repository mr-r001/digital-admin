import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Badge, TabRole, TabSistem, TabVerifikasi } from "../../components";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Tabs = (data, idx) => {
    switch (data) {
        case "Sistem":
            return <TabSistem key={idx} />;
        case "Role":
            return <TabRole key={idx} />;
        case "Verifikasi Pengguna":
            return <TabVerifikasi key={idx} />;
        default:
            return <TabSistem key={idx} />;
    }
};

export default function Configure() {
    const [categories] = useState(["Sistem", "Role", "Verifikasi Pengguna"]);
    const [notif] = useState(5);

    return (
        <div className="w-full h-full bg-background">
            <h1 className="font-sans font-medium text-3xl text-primary pb-6">
                Konfigurasi
            </h1>
            <Tab.Group>
                <Tab.List className="flex p-1 bg-background border-b border-outline pb-6">
                    {categories.map((category) => {
                        return (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        "py-2 px-6 text-base leading-6 font-medium text-primary rounded-md",
                                        selected
                                            ? "bg-outline"
                                            : "text-secondary"
                                    )
                                }
                            >
                                {category}
                                {category !== "Verifikasi Pengguna" ? null : (
                                    <Badge text={notif} type="notif" />
                                )}
                            </Tab>
                        );
                    })}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {categories.map((data, idx) => Tabs(data, idx))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
