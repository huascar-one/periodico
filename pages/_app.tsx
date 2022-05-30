import Head from "next/head";
import "../style.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ maxWidth: "950px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "2px solid #bb2637",
              marginBottom: "20px",
              flexDirection: "column",
            }}
          >
            <a href="/">
              <img src="/logo.jpeg" height={150} />
            </a>
            <div
              style={{
                display: "flex",
                padding: "10px 0",
                gap: "20px ",
                fontSize: "12px",
              }}
            >
              <a href="/" style={{ color: "gray", textDecoration: "none" }}>
                Portada
              </a>
              <a
                href="/horoscopo"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Horoscopo
              </a>
              <a
                href="/juegos"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Juegos
              </a>
            </div>
          </div>
          <Component {...pageProps} />
          <div
            style={{
              borderTop: "gray 1px solid",
              color: "gray",
              marginTop: "30px",
            }}
          >
            <h3>Integrantes</h3>
            <ul>
              <li>Wara Morales</li>
              <li>Jhovani Suxo</li>
              <li>Ariana Cossío</li>
              <li>Delany Caceres</li>
              <li>Josue Barrios</li>
              <li>Johan Santiesteban</li>
              <li>Deyby Loayza</li>
              <li>Luis Cahuaya</li>
              <li>Natali Calizaya</li>
            </ul>
          </div>
          <div
            style={{
              color: "gray",
              borderTop: "gray 1px solid",
              textAlign: "center",
              padding: "10px",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            EL GOLPE - COLEGIO SAN ANTONIO DE PADUA - LA PAZ - BOLIVIA
          </div>
        </div>
      </main>
    </>
  );
}
