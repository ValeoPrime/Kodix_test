import React from "react";

const CheckBox = (props) => {
  const suffixArr = ["ый", "ой", "ий", "ый", "ый", "ой","ой", "ой","ый","ый" ]
  const suffix = `в ${props.index + 1}-${suffixArr[props.index]} год`;
  return (
    <div className="sumLabel">
      <input className="sumInput" type="checkbox" id={props.index + 'ай'} />
      <label htmlFor={props.index + 'ай'}>
        {props.sum} рублей <span className="greySpan">{suffix}</span>
      </label>
    </div>
  );
};

export default CheckBox;
