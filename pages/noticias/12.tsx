import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const page = () => {
  return (
    <>
      <Meta noticia={noticias[12]} />
      <p>
        Con el aumento de la población de personas mayores, también se ha
        incrementado el maltrato (OMS, 2018). La Convención Interamericana sobre
        la Protección de los Derechos Humanos de las Personas Mayores define el
        maltrato como todo acto u omisión contra una persona mayor, que ocurra
        de manera única o repetida y produzca daño a la integridad física,
        psíquica, moral o que vulnere el goce de los derechos humanos y
        libertades fundamentales, independientemente de que esta situación se
        produzca en el marco de una relación de confianza (OEA, 2015)
      </p>
      <p>
        En el Estado Plurinacional de Bolivia los esfuerzos por proteger a las
        personas mayores se concretan a partir de la Constitución Política del
        Estado promulgada en 2009, en la cual se reconocen por primera vez los
        derechos, garantías y beneficios de las personas adultas
        mayores(Gobierno del Estado Plurinacional de Bolivia, 2009a). En este
        mismo año, por medio del decreto supremo núm. 0264 se declaró el 26 de
        agosto Día de la Dignidad de las Personas Adultas Mayores en todo el
        territorio del Estado Plurinacional de Bolivia (Gobierno del Estado
        Plurinacional de Bolivia, 2009b) . Además, en 2013 se promulgó la Ley
        núm. 369, Ley General de las Personas Adultas Mayores, que tiene por
        objetivo regular los derechos, garantías y deberes de las personas
        adultas mayores, así como la institucionalidad para su protección
        (Asamblea Legislativa Plurinacional, 2013) . En 2013 se creó el Consejo
        de Coordinación Sectorial Por una Vejez Digna, a partir del decreto
        supremo núm. 1.807 (Gobierno del Estado Plurinacional de Bolivia, 2013)
        . En 2016, la Asamblea Legislativa Plurinacional ratificó la Convención
        Interamericana sobre la Protección de los Derechos Humanos de las
        Personas Mayores por medio de la Ley núm. 872 de 21 de diciembre de 2016
        (Asamblea Legislativa Plurinacional, 2016). Posteriormente, en 2017, en
        cumplimiento de la Ley núm. 369 y con la ratificación de la Convención,
        el Ministerio de Justicia formuló el Plan Multisectorial de Desarrollo
        Integral de las Personas Adultas Mayores 2016-2020, que responde al
        desafío de generar y ampliar mecanismos de garantía y protección de
        derechos de las personas adultas mayores (Ministerio de Justicia y
        Transparencia Institucional, 2018).
      </p>
      <p>
        Ante estas situaciones los adultos mayores en Bolivia tienen reconocidos
        los siguientes derechos:
      </p>
      <ul>
        <li>
          Derecho a la Seguridad de ingresos, la renta universal de vejez y
          gastos funerales, la renta dignidad.
        </li>
        <li>Derecho a la Identidad.</li>
        <li>Derecho a la Salud.</li>
        <li>Derecho a la Protección.</li>
        <li>Derecho a la Participación.</li>
      </ul>
    </>
  );
};

export default page;
