"use client"
import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import { Menu } from "./tools/RenderMenu";

export const dynamic = 'force-dinamic'

export default function Home() {

  const [component, setComponent] = useState("HOME");


  const handleMenuClick = (option) => {
    setComponent(option)
  }

  return (
    <div className="bg-mainBackground h-screen flex flex-col">
      <NavBar handleMenuClick={handleMenuClick}></NavBar>
      {Menu.Render(component)}
    </div>
  );
}
