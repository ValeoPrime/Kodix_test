import React from "react";
import CheckBox from "./checkBox/CheckBox";
import "./yearsCheckbox.sass";


const YearsCheckbox = (props ) => {
  return (
    <div className="termPayments">
      <p className="labelI">Итого можете внести в качестве досрочных:</p>
      {props.inputArr.map((sum, i) => {
       return <CheckBox sum={sum} index = {i} key={i + "ой"}/>
      })}
    </div>
  );
};

export default YearsCheckbox;
