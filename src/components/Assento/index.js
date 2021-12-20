import { useState } from 'react'
import "./style.css";

function Assento({livre, numero, assentos}) {
    const [reserva, setReserva] = useState(livre)

    function selecaoAssento() {
        if (reserva === false) {
            alert('Esse assento não está disponível')
        } else if (reserva === 'selecionado') {
            setReserva(true); 
            assentos[numero-1].isAvailable = true
        } else {
            setReserva('selecionado'); 
            assentos[numero-1].isAvailable = 'selecionado'
        }
    }

    return (
        <div className={`assento ${reserva}`} onClick={() => selecaoAssento(reserva, numero)}>
            {numero}
        </div>
    )
}

export default Assento; 