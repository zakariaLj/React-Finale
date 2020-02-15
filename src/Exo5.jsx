import React, {useState} from 'react';
import Logo from '../src/logo192.png';
import './App.css';

export default function Exo5() {
    const [Compteur, setCompteur] = useState(0)
    const [Reset, setReset] = useState('')
    let NewDiv = document.getElementById('ImageChildDiv');
let GoAdd = () => {
    NewDiv = document.getElementById('ImageChildDiv');
    Image = document.createElement('img');
    Image.src = Logo
    NewDiv.appendChild(Image);
    setCompteur(Compteur+1)
}

let GoSupp = () => {
    if(Compteur > 0){
        NewDiv.lastChild.remove(Image)
        setCompteur(Compteur-1)
    }else{
        setReset(0)
    }


}

let GoSuppTout = () => {
    while (NewDiv.firstChild) {
        NewDiv.removeChild(NewDiv.firstChild);
        setCompteur(0)
    }
}

    return (
        <>
        <div className='container'>
            <h2> Exo 4</h2>
            <button onClick={()=>GoAdd()}>Ajouter </button>
            <button onClick={()=>GoSupp()}>Supprimer</button>
            <button onClick={()=>GoSuppTout()}>Supprimer tout</button> <h2>{Compteur} </h2> <h3 id="stop"></h3>
        </div>
            <div id="ImageDiv" >
                <div id="ImageChildDiv"/>
    
          
           </div>
    </>
    )

}
