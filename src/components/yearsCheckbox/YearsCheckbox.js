import React from "react";
import CheckBox from "./checkBox/CheckBox";
import "./yearsCheckbox.sass";


const YearsCheckbox = (props ) => {
  return (
    <div className="termPayments">
      <p className="labelI">Итого можете внести в качестве досрочных:</p>
      {props.inputArr.map((sum, i) => {
       return <CheckBox sum={sum} index = {i} key={i + "ой"} checked={i === props.inputArr.length - 1 ? false : true}/>
      })}
    </div>
  );
};

export default YearsCheckbox;
