import React from "react";
import "./debitForm.sass";
import close from "../../img/close.svg";
import YearsCheckbox from '../yearsCheckbox/YearsCheckbox'

const DebitForm = (props) => {
  return (
    <div className="form__wrapper">
      <h2 className="form__title">Налоговый вычет</h2>
      <p className="form__descr">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </p>
      <form action="#" className="form">
        <label className="label" htmlFor="salary">
          Ваша зарплата в месяц
        </label>
        <input
          className="salary"
          id="salary"
          type="number"
          placeholder="Введите данные"
          required
          onChange={(e) => {
            props.salaryHandler(e)
          }}
        />
        <span className="errorMessage">{props.errorMessage}</span>

        <button className="payment"
        onClick={(e) => {props.calculatePayments(e)}}>Рассчитать</button>

        { props.inputArr.length > 0 ?  <YearsCheckbox inputArr = {props.inputArr} /> : null}
        
        <div className="radioWrapper">
          <div className="label">Что уменьшаем?</div>
          <input
            className="radio"
            type="radio"
            name="options"
            value="payment"
            id="payment"
            defaultChecked
          />
          <label className="radioLabel radioLabel--payment" htmlFor="payment">
            Платёж
          </label>
          <input
            className="radio"
            type="radio"
            name="options"
            value="term"
            id="term"
          />
          <label className="radioLabel radioLabel--term" htmlFor="term">
            Срок
          </label>
        </div>

        <button className="close" onClick={props.closeForm}>
          <img src={close} alt="close"></img>
        </button>
        <button className="add" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default DebitForm;
