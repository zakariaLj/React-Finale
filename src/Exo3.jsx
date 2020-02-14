// import React from 'react'

// export default function Exo3(){
//     let buttonGo = () => {
    
//         if (TextNom.value != " ") {
    
//             NomAjouter.innerHTML = TextNom.value;
//             TextNom.value = " ";
    
//         } else {
//             alert("entrer un nom");
    
//         }
    
    
    
//     }
//     return (
//         <div className= "container">
                
     
//             <h2> Welcome inconnu </h2>
//             <p>Ecrivez dans l'input ci-dessous le nom de la personne que vous desirez acceuillir . Lorsque vous cliquez sur le bouton " go",le nom que vous avez ajouter dans l'input sera alorsdans le span du h2 </p>
//             <p> l'input sera alors vider de tout contenu.Attention interdiction de toucher a l'HTML</p>

//             <input type="text" id="entrerNom"/> <button id="Btgo  go" />
    

//         </div>
//     );
// }



import React ,{useState} from 'react';

export default function Exo3() {
    const [Name, setName] = useState("Entrer un Nom")


    let Change = () => {
        let nom = document.getElementById('copie')

        if (nom.value !== ' ' ) {
            setName(nom.value);

            
        }else{
            nom.className.add('border-danger')
        }
        // let paraph = document.createElement('p')
        // paraph.innerHTML = nom.value;
        // todo.appendChild(paraph);
        nom.value = ''


    }

    // let deleteList = () => {
    //     let todo = document.getElementById("todo");
    //     todo.removeChild(todo.lastChild)
    // }


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
    