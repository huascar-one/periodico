import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[9]}></Meta>
      <p>
        Se trata de un fenómeno que se repite con gran frecuencia en diversos
        espacios de trabajo. La violencia laboral además de conllevar el abuso
        de poder, también implica la violación de un conjunto de derechos
        laborales y humanos que son fundamentales para el bienestar y desarrollo
        de los individuos.
      </p>
      <p>
        En este sentido, la violencia laboral también puede incluir violencia de
        género, así como acoso sexual, psicológico o moral.
      </p>
      <p>
        Las víctimas de la violencia laboral sufren ataques directos e
        indirectos de diversos tipos como psicológicos, morales e, incluso,
        físicos que repercuten en el bienestar mental y físico del trabajador, y
        además generan su denigración como empleado.
      </p>
    </>
  );
};

export default Page;
