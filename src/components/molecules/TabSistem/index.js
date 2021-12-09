import React from "react";
import { Tab } from "@headlessui/react";
import { Button, Gap, TextInput } from "../..";

function TabSistem() {
    return (
        <Tab.Panel className="bg-white mt-8 rounded-lg border border-outline p-6 pb-28">
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        IP Email Server
                    </h3>
                </div>
                <div className="col-span-2">
                    <TextInput
                        label="IP Mail Server"
                        placeholder="IP Mail Server"
                    />
                    <Gap height={24} />
                    <Button text="Simpan Perubahan" />
                </div>
            </div>
            <Gap height={24} />
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        SMTP Server
                    </h3>
                </div>
                <div className="col-span-2">
                    <TextInput label="SMTP Server" placeholder="SMTP Server" />
                    <Gap height={24} />
                    <Button text="Simpan Perubahan" />
                </div>
            </div>
            <Gap height={24} />
            <h3 className="font-sans font-medium text-lg text-primary leading-5">
                Parameter
            </h3>
        </Tab.Panel>
    );
}

export default TabSistem;
