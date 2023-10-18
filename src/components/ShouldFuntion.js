import React, { useState } from "react";

export default function ShouldFuntion() {
  const [inputText, setInputText] = useState("");
  const [resultList, setResultList] = useState([])

  const addSubmit = (e) => {
    e.preventDefault();
    const result = permutation(inputText.split('')).map(function(p) {
    return p.join('');
    });
    setResultList(result)

  };

  const permutation = input => {
    let data = input.slice();
    let permutations = [];
    let n = data.length;

    if (n === 0) {
        return [
        []
        ];
    } else {
        let first = data.shift();
        let words = permutation(data);
        words.forEach(function(word) {
        for (let i = 0; i < n; ++i) {
            let tmp = word.slice();
            tmp.splice(i, 0, first)
            permutations.push(tmp);
        }
        });
    }
    return permutations;
  };

  return (
    <div>
      <p>2. Permutations</p>
      <form>
        <input
          style={{width: "190px"}}
          type="text"
          placeholder="input text"
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
