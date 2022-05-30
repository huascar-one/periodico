import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[8]}></Meta>
      <p>
        En 2021 el delito más frecuente fue el abuso sexual en niños mujeres y
        adolescentes según un comunicado de la fiscalía general del estado.
      </p>
      <p>
        La violencia sexual existe dentro del matrimonio en familiares o
        conocidos y desconocidos, una de los principales casos de violencia
        sexual se encuentra en las mujeres al ser violadas o agredidas y en
        algunos casos hasta la muerte un maltrato por parte del cónyuge de la
        mujer o por un completo desconocido
      </p>
      <p>
        También afecta de una forma traumática a los niños y adolescentes,
        pueden llegar al suicidio se les dificulta establecer una relación con
        las demás personas, desconfianza hacia los adultos.
      </p>
      <p>
        Estas víctimas necesitan ayuda de un psiquiatra infantil intervención
        terapéutica un juego de desahogo emocional.
      </p>
    </>
  );
};

export default Page;
