import Image from "next/image";

export default function Home() {
  return (
    <div class = "bg-black -500 h-screen w-full  justify-items-center">
      <h1 class = "text-orange-500">Calculadora com NextJS</h1>
      <div class = "flex flex-col space-y-4  justify-items-center">
        <input class = "text-orange-500 text-center h-10 w-22"></input>
        <input class = "text-orange-500 text-center h-10 w-22"></input>
        <input class = "text-orange-500 text-center h-10 w-22"></input>
        <button class = "text-white border border-white h-10 w-22">Somar</button>
        <button class = "text-red-600 border border-red-600 h-10 w-22">Somar</button>
        
        
      </div>
    </div>
    
  );
}
