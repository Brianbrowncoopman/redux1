import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="suplentes">
      {suplentes.map((j) => (
        <article className="suplentes" key={j.id}>
          <div>
            <img src={j.foto} alt={j.nombre} />
            <button>x</button>
          </div>
          <p>{j.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
