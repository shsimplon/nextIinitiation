import React from "react";

const bitcoin = ({ bitcoin }) => {
  console.log(bitcoin);
  return (
    <div>
      <h1 className="text-center my-2">
        Le Bit est de : {bitcoin.bpi.EUR.rate}
      </h1>
    </div>
  );
};

export async function getServerSideProps() {
  const url = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  console.log(url);

  const bitcoin = await url.json();
  return {
    props: {
      bitcoin,
    },
  };
}

export default bitcoin;
