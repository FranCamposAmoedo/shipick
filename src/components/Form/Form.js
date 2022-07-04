import "./Form.css";

const Form = () => {
  return (
    <section
      id="contact"
      className="container-xxl d-flex justify-content-center"
    >
      <form action="form.php" method="POST" className="speaker-form">
        <div className="form-row">
          <label htmlFor="line"><h3>CONTACTANOS</h3></label>
          <input id="line" name="line" type="text" />
        </div>
        <div className="form-row">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="joseperez@gmail.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" />
        </div>
        <div className="form-row">
          <label htmlFor="abstract">Consulta</label>
          <textarea id="abstract" name="textarea"></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="tel">Teléfono</label>
          <input id="tel" name="tel" type="tel" />
        </div>
        <div className="form-row">
          <button>ENVIAR</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
