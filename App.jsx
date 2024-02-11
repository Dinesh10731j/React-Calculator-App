import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [val, setVal] = useState('');

  const handleClick = (values) => {
    setVal(val+values);
  }

  const handleClear = () => {
    setVal('')
  }

  const handleBackSpace = () => {
    setVal((preval) => preval.slice(0, -1))
  }

  const handleEqual = () => {
    try {
      setVal(eval(val).toString());
    } catch (error) {
      setVal('Error');
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="display">
            <input type="text" value={val}  readOnly/>
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear}  className="clear"/>
            <input type="button" value="C" onClick={handleBackSpace} />
            <input type="button" value="%" className="per" onClick={() => handleClick('%') } />
            <input type="button" value="/" className="div" onClick={() => handleClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleClick('7')} />
            <input type="button" value="8" onClick={() => handleClick('8')} />
            <input type="button" value="9" onClick={() => handleClick('9')} />
            <input type="button" value="*" className="mul" onClick={() => handleClick('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleClick('4')} />
            <input type="button" value="5" onClick={() => handleClick('5')} />
            <input type="button" value="6" onClick={() => handleClick('6')} />
            <input type="button" value="-"  className="sub" onClick={() => handleClick('-')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleClick('1')} />
            <input type="button" value="2" onClick={() => handleClick('2')} />
            <input type="button" value="3" onClick={() => handleClick('3')} />
            <input type="button" className="add" value="+" onClick={() => handleClick('+')} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleClick('00')} />
            <input type="button" value="0" onClick={() => handleClick('0')} />
            <input type="button" value="." onClick={() => handleClick('.')} />
            <input type="button" value="="  className="equal" onClick={handleEqual} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
