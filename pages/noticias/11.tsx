import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const Page = () => {
  return (
    <>
      <Meta noticia={noticias[11]}></Meta>
      <p>
        Maltrato infantil se define como los abusos y la desatención de que son
        objeto los menores de 18 años, e incluye todos los tipos de maltrato
        físico o psicológico, abuso sexual, desatención, negligencia y
        explotación comercial o de otro tipo que causen o puedan causar un daño
        a la salud, desarrollo o dignidad del niño, o poner en peligro su
        supervivencia, en el contexto de una relación de responsabilidad,
        confianza o poder. La exposición a la violencia de pareja también se
        incluye a veces entre las formas de maltrato infantil.
      </p>
      <h2>Magnitud del problema</h2>
      <p>
        El maltrato infantil es un problema mundial con graves consecuencias que
        pueden durar toda la vida. A pesar de las encuestas nacionales recientes
        en varios países de ingresos bajos y medianos, faltan todavía datos
        acerca de la situación actual en muchos países.
      </p>
      <p>
        El maltrato infantil es complejo y su estudio resulta difícil. Las
        estimaciones actuales son muy variables, dependiendo del país y del
        método de investigación utilizado. Dichas estimaciones dependen de:
      </p>
      <ul>
        <li>Las definiciones de maltrato infantil utilizadas;</li>
        <li>El tipo de maltrato infantil estudiado;</li>
        <li>La cobertura y la calidad de las estadísticas oficiales;</li>
        <li>
          La cobertura y la calidad de las encuestas basadas en los informes de
          las propias víctimas, los padres o los cuidadores.
        </li>
      </ul>

      <p>
        No obstante, los estudios internacionales revelan que una cuarta parte
        de todos los adultos manifiestan haber sufrido maltratos físicos de
        niños y 1 de cada 5 mujeres y 1 de cada 13 hombres declaran haber
        sufrido abusos sexuales en la infancia. Además, muchos niños son objeto
        de maltrato psicológico (también llamado maltrato emocional) y víctimas
        de desatención.
      </p>
      <p>
        Se calcula que cada año mueren por homicidio 41 000 menores de 15 años.
        Esta cifra subestima la verdadera magnitud del problema, dado que una
        importante proporción de las muertes debidas al maltrato infantil se
        atribuyen erróneamente a caídas, quemaduras, ahogamientos y otras
        causas.
      </p>
      <p>
        En situaciones de conflicto armado y entre los refugiados, las niñas son
        especialmente vulnerables a la violencia, explotación y abusos sexuales
        por parte de los combatientes, fuerzas de seguridad, miembros de su
        comunidad, trabajadores de la asistencia humanitaria y otros.
      </p>
      <p></p>
      <h2>Consecuencias del maltrato</h2>
      <p>
        El maltrato infantil es una causa de sufrimiento para los niños y las
        familias, y puede tener consecuencias a largo plazo. El maltrato causa
        estrés y se asocia a trastornos del desarrollo cerebral temprano. Los
        casos extremos de estrés pueden alterar el desarrollo de los sistemas
        nervioso e inmunitario. En consecuencia, los adultos que han sufrido
        maltrato en la infancia corren mayor riesgo de sufrir problemas
        conductuales, físicos y mentales, tales como:
      </p>
      <ul>
        <li>Actos de violencia (como víctimas o perpetradores);</li>
        <li>Depresión;</li>
        <li>Consumo de tabaco;</li>
        <li>Obesidad;</li>
        <li>Comportamientos sexuales de alto riesgo;</li>
        <li>Embarazos no deseados;</li>
        <li>Consumo indebido de alcohol y drogas.</li>
      </ul>

      <p>
        A través de estas consecuencias en la conducta y la salud mental, el
        maltrato puede contribuir a las enfermedades del corazón, al cáncer, al
        suicidio y a las infecciones de transmisión sexual.
      </p>
      <p>
        Más allá de sus consecuencias sanitarias y sociales, el maltrato
        infantil tiene un impacto económico que abarca los costos de la
        hospitalización, de los tratamientos por motivos de salud mental, de los
        servicios sociales para la infancia y los costos sanitarios a largo
        plazo.
      </p>
    </>
  );
};

export default Page;
