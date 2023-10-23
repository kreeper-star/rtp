import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.nawbar}>
                <Link to="/">Главная страница</Link>
                <Link to="/home">Регистрация</Link>
                <Link to="/chat">Чат</Link>
                <Link to="/test">Подгрузка данных</Link>
            </nav>
        </div>
    )
}

 export default Header