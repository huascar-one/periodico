import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[10]}></Meta>
      <p>
        Alrededor del mundo se han denunciado diferentes tipos de violencia
        hacia las personar con una sexualidad distinta desde agresión
        psicológica hasta agresión física como ser la tortura, secuestro y
        asesinato de estas personas. También llegó a un punto en el que las
        personas homosexuales, transexuales, etc.,decidieron quitarse la vida
        (suicidio) por toda aquella violencia provocada ya sea por su propia
        familia como por compañeros o amigos transfobicos u homofobicos. Esta
        violencia puede ocurrir en variedad de entornos, desde el hogar hasta un
        parque, colegio, lugares de trabajo y otros, también se comentó que
        hubieron violaciones a mujeres por ser lesbianas o transexuales para así
        de algunas forma "curar" aquello que no era normal para la sociedad
      </p>
      <p>
        Una característica muy común en este tipo de violencia es que es más que
        todo física ya que las personas que la sufrieron en su mayoría
        aparecieron mutiladas, severamente quemadas, castradas y con indicios de
        agresión sexual por el odio que se les tiene.
      </p>
      <p>
        Más que todo esto se puede ver en prisiones donde a este tipo de
        personas se los asesina ya sea entre los mismo policías, guardias de
        seguridad y las demás personas encarceladas.
      </p>
      <p>
        Un ejemplo sobre este tipo de violencia fue: El ataque sufrido hacia dos
        personas TLGB solo por su apariencia, fueron atacados en el Alto por
        tres hombres los cuales provocaron cortes, golpes en la cabeza y hasta
        casi la pérdida de uno de los ojos de uno de los afectados, esto fue
        provocado por el odio que se tiene a las personas con un gusto distinto
        y a la intolerancia a que no sean "normales", por mi parte esto no está
        bien, sabemos que no el algo "normal" pero debe haber respeto hacia
        aquellas personas con diferentes gustos ya que sus gustos por nos
        afectan a nosotros como los nuestros no deben afectarles a ellos.
      </p>
    </>
  );
};

export default Page;
