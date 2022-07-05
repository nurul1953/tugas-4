function Tombol(props){
    const notif = ()=>{
        return alert(`Anda telah mengklik tombol ${props.name}`);
    };

    return(
        <div>
            <button onClick={notif}>{props.name}</button>
        </div>
    )
}

export default Tombol;