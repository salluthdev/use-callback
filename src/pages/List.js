import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating items..");
  }, [getItems]);

  return items.map((item) => <h3 key={item}>{item}</h3>);
}
