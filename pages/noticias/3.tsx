import Head from "next/head";
import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const First = () => {
  return (
    <>
      {" "}
      <Meta noticia={noticias[3]}></Meta>
      <p>
        En los últimos tiempos hubo una gran mejoría en los avances digitales,
        lo cual se ve con muy buenos ojos ante la sociedad ya que con los
        avances tecnológicos se puede tener un mejor estilo de vida, pero al
        igual de favorable también es dañino ya que el uso de medios digitales
        para molestar o acosar a una persona o grupo de personas, mediante
        ataques personales, divulgación de información personal o falsa entre
        otros medios, ha crecido a pasos agigantados. Los actos de ciberagresión
        poseen unas características concretas que son el anonimato del agresor,
        su velocidad y su alcance.
      </p>
      <p>
        El ciberacoso es una forma de violencia bastante recurrente hoy por hoy
        ya que afecta de manera psicológica a una persona ya sea de las
        diferentes formas de acosar a una persona (difamación, insultos, falsa
        información, etc.) por algún motivo, razón o circunstancia que le
        acosador busca la manera de hacer sentir mal a una persona.
      </p>
      <p>
        Para muchas personas es difícil tratar de resolver este problema, pero
        la mejor forma de parar el ciberacoso
      </p>
      <p>
        En el tratamiento del ciberacoso es fundamental un apoyo incondicional
        por parte de familia y amigos ya que en la víctima aparecen generalmente
        sentimientos de vergüenza y culpabilidad que pueden llevarla a una
        situación de bloqueo, ansiedad y miedo, inseguridad o incluso ideas de
        suicidio. También es importante el tratamiento psicológico basado en una
        psicoterapia de apoyo.
      </p>
      <p>
        Para poder evitar el ciberacoso debemos tomar en cuenta (concienciar el
        uso correcto de las redes sociales, cuidar la privacidad, no caer en las
        provocaciones y noticias falsas) tomar en cuenta que depende de nosotros
        darle un buen uso a los medios digitales, redes sociales y diferentes
        plataformas.
      </p>
      <p>
        Tomar conciencia de las acciones que tomamos y lo que podemos causar con
        pequeños mensajes ya que nosotros no podemos decidir cómo se siente una
        persona.
      </p>
    </>
  );
};

export default First;
