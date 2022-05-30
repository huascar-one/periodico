import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[7]}></Meta>
      <p>
        La violencia racial es una de las muchas formas de la violencia que se
        manifiestan en grupos humanos (violencia social) y entre individuos
        (violencia interpersonal).
      </p>
      <p>
        Quien haga algo que provoque daño en otros debido a su origen étnico,
        expresado en sus características físicas, costumbres, etc. ejerce
        violencia racial. Esto es, cuando un grupo o persona dañan a otros
        porque el último tiene, por ejemplo, una apariencia física externa que
        difiere de la primera.
      </p>
      <p>
        Por cierto, el daño motivado racialmente también podría estar acompañado
        de otras clases de daño, o sea, económico, psicológico, físico, etc.
        Pero ahora estamos tratando el aspecto racista de la violencia sufrida o
        ejercida.
      </p>
      <p>
        Los siguientes son ejemplos que pueden ser vistos primariamente como
        violencia racial, aunque estén acompañados por las otras formas de la
        violencia: la esclavitud, la discriminación, la segregación, el
        apartheid, los pogromos, las teorías de supremacía o de inferioridad
        racial, etc.
      </p>
      <p>
        Algunas otras formas del racismo no son tan evidentes, como enviar
        algunos tipos raciales al campo de batalla primero, o presentarlos a
        través de los medios masivos de comunicación de manera desfavorable
        (parcial, ridículo, raro, etc.), o aplicar doble estándares al tratar
        con diferentes razas, etc.
      </p>
      <p>
        La Comunidad se opone al uso de la violencia como medio para conseguir
        cualquier fin. Se opone a la violencia mediante la no-violencia activa.
      </p>
    </>
  );
};

export default Page;
