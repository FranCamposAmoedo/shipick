import "./Map.css";

const Map = () => {
  return (
    <div>
      <iframe
        className="map-shipick"
        title="map-shipick"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.170772652604!2d-58.72096722263251!3d-34.43337986325243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca1db688af70f%3A0x1a5a3ea1b5a2867b!2sShipick!5e0!3m2!1ses!2sar!4v1656940446123!5m2!1ses!2sar"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
