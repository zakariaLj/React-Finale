import React from 'react';
import style from 'react-bootstrap'

export default function Exo1() {
    
        let changeTitel= ()=>{
            let newTitel = document.getElementById('Titre')
            newTitel.classList.add('bg-danger')
            newTitel.innerText = ' Titre modifié';
    
    
        }
    return (
        <div className="container">
            <h2 id="Titre" onMouseMove ={ changeTitel}> Mon titre  </h2>
            <p>Liste des propriété et méthodes a retrouver dans la documentation:</p>
            <ul>
                <li>InnerText</li>
                <li>InnerHTML</li>
                <li>querySelector()</li>
                <li>querySelectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <p>Changer le contenu de h2 par" titre modifié"</p>
            <p>Changer la couleur du h2</p>
            <p>Ajouter une class background bootstrap au h2</p>
        </div>
    )
}
