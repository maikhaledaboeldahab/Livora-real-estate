import style from "./MessageIcon.module.css"
export default function MessageIcon(){
    return(
        
        <button href="#contact" className={`${style.fixedMessageBtn}`} aria-label="Send a message">
            <i className={`fa-solid fa-message ${style.icon}`}></i>
        </button>
    )
}