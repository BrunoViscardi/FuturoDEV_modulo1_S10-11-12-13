import './Cbutton.css'

function Cbutton({onClick, children}){
    return(
        <>
        <button className='Cbutton' onClick={onClick}> {children} </button>
        </>
    )
}

export default Cbutton