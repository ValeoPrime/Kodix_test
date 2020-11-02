import React, { useState } from "react";
import "./App.sass";
import Button from "./components/button/Button";
import DebitForm from "./components/debitForm/DebitForm";

function App() {
  const [buttonPress, setButtonPress] = useState(false);
  const [salary, setSalary] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputArr, seInputArr] = useState([]);
  const [appStyles, setAppStyles] = useState(["App", "gradient"]);

  function buttonHandler() {
    setButtonPress(!buttonPress);
    setAppStyles(["App", "neutral"]);
  }

  function closeForm() {
    setButtonPress(!buttonPress);
    setAppStyles(["App", "gradient"]);
  }

  function salaryHandler(e) {  
    setErrorMessage('')
    setSalary(+e.target.value);
  }

  function calculatePayments(e) {
    e.preventDefault()
    if(salary <= 0) {
      setErrorMessage('Поле обязательно для заполнения')
      seInputArr([])
      return
    }

    const deductionYear = salary * 12 * 0.13;
    const years = Math.ceil(260000 / deductionYear)
    const finallArr = [];
    let maxSum = 260000
    
    for (let i = years; i > 0; i--) {
      maxSum = maxSum - deductionYear
      maxSum > 0 ? finallArr.push(Math.floor(deductionYear * 100) / 100) : finallArr.push(Math.floor((maxSum + deductionYear) * 100) / 100)
    }
    seInputArr(finallArr)
  }

  return (
    <div className={appStyles.join(" ")}>
      {buttonPress ? (
        <DebitForm
          closeForm={closeForm}
          salaryHandler={salaryHandler}
          calculatePayments={calculatePayments}
          inputArr={inputArr}
          errorMessage={errorMessage}
        />
      ) : (
        <Button click={buttonHandler}>Налоговый вычет</Button>
      )}
    </div>
  );
}

export default App;
