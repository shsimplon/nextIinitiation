import React from "react";

const isr = ({ data }) => {
  return (
    <div>
      <p>{data.quotes[0].text}</p>
    </div>
  );
};

export default isr;

//isr
export async function getStaticProps() {
  const quote = await fetch(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
  );
  const data = await quote.json();
  return {
    props: { data },
    //isr permet de reexecuter cette fonction chaque 20s
    //donc recrier une page static chaque 20s
    revalidate: 20,
  };
}
