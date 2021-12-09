import React from "react";

export default function TextInput({ label, placeholder, value, onChangeText }) {
    return (
        <div>
            <h5 className="font-sans text-sm text-label leading-5 font-medium pb-1.5">
                {label}
            </h5>
            <input
                value={value}
                placeholder={placeholder}
                className="w-full border px-3.5 py-2.5 rounded-md bg-white border-inline font-sans font-normal leading-6 text-label text-base"
                onChange={onChangeText}
            />
        </div>
    );
}
