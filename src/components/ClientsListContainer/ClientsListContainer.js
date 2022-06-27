import "./ClientsListContainer.css";

const ClientsListContainer = (props) => {
    return (
        <section id="clients">
            <h2 className="clients-title"><b>Clientes</b> que confían <br/> en nosotros</h2>
            <img className="clients-line" src="../images/icons/linea seccion clientes.png" alt="" />
            <div className="clients-list-container">
                {
                    props.clients.map(client => (
                        <div key={client.id} className="client-container">
                            <img src={client.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ClientsListContainer;