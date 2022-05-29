import Head from "next/head";
import React from "react";
import noticias from "../../noticias";

export const Meta = ({ noticia }) => (
  <>
    <Head>
      <title>{noticia.title}</title>
    </Head>
    <h1>{noticia.title}</h1> <h6>POR {noticia.autor.toUpperCase()}</h6>
    <p>{noticia.desc} </p>
    <img src={noticia.img} alt="" />
  </>
);

const First = () => {
  return (
    <>
      <Meta noticia={noticias[5]}></Meta>

      <p>
        “Eres inútil”, “no sirves para nada”, “eso es lo mejor que puedes
        hacer”, “eres horrible”, “tienes un trabajo mediocre”, son frases que
        suelen escuchar los adolescentes a diario, estas frases son parte de la
        violencia psicológica y verbal que pueden sufrir por parte de sus
        padres, maestros, amigos y compañeros. El grupo que se vería más
        afectado con este tipo de violencia sería el de jóvenes entre 15 y 29
        años de edad.
      </p>
      <p>
        Al respecto algunos expertos en el área de la psicología sostienen que:
      </p>
      <p>
        “La violencia psicológica, en sus diversas formas como la moralización,
        donde la persona se cree dueña de la verdad absoluta y juzga a los demás
        desde su posición, o la imposición de ideas, donde el agresor suele
        tomar decisiones sin el consentimiento de la víctima, entre otras son
        algunas formas de violencia psicológicas que pasan desapercibidas”
      </p>
      <p>
        Por lo que se evidencia que la violencia psicológica es la violencia mas
        cotidiana en la vida de las personas y puede pasar desapercibida, ya que
        las personas piensan que la violencia puede ser solo de forma física
        pero la violencia no puede dañarte solo físicamente, sino que también
        puede herir tus sentimientos y dañarte psicológicamente.
      </p>
    </>
  );
};

export default First;
