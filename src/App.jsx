import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css'


const App = () => {
  const [input, setInput] = useState('');
  const [prevResult, setPrevResult] = useState('');

  const handleClick = (value) => {
    try {
      switch (value) {
        case 'π':
          setInput(`${input}pi`);
          break;

        case 'C':
          setInput(input.slice(0, -1));
          break;

        case 'AC':
          setInput('');
          break;
        
        case 'sin(x deg)':
          setInput(`${input}sin(`);
          break;
        
        case 'cos(x deg)':
          setInput(`${input}cos(`);
          break;
        
        case 'tan(x deg)':
          setInput(`${input}tan(`);
          break;

        case 'x!':
          setInput(`${input}!`);
          break;

        case 'ln(x)':
          setInput(`${input}ln(`);
          break;

        case 'log(x, n)':
          setInput(`${input}log(`);
          break;

        case 'ⁿ√':
          setInput(`${input}nthRoot(`);
          break;

        case 'deg':
          setInput(`${input}deg)`);
          break;

        case '=':
          const result = evaluate(input);
          setInput(result);
          setPrevResult(result);
          break;
  
        case 'm(x, y)':
          setInput(`${input}mod(`);
          break;
        
        case 'r(x, n)':
          setInput(`round(${input},`);
          break;

        case 'ANS':
          setInput(`${input}${prevResult}`);
          break;

        default:
          setInput(`${input}${value}`);
      }
    } catch (error) {
      setInput('Error');
    }
  };

  const buttons = [
    'sin(x deg)', 'cos(x deg)', '(', ')', 'C', 'AC',
    'tan(x deg)', 'deg',  '7', '8', '9', '/',
    'π', 'x!', '4', '5', '6', '*',
    'ln(x)', 'log(x, n)', '1', '2', '3', '-',
    'ⁿ√', '^', '0', '.', '=', '+',
    'm(x, y)', 'e', '%', ',', 'ANS', 'r(x, n)'

  ];

  const handleKeyPress = (e) => {
    const key = e.key;

    switch (key) {
      case '=':
      case 'Enter':
        const result = evaluate(input);
        setInput(result);
        setPrevResult(result);
        break;

      case 'Backspace':
        setInput(input.slice(0, -1));
        break;

      case 'Escape':
        setInput("");
        break;

      case 's':
      case 'S':
        setInput(`${input}sin(`);
        break;

      case 'c':
      case 'C':
        setInput(`${input}cos(`);
        break;

      case 't':
      case 'T':
        setInput(`${input}tan(`);
        break;

      case '!':
        setInput(`${input}!`);
        break;

      case 'n':
      case 'N':
        setInput(`${input}nthRoot(`);
        break;

      case 'm':
      case 'M':
        setInput(`${input}mod(`);
        break;

      case 'r':
      case 'R':
        setInput(`${input}round(`);
        break;

      case 'd':
      case 'D':
        setInput(`${input}deg)`);
        break;

      case 'e':
      case 'E':
        setInput(`${input}e`);
        break;

      case 'p':
      case 'P':
        setInput(`${input}pi`);
        break;

      default:
        if (buttons.includes(key)) {
          setInput(`${input}${key}`);
        } 
        break;
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  return (
    <div className="calculator">
      <div className="display">
        <p className='prevResult'>{prevResult}</p>
        <hr/>
        <p className='input'>{input}</p>
        </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleClick(button)}>
            {button}
            </button>
        ))}
      </div>
    </div>
  );
};

export default App;