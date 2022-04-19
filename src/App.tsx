import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png'

const App=()=>{
  const [heightField,setHeightField]=useState<number>(0);
  const [weightField,setWeightField]=useState<number>(0);


  return(
    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Logo" width={150}/>
        </div>
      </header>

      <div className={styles.container}>

          <div className={styles.leftside}>
            <h1>Calcule o seu IMC</h1>
            <p>Para calcular o IMC (Índice de Massa Corporal), basta preencher os campos abaixo.</p>
          
            <input
              type="number"
              placeholder="Digite aqui a sua altura. Ex: 1.5 (Em metros) "
              value={heightField>0? heightField:''}
              onChange={e=>setHeightField(parseFloat(e.target.value))}
              
            />

            <input
              type="number"
              placeholder="Digite aqui o seu peso. Ex: 73.5 (Em Kg) "
              value={weightField>0? weightField:''}
              onChange={e=>setWeightField(parseFloat(e.target.value))}
              
            />

          </div>
          <div className={styles.rightside}>
            ...
          </div>

      </div>


    </div>
  );
}


export default App;