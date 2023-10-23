import { useState } from "react"
import styles from "./style.module.css"
import ChatBlock from "./Chat-block"
import Coment from "./Comment"
import {useLocalStorage} from "../../hook/useLocalStorage"

const Chat = ()=>{
    const [chatData, setChatData] = useLocalStorage("CHAT", [])
    const [inputValue, setInputValue] = useState("")
    const [showDialogReg, setShowDialogReg] = useState(false)

    const [user] = useLocalStorage('USER')

    console.log(chatData)

    const sendMessage = () => {
        if(user){
            setChatData([...chatData, `${user}: ${inputValue}`])
            setInputValue("")
        }else{
            setShowDialogReg(true)
            setInputValue("")
        }
        
    }
    return(
        <div className={styles.rty}>
            <ChatBlock chatData={chatData}></ChatBlock>
            <Coment 
            inputValue={inputValue} 
            setInputValue={setInputValue}
            setChatData={setChatData}
            sendMessage ={sendMessage}
            showDialogReg ={showDialogReg}
            ></Coment>
        </div>
    )
}

 export default Chat