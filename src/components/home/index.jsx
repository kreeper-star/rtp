import { useState } from "react"
import styles from "./style.module.css"
import { useLocalStorage } from "../../hook/useLocalStorage"


const Home = ()=>{
    //const [user, setUser] = useState()
    const [user, setUser]= useLocalStorage("USER", "")
    const [inputValue, setInputValue] = useState("")

    return(
        <div className={styles.typet}>
            {user && (
                <div className={styles.tru}>
                    <div>Приветствую вас уважаемый {user}!</div>
                    <button onClick={() => setUser("")}>Выход</button>
                </div>
            )}
            {!user && (
                <div className={styles.tru}>
                    <label>Введите ваше имя:</label>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button onClick={() => setUser(inputValue)}>Сохранить</button>
                </div>
            )}

        </div>
    )
}

 export default Home