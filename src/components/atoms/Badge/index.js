import React from "react";

function Badge({ text, type }) {
    if (type === "notif") {
        return (
            <span className="bg-criticalSurface py-0.5 px-2 border border-criticalInline rounded-md ml-2 font-sans font-medium text-xs text-criticalLabel leading-5">
                {text}
            </span>
        );
    }
    return (
        <span className="bg-surface py-1 px-3 border border-inline rounded-md mr-2 mb-2 font-sans font-medium text-sm text-label leading-5">
            {text}
        </span>
    );
}

export default Badge;
