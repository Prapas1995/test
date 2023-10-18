import React, { useState } from "react";

export default function FindOddInt() {
  const [inputText, setInputText] = useState("");
  const [resultList, setResultList] = useState([])

  const addSubmit = (e) => {
    e.preventDefault();
    const result = finOdd(inputText.split(','))
    setResultList(result)

  };

  const finOdd = arr => {
    return arr.find((item) => arr.filter(el => el === item).length % 2)
  };

  return (
    <div>
      <p>3. Find the odd int</p>
      <form>
        <input
          style={{width: "190px"}}
          type="text"
          placeholder="input number as 1,2,3,4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button style={{ marginLeft: '10px' }} onClick={addSubmit}>
          Submit
        </button>
        <button style={{ marginLeft: '10px' }}type="button"
          onClick={e => {
            e.preventDefault();
            setInputText("");
            setResultList([])
          }}
        >
          Clear
        </button>
      </form>
      {resultList.length?(
        <p>#result: {JSON.stringify(resultList)}</p>
      ):""}       
    </div>
  );
}
