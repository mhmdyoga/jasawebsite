"use client";
import React from "react";

export default function VideoPlayer() {
  return (
    <div className="w-full flex justify-center">
      <video
        width="570"
        controls
        autoPlay={true}
        loop
        muted
        playsInline
        className="rounded-t-[40px] rounded-b-[40px] shadow-lg"
      >
        <source src="/video-sneakersco.webm" type="video/webm" />
        Browser kamu tidak mendukung format video ini.
      </video>
    </div>
  );
}
