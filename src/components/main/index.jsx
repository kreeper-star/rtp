import { Route, Switch } from "react-router-dom"
import style from "./style.module.css"
import Home from "../home"
import Chat from "../chat"
import TestApi from "../test-api"
import Wejer from "../wejer"

const Main = ()=>{
    return(
        <div className={style.jon}>
            <Switch>
                <Route exact path="/" component={Wejer}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/test" component={TestApi}/>
            </Switch>
        </div>
    )
}

 export default Main