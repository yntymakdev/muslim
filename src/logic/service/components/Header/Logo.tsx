import Image from "next/image";
import React from "react";
import img_logo from "../Снимок_экрана_2025-05-03_213944-removebg-preview.png";
const Logo = () => {
  return (
    <div>
      <Image src={img_logo} width={55} height={55} alt="image error" />
    </div>
  );
};

export default Logo;
