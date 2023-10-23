import { Link } from "react-router-dom"
import styles from "./style.module.css"

const Comment = (props) =>{
    return(
        <div className={styles.wrapper}>
            <label>֍Напиши коментарий:</label>
            <input value={props.InputValue}
            onChange={(e) => props.setInputValue(e.target.value)}/>
            <button onClick={props.sendMessage}>Отправить</button>
            <button onClick={()=> props.setChatData([])}>Удалить</button>
            {props.showDialogReg &&(
                <div>
                    Вы не авторизовались! Перейдите по <Link to="/home">ССЫЛКЕ</Link>
                </div>
            )}
        </div>
    )
}

export default Comment