import React from "react";
import StateScss from "./State.module.scss";
import SongPhonk from "./SXGXVX_-_YA_tebya_narisoval.mp3";
import scuareDark from "./square.module.css";
import shrek1 from "./RqUr.gif";
import shrek2 from "./FlashyHastyIslandwhistler-size_restricted.gif";
import shrek3 from "./bcb.gif";

const HookUseRef = () => {
  const [square, setSquare] = React.useState(true);
  const [squareDisko, setSquareDisko] = React.useState("");
  const [squareDiskoCircle, setSquareDiskoCircle] = React.useState(true);
  const refSquare = React.useRef();
  const fulls = React.useRef();
  const squareHover = () => {
    setSquare((e) => !e);
  };
  const diskoGo = () => {
    setSquareDiskoCircle((e) => !e);
    const audio = new Audio(SongPhonk);
    audio.play();
    setInterval(() => {
      const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      setSquareDisko(randomColor);
    }, 300);
  };
  return (
    <div>
      <div className={`${StateScss.flex_one}`}>
        <div
          className={`${!squareDiskoCircle && StateScss.contered}`}
          ref={refSquare}
          onMouseEnter={squareHover}
          onMouseLeave={squareHover}
          style={{
            backgroundColor: `${squareDisko}`,
          }}
        >
          {!squareDiskoCircle && (
            <div>
              <div className={scuareDark.shrek1_mini}>
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
                <img src={shrek1} alt="" className={scuareDark.shrek1} />
              </div>
              <img src={shrek1} alt="" className={scuareDark.shrek2} />
              <img src={shrek1} alt="" className={scuareDark.shrek2_2} />
              <img src={shrek3} alt="" className={scuareDark.shrek6} />
            </div>
          )}
          {!squareDiskoCircle && (
            <section className={scuareDark.circleBox}>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
              <div className={scuareDark.circleItem}></div>
            </section>
          )}
        </div>
        <button onClick={diskoGo} ref={fulls}>
          go disko circle
        </button>
      </div>
    </div>
  );
};

export default HookUseRef;
