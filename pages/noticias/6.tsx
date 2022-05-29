import Head from "next/head";
import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Six = () => {
  return (
    <>
      <Meta noticia={noticias[6]}></Meta>

      <p>
        Se hace referencia a las acciones que el Estado boliviano realiza, a
        través de promulgación de leyes que tienen como meta garantizar una vida
        libre de violencia a la mujer boliviana, sin embargo, datos actuales
        muestran que este fenómeno se ha incrementado y recrudecido
        significativamente. <strong>​</strong>
      </p>
      <p>
        La violencia contra niñas, jóvenes y mujeres es una violación a los
        derechos humanos. Es por ello, que cada 25 de noviembre se conmemora el
        Día Internacional de Eliminación de la Violencia contra las Mujeres en
        memoria al asesinato de las hermanas Mirabal ocurrida en 1960.
      </p>
      <p>
        La violencia de género se ha convertido en la primera causa de muerte de
        las mujeres a nivel mundial, miles de mujeres son asesinadas cada año
        por el sólo hecho de ser mujeres, tal es así, que en la actualidad se le
        ha designado el término nuevo de feminicidio para nombrar estos
        repugnantes y aborrecibles hechos.
      </p>
      <p>
        Esta opresión que hay sobre las mujeres bolivianas, es persuadida por la
        historia donde se muestra una jerarquización, donde la mujer es asignada
        a los roles de trabajo doméstico y reproducción.
      </p>
    </>
  );
};

export default Six;
