import React from "react";
import s from "./Coffe.module.css";
const Coffe = ({img , coffeName , price , title}) => {
  return (
    <div className={s.container_coffe}>
      <div className={s.cofe}>
        <div className={s.img_diskovery}>
            <img src={img} alt="img" />
        </div>
        <div>
            <div className={s.cofe_two}>
                <h3>{coffeName}</h3>
                <p>$ {price}</p>
            </div>
            <div className={s.line}>
                ---------------------------------------------------------
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Coffe;
