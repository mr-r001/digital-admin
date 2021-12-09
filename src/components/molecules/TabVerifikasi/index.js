import React from "react";
import { Tab } from "@headlessui/react";

function TabVerifikasi({ key }) {
    return (
        <Tab.Panel key={key} className="bg-yellow-400">
            <p>Hi Verifikasi</p>
        </Tab.Panel>
    );
}

export default TabVerifikasi;
