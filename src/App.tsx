import styles from './App.module.css';
import poweredImage from './assets/powered.png'

const App=()=>{
  return(
    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Logo" width={150}/>
        </div>
      </header>

      <div className={styles.container}>

          <div className={styles.leftside}>
            ...
          </div>
          <div className={styles.rightside}>
            ...
          </div>

      </div>


    </div>
  );
}


export default App;