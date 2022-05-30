import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[10]}></Meta>
      <div>
        Al rededor del mundo se han denunciado diferentes tipos de violencia
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
      </div>
      <div>
        <br />
      </div>
      <div>
        Una característica muy común en este tipo de violencia es que es más que
        todo física ya que las personas que la sufrieron en su mayoría
        aparecieron mutiladas, severamente quemadas, castradas y con indicios de
        agresión sexual por el odio que se les tiene.
      </div>
      <div>
        <br />
      </div>
      <div>
        Más que todo esto se puede ver en prisiones donde a este tipo de
        personas se los asesina ya sea entre los mismo policías, guardias de
        seguridad y las demás personas encarceladas.
      </div>
      <div>
        <br />
      </div>
    </>
  );
};

export default Page;
