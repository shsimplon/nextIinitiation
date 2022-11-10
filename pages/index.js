/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../data/vocabulary.json";

import Navbar from "../components/navbar";
export default function Home({ array }) {
  return (
    <>
      <div className={styles.container}>
        <h1>Vocabulaire</h1>
        <table>
          <thead>
            <tr>
              <th>Anglais</th>
              <th>Francais</th>
            </tr>
          </thead>
          <tbody>
            {array.map((el) => (
              <tr>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

//afficher des données d'une maniere static dans les pages : données
//qui vont pas changer , cette function vient avec next
export async function getStaticProps() {
  const array = data.vocabulary;

  //deriger vers la page 404 en cas pas de données
  //   if (array.length === 0) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  //redirection vers une autre page
  //   if (array.length === 0) {
  //     return {
  //       redirect: {
  //         destination: "/isr",
  //       },
  //     };
  //   }
  return {
    props: { array },
  };
}
