import React from "react";

function Button({ text }) {
    return (
        <button className="border border-inline py-2.5 px-7 rounded-md">
            <p className="font-sans text-sm font-medium">{text}</p>
        </button>
    );
}

export default Button;
