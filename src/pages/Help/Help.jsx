import {
    HelpContainer,
    PreguntasContainer
} from "./HelpStyles";

function Help() {
    return (
        <HelpContainer>
            <h1>Preguntas Frecuentes</h1>
            <PreguntasContainer>
                <h4>Formas de Pago</h4>
                <p>Efectivo al retirar tu compra.</p>
                <p>Transferencia bancaria o depósito.</p>
                <p>Tarjeta de débito o crédito, o bien con dinero en tu cuenta mediante MERCADOPAGO.</p>
            </PreguntasContainer>
            <PreguntasContainer>
                <h4>Envio gratis</h4>
                <p>A todo el país, superando los 15 mil pesos.</p>
            </PreguntasContainer>
            <PreguntasContainer>
                <h4>¿Cuanto tarda en llegar el pedido?</h4>
                <p>Usualmente a partir de 72 hs hábiles.</p>
                <p>La empresa no se hace responsable por demoras por parte de la empresa de transporte.</p>
            </PreguntasContainer>
            <PreguntasContainer>
                <h4>Horarios de atencion</h4>
                <p>De lunes a viernes de 8:30hs a 18hs.</p>
            </PreguntasContainer>
        </HelpContainer>
    )
}

export default Help;