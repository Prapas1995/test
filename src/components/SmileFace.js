import React, { useState } from "react";

export default function SmileFace() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(0)

  const addSubmit = (e) => {
    e.preventDefault();
    const result = countSmileys(inputText.split(','))
    setResult(result)
  };

  const countSmileys = arr => {
    const matches = arr.join('').match(/[:;][-~]?[D)]/g);
    return matches ? matches.length : 0;
  };

  return (
    <div>
      <p>4. Count the smiley faces!</p>
      <form>
        <input
          style={{width: "190px"}}
          type="text"
          placeholder="input text smile as :), ;(, ;}, :-D"
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
            setResult([])
          }}
        >
          Clear
        </button>
      </form>
        <p>#result: {result}</p>
    </div>
  );
}
