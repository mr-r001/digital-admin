import { Tab } from "@headlessui/react";
import React from "react";
import { Button, Gap, Badge } from "../..";

function TabRole() {
    let superadmin = [
        "Sistem",
        "Keamanan",
        "Role",
        "Verifikasi Pengguna",
        "Master-User",
        "Master-Pengguna",
        "Master-Perusahaan",
        "Master-Kode Lookup",
        "Pesan Kesalahan",
    ];
    let individual = ["Dashboard", "Daftar Dokumen", "Kontak", "Konfigurasi"];
    let admin = [
        "Dashboard",
        "Daftar Dokumen",
        "Struktur Perusahaan",
        "Kontak",
        "Konfigurasi",
    ];
    let pengguna = [
        "Dashboard",
        "Daftar Dokumen",
        "Struktur Perusahaan",
        "Kontak",
        "Konfigurasi",
    ];
    return (
        <Tab.Panel className="bg-white mt-8 rounded-lg border border-outline p-6 pb-28">
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        Superadmin
                    </h3>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-wrap">
                        {superadmin.map((text) => {
                            return <Badge text={text} />;
                        })}
                    </div>
                    <Gap height={16} />
                    <Button text="Atur Menu" />
                </div>
            </div>
            <Gap height={24} />
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        Pengguna Individual
                    </h3>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-wrap">
                        {individual.map((text) => {
                            return <Badge text={text} />;
                        })}
                    </div>
                    <Gap height={16} />
                    <Button text="Atur Menu" />
                </div>
            </div>
            <Gap height={24} />
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        Admin Perusahaan
                    </h3>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-wrap">
                        {admin.map((text) => {
                            return <Badge text={text} />;
                        })}
                    </div>
                    <Gap height={16} />
                    <Button text="Atur Menu" />
                </div>
            </div>
            <Gap height={24} />
            <div className="grid grid-cols-3 pb-6 border-b border-outline">
                <div>
                    <h3 className="font-sans text-lg font-medium leading-7 text-primary">
                        Pengguna Perusahaan
                    </h3>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-wrap">
                        {pengguna.map((text) => {
                            return <Badge text={text} />;
                        })}
                    </div>
                    <Gap height={16} />
                    <Button text="Atur Menu" />
                </div>
            </div>
        </Tab.Panel>
    );
}

export default TabRole;
