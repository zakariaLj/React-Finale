import React from 'react'

export default function Exo7() {
    let inputTache = document.getElementById('inputTache');
    let list = document.getElementById('list');
    let all = document.getElementById('all');
    let done = document.getElementById('done');
    let toDo = document.getElementById('toDo');
    let tabList = [];
    let tabTache = [];


let addList = () => {
    //Créer les éléments et styliser
    let check = document.createElement('input');
    check.type = 'checkbox';

    // tabCheck.push(check);
    let tache = document.createElement('h4');
    tache.innerHTML = `&nbsp ${inputTache.value} &nbsp`;
    tabTache.push(tache);
    let supp = document.createElement('button');
    supp.innerHTML = ' x ';

    // tabSupp.push(supp);
    let ligne = document.createElement('div');
    tabList.push(ligne);
    ligne.classList.add('d-flex');
    ligne.classList.add('flex-wrap');
    ligne.classList.add('align-items-center');
    ligne.classList.add('toDo');

    //Afficher les éléments
    list.appendChild(ligne);
    ligne.appendChild(check);
    ligne.appendChild(tache);
    ligne.appendChild(supp);
    inputTache.value = "";
    
    //Supprimer éléments
    let remove = () => {
        supp.parentNode.remove();
    }
    // supp.addEventListener('click', remove);
    // check.addEventListener('change', () => {
    //     if (check.checked) {
    //         ligne.classList.remove('toDo');
    //         ligne.classList.add('done');
    //         ligne.classList.add('bg-pink');
    //     } else if (check.checked == false) {
    //         ligne.classList.add('toDo');
    //         ligne.classList.remove('done');
    //         ligne.classList.remove('bg-pink');
    //     }
    // })
    //Modifier les tâches
    let edit = document.createElement('button');
    let ok = document.createElement('button');
    ok.innerHTML='ok';
    edit.innerHTML = 'Modifier';
    edit.classList.add('mx-3');
    ligne.appendChild(edit);
    let newTache = document.createElement('input');
//     edit.addEventListener('click', () => {
//         newTache.classList.add('mx-3');
//         ligne.replaceChild(newTache, tache);
//         ligne.replaceChild(ok, edit);
//         supp.classList.add('d-none');
//         ok.addEventListener('click', ()=>{
//             tache.innerText = newTache.value;
//             ligne.replaceChild(tache, newTache)
//             ligne.replaceChild(edit, ok);
//             supp.classList.remove('d-none');
//         })
//     })
// }

// done.addEventListener('click', () => {
//     for (let i = 0; i < tabList.length; i++) {
//         if (tabList[i].classList.contains('toDo')) {
//             tabList[i].classList.remove('d-flex');
//             tabList[i].classList.add('d-none');
//         } else {
//             tabList[i].classList.add('d-flex');
//             tabList[i].classList.remove('d-none');
//         }
//     }
// })
// all.addEventListener('click', () => {
//     for (let i = 0; i < tabList.length; i++) {
//         tabList[i].classList.remove('d-none');
//         tabList[i].classList.add('d-flex');
//     }
// })
// inputTache.addEventListener("keydown", () => {
//     if (event.keyCode === 13) {
//         addList();
//     }
// })


// toDo.addEventListener('click',()=>{
    for (let i = 0; i < tabList.length; i++) {
        if (tabList[i].classList.contains('done')) {
            tabList[i].classList.remove('d-flex');
            tabList[i].classList.add('d-none');
        } else {
            tabList[i].classList.add('d-flex');
            tabList[i].classList.remove('d-none');
        }
    }
} 

    return (
        <div className='container'>
            <h1> Exo 7</h1>
            <div class=" py-5 px-5 my5 container">
            <h2>To do list</h2>
            <div class="input-group mb-3">
                <input id="inputTache" type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="row">
                <button id="all" type="button" class="btn btn-info d-block mx-2">ALL</button>
                <button id="done" type="button" class="btn btn-info d-block mx-2">DONE</button>
                <button id="toDo" type="button" class="btn btn-info d-block mx-2">TO DO</button>
            </div>
            <div id="divList" class="mt-3">
                <ul id="list">
                </ul>
             </div>
            </div>

            </div>
        
    )
}
