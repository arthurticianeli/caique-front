import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="custom-footer mt-3"

    >
      <div className="container py-5">
        <div className="row align-items-start text-center text-md-start">
          {/* Coluna Sobre */}
          <div className="col-12 col-md-6 px-4">
            <h3 className="fw-bold mb-3">Sobre</h3>
            <p style={{ lineHeight: "1.6" }}>
              Caique Marquez é Jornalista, Radialista e Apresentador de TV. É
              formado em Comunicação Social, pela Universidade Federal de
              Alagoas. Editor de Política em grandes jornais, como a Gazeta de
              Alagoas, apresentador, produtor e diretor de TV, na Band e no SBT.
              Assessor de imprensa para empresas, Prefeitura e Câmara Municipal
              de Maceió, Secretaria de Ciência e Tecnologia de Alagoas e Senado
              Federal.
            </p>
          </div>

          {/* Coluna Contatos */}
          <div className="col-12 col-md-6 px-4">
            <h3 className="fw-bold mb-3">Contatos</h3>
            <p className="mb-4" style={{ lineHeight: "1.6" }}>
              Entre em contato e acompanhe nas redes sociais para novidades e
              informações.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://api.whatsapp.com/send?text=Caique%20Marquez%20-%20Jornalismo%20de%20Verdade%20//%20Not%C3%ADcias%20sobre%20Gramado%20e%20Canela%20https://caiquemarquez.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.8rem", color: "#25d366" }}
                className="text-decoration-none"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/caiquemarquez/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.8rem", color: "#E1306C" }}
                className="text-decoration-none"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/caiquemarquez"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.8rem", color: "#4267B2" }}
                className="text-decoration-none"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com/caiquemarquez"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.8rem", color: "#1DA1F2" }}
                className="text-decoration-none"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/caiquemarquez"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.8rem", color: "#0077B5" }}
                className="text-decoration-none"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Direitos Autorais */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <h3 className="fw-bold">CAIQUE MARQUEZ</h3>
            <p className="m-0" style={{ fontSize: "12px" }}>
              Copyright © 2024 - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
