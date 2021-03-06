import "./Form.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_u1qc4lg","template_lglnvmc",e.target,"TtolZpIkJMBcmSEU3").then(res=>{
      e.target.reset();
      swal({
        title: "Gracias!",
        text: "Su mensaje se ha enviado correctamente",
        icon: "success",
        button: "ACEPTAR",
        timer: "3000"
      });
    })
  }
  return (
    <section
      id="contact"
      className="container-xxl d-flex justify-content-center"
    >
      <form onSubmit={sendEmail} className="speaker-form container">
        <div className="row">
          <div className="form-row col-5">
            <label htmlFor="line">
              <h3 className="form-title">CONTACTANOS</h3>
            </label>
            <input id="line" name="line" type="text" disabled />
          </div>
          <div className="form-row col-5">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" required/>
          </div>
          <div className="form-row col-5">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required/>
          </div>       
          <div className="form-row col-5">
            <label htmlFor="tel">Teléfono</label>
            <input id="tel" name="tel" type="tel" />
          </div>
          <div className="form-row col-5">
            <label htmlFor="abstract">Consulta</label>
            <textarea id="abstract" name="textarea" required></textarea>
          </div>
          <div className="form-row col-5">
            <button type="submit">ENVIAR</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
