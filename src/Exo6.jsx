import React, { useState, useEffect, useRef } from "react";

export default function Exo6() {
  // const [Resete, setResete] = useState('')

  let GOtoOparete = () => {
    let resultat = document.getElementById("resultat");
    let Nbr1 = document.getElementById("nbr1");
    let Nbr2 = document.getElementById("nbr2");
    if (document.getElementById("addition").selected) {
      resultat.innerHTML = parseFloat(Nbr1.value) + parseFloat(Nbr2.value);
    } else if (document.getElementById("soustraction").selected) {
      resultat.innerHTML = parseFloat(Nbr1.value) - parseFloat(Nbr2.value);
    } else if (document.getElementById("multi").selected) {
      resultat.innerHTML = parseFloat(Nbr1.value) * parseFloat(Nbr2.value);
    } else {
      resultat.innerHTML = parseFloat(Nbr1.value) / parseFloat(Nbr2.value);
    }
  };

  // let Reset = () =>{
  //     let resultat = document.getElementById('resultat');
  //     let Nbr1 = document.getElementById('nbr1');
  //     let Nbr2 = document.getElementById('nbr2');
  //     setResete(Nbr1 = '')
  //     setResete(Nbr2 = '')
  //     setResete(resultat = '')

  //         }

  // let Affiche = ()=>{
  //     let Nbr = document.getElementById('btnCalculette').value;
  //     let afficheur =document.getElementById('Afficheur');
  //     afficheur.innerHTML = Nbr

  // }
  // const [Count, setCount] = useState(0)
  // cont add = ()=>{
  //     setCount
  // }
  // const reset = ()=>{
  //     setCount(0)
  // }

  //     return (

  //                  <h3> Niveau 2</h3>
  //                  <div className="Calculette">
  //                      <h3> Calculette 1.1</h3>
  //                      <div>
  //                     <input type="number" className='Afficheur'/>
  //                      </div>
  //                      <div>
  //                     <button id='btnCalculette' value= '7' onClick={()=>Affiche()}>7</button>
  //                     <button id='btnCalculette'>8</button>
  //                     <button id='btnCalculette'>9</button>
  //                     <button id='btnCalculette' id='operation'>+</button>
  //                      </div>
  //                      <div>
  //                     <button className='btnCalculette'>4</button>
  //                     <button className='btnCalculette'>5</button>
  //                     <button className='btnCalculette'>6</button>
  //                     <button className='btnCalculette' id='operation'> - </button>
  //                      </div>
  //                      <div>
  //                     <button className='btnCalculette'>1</button>
  //                     <button className='btnCalculette'>2</button>
  //                     <button className='btnCalculette'>3</button>
  //                     <button className='btnCalculette' id='operation'>x</button>
  //                      </div>
  //                      <div>
  //                     <button className='btnCalculette' id='operation'>/</button>
  //                     <button className='btnCalculette'>C</button>
  //                     <button className='btnCalculette'> . </button>
  //                     <button className='btnCalculette'id='btnEquals'>=</button>
  //                      </div>

  //                  </div>
  //              </div>

  //         </div>
  //     )
  // }
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      <div className="container">
        <h1> Exo 6 </h1>
        <h3> Niveau 1</h3>

        <div id="calculetteNiveau1" className="container d-flex">
          <input type="number" name="" id="nbr1" />
          <select name="" id="selecte">
            <option id="addition" value="1">
              {" "}
              +{" "}
            </option>
            <option id="soustraction" value="2">
              -
            </option>
            <option id="multi" value="3">
              *
            </option>
            <option id="div" value="4">
              /
            </option>
          </select>

          <input type="number" name="" id="nbr2"></input>
          <button id="equals" onClick={() => GOtoOparete()}>
            =
          </button>
          <button id="resultat" disabled="disabled"></button>
          {/* <button onChange={()=>Reset()}> Reset</button> */}
        </div>
      </div>

      {/* CALCULETTE é */}
    <div className='container'>
        <h3> Niveau 2</h3>
      <div className="calc-app">
        <input type="text" value={result} ref={inputRef} />

        <div className="keypad container">
          <button id="clear" onClick={clear}>
            Clear
          </button>
          <button id="backspace" onClick={backspace}>
            C
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
   
    </div>
 </>
  );
}
