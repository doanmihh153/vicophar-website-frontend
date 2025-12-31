"use client";

import { useEffect } from "react";

export default function ConsoleBranding() {
    useEffect(() => {
        console.log(
            "%c DoanQuangMinh %c Designed & Built with ❤️ %c Github: doanmihh153",
            "color:white; background:#0db061; padding:5px 12px; font-weight:700; font-family:monospace;font-weight:200",
            "color:white; background:#be1e2d; padding:5px 12px; font-family:monospace; font-weight:200;",
            "color:white; background:#02509e; padding:5px 12px; font-family:serif; font-weight:700; font-style:italic"
        );
    }, []);

    return null;
}
