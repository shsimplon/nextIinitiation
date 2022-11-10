import React from "react";
import list from "../../data/list.json";

const liste = ({ test }) => {
  console.log(test);
  return (
    <div>
      <h1>Vocabulaire</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  const slug = context.params.liste;

  const dataByName = await list.englishList.find((element) => {
    element.name === slug;
  });
  return {
    props: {
      dataByName: dataByName?.data,
    },
  };
}
export async function getStaticPaths() {
  const data = await list;
  const paths = await data.englishList.map((item) => ({
    params: { liste: item.name },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default liste;
