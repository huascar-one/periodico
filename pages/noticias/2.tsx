import Head from "next/head";
import React from "react";
import noticias from "../../noticias";
import { Meta } from "./5";

const First = () => {
  return (
    <>
      <Meta noticia={noticias[2]}></Meta>

      <p>
        Antiguamente la violencia en los animales era considerada como algo
        común, debido a que más que nada ciertos de ellos se usaban para
        trabajos de carga. Actualmente hemos ido perfeccionando este criterio,
        empero aun de esta forma hay personas que poseen mascotas que para ellos
        son como un juguete y hay gente sin escrúpulos que de un rato a otro no
        les importa renunciar a su animal de compañía, deshacerse de él. Yo
        todavía no consigo comprender como estas «personas» si es que se las
        puede llamar de esta forma, tienen la posibilidad de hacer hechos como
        este.
      </p>
      <p>
        Para mí, que me encantan los animales, y considero mis mascotas como uno
        bastante más del núcleo familiar me resulta impensable dejar en la
        calle, separarme de estas. En otras palabras, como si abandonara a un
        hijo, hermano, etcétera., a una persona.
      </p>
      <p>
        Ya no posee nombre una vez que la cosa no solo queda en el desamparo,
        sino que se permiten él y ultrajar, pegar o herir a dichos animales que
        poseen consigo ya que se creen que son de su poder. Esto resulta
        equiparable a cualquier violencia que se logre hacer a una persona,
        debido a que son organismos vivos que, aunque no logren expresarse
        tienen la posibilidad de sentir y más que nada sienten el dolor físico.
      </p>
      <p>
        Al final mencionar que, si vemos por la calle o, en el peor de los
        casos, conocemos a alguien que maltrata a sus animales, no debemos pasar
        por delante sin más o hacer la vista gorda, sino que debemos denunciar a
        dichos maltratadores para que no se generan que tienen la posibilidad de
        bajar su rabia o sus inconvenientes pegándole a sus mascotas.
      </p>
      <p>
        Intentemos querer a nuestros propios animales como ellos nos anhelan a
        nosotros mismos.
      </p>
    </>
  );
};

export default First;
