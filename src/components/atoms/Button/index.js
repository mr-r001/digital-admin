import React from "react";

function Button({ text, onClick }) {
    return (
        <button
            className="border border-inline py-2.5 px-7 rounded-md"
            onClick={onClick}
        >
            <p className="font-sans text-sm font-medium">{text}</p>
        </button>
    );
}

export default Button;
