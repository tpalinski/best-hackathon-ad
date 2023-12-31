import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="h-screen w-full fixed grid gap-8 items-center justify-center" id="top-container">
      <div className="relative">
        <div id="neon" className="from-violet-400 to-pink-300 bg-gradient-to-r absolute -inset-4 opacity-75 px-10
          blur rounded-3xl"/>
        <div className="text-center flex flex-col p-4 justify-evenly relative rounded-3xl">
          <h1 className=" text-7xl font-bold text-base-100"> City might be wise, but.. </h1>
        </div>
      </div>
    </div>
  )
}
