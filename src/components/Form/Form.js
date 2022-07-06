import "./Form.css";

const Form = () => {
  return (
    <section
      id="contact"
      className="container-xxl d-flex justify-content-center"
    >
      <form action="form.php" method="POST" className="speaker-form container">
        <div className="row">
          <div className="form-row col-5">
            <label htmlFor="line">
              <h3 className="form-title">CONTACTANOS</h3>
            </label>
            <input id="line" name="line" type="text" disabled />
          </div>
          <div className="form-row col-5">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="form-row col-5">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className="form-row col-5">
            <label htmlFor="abstract">Consulta</label>
            <textarea id="abstract" name="textarea"></textarea>
          </div>
          <div className="form-row col-5">
            <label htmlFor="tel">Teléfono</label>
            <input id="tel" name="tel" type="tel" />
          </div>
          <div className="form-row col-5">
            <button>ENVIAR</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
