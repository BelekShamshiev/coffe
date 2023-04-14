import React from "react";
import s from "./Diskovery.module.css"
import Coffe from "../Coffe/Coffe";
import { Button, Space } from "antd";
import { menu } from "../../constants/menu";
const Diskovery = () => {
    
  return (
    <div className={s.diskovery}>
      <div className={s.menu}>
      {menu.map(item => (
            <Coffe {...item}/>
        ))}
      </div>
    </div>
  );
};

export default Diskovery;
