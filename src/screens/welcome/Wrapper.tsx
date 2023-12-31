import { FC } from "react";

export const Wrapper: FC = () => {
  return (
      <div id='page-content' className='relative flex flex-col items-center justify-center h-screen w-full'>
        <div id="city-background" className="absolute bg-cover bg-center w-full h-screen grayscale opacity-0" style={{backgroundImage: 'url("./public/bg-city.jpg")'}}>
        </div>
        <div id="wrapper-text" className="grid gap-60 items-center justify-between relative opacity-0 h-[80%] font-cyberpunk">
           <h2 className="col-start-1 row-start-1 text-5xl min-w-16"> </h2>
           <h1 className="col-start-3 row-start-1 text-6xl min-w-16"> </h1>
           <h3 className="col-start-3 row-start-3 text-7xl min-w-16"> </h3>
        </div> 
      </div>
  )
}
