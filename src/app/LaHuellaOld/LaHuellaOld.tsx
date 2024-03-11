/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import "./style.css";

const LAHuellaOld = () => {
  return (
    <>
      <section className="titulo">
        <div className="tabla1"></div>
        <div className="links">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100063755193817"
            className="boton"
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/la_huella2019/"
            className="boton"
          >
            Instagram
          </a>
        </div>
        <div className="texto">
          <span className="texto-ind texto-ind--big">Zonas de reparto:</span>
          <span className="texto-ind">Estación</span>
          <span className="texto-ind">Aljaima</span>
          <span className="texto-ind">Atalaya</span>
          <span className="texto-ind">Sexmo</span>
          <span className="texto-ind">Av Juegos olímpicos</span>
        </div>
      </section>
      <section className="img-container">
        <ul className="images">
          <li>
            <a
              target="_blank"
              className="enlace boton"
              href="downloads/carta.pdf"
            >
              Descargar carta
            </a>
          </li>
          <li className="image">
            <img width="800" src="images/portada 2.jpeg" />
          </li>
          <li className="image">
            <img width="800" src="images/ensaladas.jpeg" />
          </li>
          <li className="image">
            <img width="800" src="images/camperos-y-roscas.jpeg" />
          </li>
          <li className="image">
            <img width="800" src="images/pepitos.jpeg" />
          </li>
          <ul className="pizzas">
            <li className="image">
              <img width="800" src="images/pizza1.jpeg" />
            </li>
            <li className="image">
              <img width="800" src="images/pizzas2.jpeg" />
            </li>
          </ul>
        </ul>
      </section>
    </>
  );
};

export default LAHuellaOld;
