function Assento({idSessao, assentos}) {

    return (
    <>
        {assentos.map(assento => <div className={`assento ${assento.isAvailable}`}>{assento.name}</div>)}  
    </>
    )
}

export default Assento;