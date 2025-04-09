"use client";
import dynamic from "next/dynamic";

// Dynamically import StarsBackground client-only
const StarsBackground = dynamic(() => import("./stars-background"), {
    ssr: false,
});

export default StarsBackground;