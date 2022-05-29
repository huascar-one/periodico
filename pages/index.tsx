import Head from "next/head";
import noticias from "../noticias";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Head>
        <title>El Golpe - Periodico Digital</title>
      </Head>
      <div className="gridco">
        {Object.values(noticias).map((x, index) => {
          const id = index + 1;
          return (
            <a
              className="noticia"
              href={x.url}
              key={id}
              style={{
                gridArea: `n${id.toString()}`,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent, black),url('" +
                    x.img +
                    "')",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <h2 style={{ padding: "0 20px", margin: "0" }}>{x.title}</h2>
                <span
                  style={{ padding: "5px 20px 20px 20px", fontSize: "11px" }}
                >
                  POR {x.autor.toUpperCase()}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
