import React from "react";
import Image from "next/image";
import eshterak from "./assent/imag/Wallet.svg"
 
export default function Home(){
  return(
    <>
    <div className="flex flex-row ">
      <Image className="w-[18px] h-[16px]" src={eshterak} alt=""/>
      <button>اقساط اشتراک</button>
    </div>
    <div>
      <button>اقساط وام</button>
    </div>
    </>
  );
}