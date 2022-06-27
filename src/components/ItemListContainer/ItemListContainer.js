import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <section id="item-list-container">
            <h2 className="different">¿Qué nos hace <b>diferentes?</b></h2>
            <div className="item-product">
                {
                    props.items.map(item => (
                        <div key={item.id} className="container-list">
                            <img className="item-list" src={item.img} alt="" />
                            <h5 className="item-list">{item.title}</h5>
                            <img className="item-list" src={item.line} alt="" />
                            <p className="item-list">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )

}

export default ItemListContainer;