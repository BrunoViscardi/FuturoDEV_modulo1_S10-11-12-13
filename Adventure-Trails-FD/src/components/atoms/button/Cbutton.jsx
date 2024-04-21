import './Cbutton.css'

function Cbutton({estilo, onClick, children}){
    return(
        <>
        <button className={estilo} onClick={onClick}> {children} </button>
        </>
    )
}

export default Cbutton