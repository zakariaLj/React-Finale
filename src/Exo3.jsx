import React ,{useState} from 'react';

export default function Exo3() {
    const [Name, setName] = useState("Entrer un Nom")


    let Change = () => {

        let nom = document.getElementById('copie');

        if (nom !== " " ) {
            setName(nom.value);

        } else {
            setName(" rien")
            
        }
        // let paraph = document.createElement('p')
        // paraph.innerHTML = nom.value;
        // todo.appendChild(paraph);
        nom.value = '';


    }

     return (
        <>

            <div className="container ">
            <h1>Exo formulaire {Name}</h1>
                <p>Ecrire dans l'input ci-dessus le nom de la personne que vous voulez acceuillir</p>
                <p>Lorsque vous cliquez sur le bouton 'go' le nom que vous avez ajouter dans l'input sera alors mis dans le span du h2 et l'input sera alors vidé de tout contenu</p>
                <input onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        Change();
                    }
                }}
                    id="copie" type="text" placeholder='entrer un Nom' />
                <button onClick={() => Change()}> Go </button>
                
            </div>
          

        </>
    );
}
    