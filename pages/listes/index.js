import Link from "next/link";
import React from "react";
import list from "../../data/list.json";
import { v4 as uuidv4 } from "uuid";

const liste = ({ data }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li key={uuidv4()} className="list-group-item">
            <Link
              href={`listes/${item.name}`}
              className="list-group-item list-group-item-action active "
              aria-current="true"
            >
              <h5>{item.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default liste;

export async function getStaticProps() {
  const data = await list.englishList;
  return {
    props: {
      data,
    },
  };
}
