import { React, useState } from "react";
import { Result } from "./Result";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Search = () => {
  const [img, setimg] = useState("");

  const [sizedata, setsizedata] = useState({
    imgwidth: "",
    imgheight: "",
  });

  const inputeve = (e) => {
    setimg(e.target.value);
  };

  const sizeimg = (eve) => {
    const { name, value } = eve.target;
    setsizedata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="main-div text-center">
        <div className="searchbar ">
          <h1> 📷 Random Photo Generator</h1>
          <div className="inputfield">
            <input
              type="search"
              value={img}
              onChange={inputeve}
              placeholder="Search Image here..."
            />



            {/* _________        width and height          __________  */}
            <div className="imgsize">
              <input
                type="number"
                placeholder="Width"
                name="imgwidth"
                value={sizedata.imgwidth}
                onChange={sizeimg}
              />
              <input
                type="number"
                placeholder="height"
                name="imgheight"
                value={sizedata.imgheight}
                onChange={sizeimg}
              />
            </div>
          </div>
        </div>

        {img === "" ? null : (
          <Result
            width={sizedata.imgwidth}
            height={sizedata.imgheight}
            name={img}
          />
        )}
      </div>
    </>
  );
};
