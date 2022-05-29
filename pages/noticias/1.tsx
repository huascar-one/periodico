import Head from "next/head";
import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const First = () => {
  return (
    <>
      <Meta noticia={noticias[1]}></Meta>

      <p>
        Unas personas del plan cuatro mil de la zona de los lotes encontraron a
        dos niños en la calle de 8 y 10 años de edad, tenían lesiones en
        diversas partes del cuerpo.
      </p>
      <p>
        Llamaron a la policía para que pudieran socorrer a los niños, los niños
        presentaban muchas heridas físicas y emocionales
      </p>
      <p>
        Los agentes policiales lo primero que hicieron fue trasladar a los
        pequeños al hospital de niños Mario Ortiz, para que reciban atención
        médica.
      </p>
      <p>La persona agresiva era de 29 años.</p>
      <p>
        La mamá del agresor aseguró que, una vez descubierto el abuso, su hijo
        dándose a la fuga y se desconoce del paradero.
      </p>
      <p>
        La madre del agresor fue citada a la Fuerza Especial de Lucha Contra el
        Crimen (FELCC), para prestar sus declaraciones.
      </p>
      <p>
        Los niños reciben atención médica en el hospital y según los informes
        médicos se encuentran estables. La Defensoría de la Niñez se hizo cargo
        del cuidado mientras avanzan las investigaciones en procura de detener
        al responsable y entregarlo a la justicia, por haber atentado contra la
        integridad de los niños
      </p>
      <p>
        El comandante de la Policía, Erick Olguín destacó el rol de los vecinos
        que velaron los acontecimientos.
      </p>
    </>
  );
};

export default First;
