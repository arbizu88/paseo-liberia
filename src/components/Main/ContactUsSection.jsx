import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const ContactUsSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex-shrink-0">
        <div className="container">
          <div className="row">
            <div className="col-6">
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
                  alert("Información enviada!");
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
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary me-2">
                        Enviar
                      </button>
                      <button
                        onClick={() => navigate(-1)}
                        className="btn btn-primary"
                        type="button"
                      >
                        Regresar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
