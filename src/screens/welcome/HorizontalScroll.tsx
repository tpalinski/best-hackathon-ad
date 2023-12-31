export const HorizontalScroll= () => {
  return (
    <div className="h-container relative">
      <div className="h-screen w-full bg-primary absolute h-panel-1 flex items-center justify-center">
        <h1 className="text-6xl font-cyberpunk"> We have good ideas </h1>
      </div>
      <div className="h-screen w-full bg-primary-content absolute grid items-center justify-center h-panel-2">
        <div className="relative lightbulb">
          <div className="absolute -inset-1 bg-orange-300 rounded-full blur-xl"/>
          <img src='./zarowka.png' alt="lighbulb" 
          className=" relative h-full"/>
        </div>
      </div>
      <div className="h-screen w-full bg-accent absolute h-panel-3 grid items-center justify-center"> 
        <h1 className="text-6xl font-cyberpunk"> And other teams don't </h1>
      </div>
      <div className="h-screen w-full bg-cover overflow-hidden absolute h-panel-4"
      style={{backgroundImage: 'url("./city.jpg")'}}> </div>
    </div>
  )
}
