"use client";

import dynamic from "next/dynamic";

const ShootingStars = dynamic(() => import("./shooting-stars"), {
    ssr: false,
});

export default ShootingStars;
