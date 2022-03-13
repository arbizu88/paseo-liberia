import { ErrorMessage, Form, Field, Formik } from "formik";
import React, { useState } from "react";
import { Activities } from "../Activities/Activities";
import styles from "./Landing.module.css";

export const Landing = () => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = (e) => setReadMore(true);
  const readLessHandler = (e) => setReadMore(false);

  return (
    <section>
      <div className="row">
        <div className="col-6">
          <h3 className="">Liberia, Ciudad Blanca</h3>
          <p>
            Liberia es la ciudad capital de la provincia de Guanacaste y un
            importante tesoro cultural de Costa Rica. Un lugar imperdible para
            los turistas interesados en la cultura local, pues podrán conocer la
            rica historia colonial y descubrir los colores y sabores más
            tradicionales de la vida guanacasteca. La arquitectura habitacional
            más antigua de la ciudad, que todavía hoy se encuentra en pie, data
            de mediados del siglo XIX y está constituida por viviendas de un
            solo nivel en bahareque y adobe, con cubierta de teja de barro.
          </p>
          <p>
            Liberia es también conocida como “la ciudad blanca”, debido a las
            claras arcillas de toda la zona y al blanco reluciente que cubre
            muchas de sus fachadas.
            {readMore == false && (
              <a className={styles.links} onClick={(e) => readMoreHandler(e)}>
                ...ver mas
              </a>
            )}
          </p>
          {readMore == true && (
            <p>
              Exhibe la clásica urbanización de bajura con calles anchas ,
              antiguos edificios y casas de bahareque. Es una ciudad que se ha
              permitido combinar viejas estructuras, costumbres y tradiciones
              con el modernismo y las nuevas edificaciones entre ellos centros
              comerciales y empresas de servicio.
              <a className={styles.links} onClick={(e) => readLessHandler(e)}>
                <br />
                ...ver menos
              </a>
            </p>
          )}
          <div className="row">
            <div className="col">
              Puedes dejar tus comentarios:
              <Formik
                initialValues={{ email: "", comment: "" }}
                validate={(values) => {
                  let errors = {};

                  if (!values.email)
                    errors.email = "El correo es un campo requerido";
                  else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      values.email
                    )
                  )
                    errors.email = "El correo debe ser válido";

                  if (!values.comment)
                    errors.comment = "El comentario es requerido";

                  return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                  alert(JSON.stringify(values));
                  resetForm();
                }}
              >
                {({ errors }) => (
                  <Form>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Correo:{" "}
                      </label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="Correo"
                        type="text"
                        className="form-control"
                      />

                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div className="error">{errors.email}</div>
                        )}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="correo">
                        Comentarios:{" "}
                      </label>
                      <Field
                        id="comment"
                        name="comment"
                        placeholder="Comentarios"
                        as="textarea"
                        className="form-control"
                      />

                      <ErrorMessage
                        name="comment"
                        component={() => (
                          <div className="error">{errors.comment}</div>
                        )}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img
            className="img-fluid rounded"
            src={process.env.PUBLIC_URL + "image.jpg"}
            alt="Liberia"
          />
        </div>
      </div>
    </section>
  );
};
