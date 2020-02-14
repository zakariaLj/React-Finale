import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Exo4() {
    const [Carre, setCarre] = useState(0);
    const [Compt, setCompt] = useState(0);

    let gotoChange = ()=>{
        let cube1 = document.getElementById('cub1');
        let cube2 = document.getElementById('cub2');
        
        if (Carre === 0) {
            cube2.classList = ('d-none');
            cube1.classList = ('Carre1 d-block');
            setCarre(1)
            
            
        }else{
            cube1.classList='d-none';
            cube2.classList='Carre2 d-block';
            setCarre(0)
            
        }
        setCompt(Compt+1)
        
    }

    let removeCompteur=()=>{
        let CarreRemove1 = document.getElementById('cub1');
        let CarreRemove2 = document.getElementById('cub2');

        CarreRemove1.classList = ('Carre1 d-block');
        CarreRemove2.classList = ('Carre1 d-none');
        
        setCompt(0)
        setCarre(0)
    }
    return (
        <div className="container bg-dark">
            <h1> Exo  4</h1>
            <div className="CarreParent">
                <div className="Carree1">
                    <div id="cub1" className='Carre1'>

                    </div>

                </div>
                <div className="Carree1">
                    <div id="cub2" className='Carre2'>

                    </div>
                </div>



            </div>
            <div className="d-flex justify-content-center align-items-center">
            <button onClick={() => gotoChange()} > Press</button>
            <button onClick ={()=> removeCompteur()}> compteur </button>
            
            
            </div>

            <div>
                <h3> {Compt} </h3>
            </div>

        </div>
    )
}





