import React from "react";

export default function SetTimePage() {
  return (
    <div className="absolute min-w-[100vw] top-0 -left-28 min-h-[100vh] backdrop-blur-lg bg-primary/10">
      <div className="m-auto bg-primary w-[50%] my-24 p-12 text-light border border-light/50 rounded-lg">
        <div className="w-[70%] m-auto">
            <input type="time" name="" id="" className="w-[70%] bg-primary/0 p-5 border border-light/50 rounded-lg font-semibold text-xl"/>
        </div>
      </div>
    </div>
  );
}
