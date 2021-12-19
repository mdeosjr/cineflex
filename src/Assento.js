import { useState } from 'react'

function Assento({livre, numero}) {
    const [reserva, setReserva] = useState(livre)

    function selecaoAssento() {
        if (reserva === false) {
            alert('Esse assento não está disponível')
        } else if (reserva === 'selecionado') {
            setReserva(true)
        } else setReserva('selecionado')
    }

    return (
    <>
        {(livre) ? 
        <div className={`assento ${reserva}`} onClick={() => selecaoAssento(reserva)}>{numero}</div> 
        : 
        <div className={`assento ${reserva}`} onClick={() => selecaoAssento(reserva)}>{numero}</div>
        }
    </>
    )
}

export default Assento; 