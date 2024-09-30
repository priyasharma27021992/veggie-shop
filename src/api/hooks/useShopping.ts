import { useEffect, useState } from "react";
import { fetchShoppingApi } from "../fetch/shopping";

export const useShopping = () => {
  const [items, setItems] = useState();

  const getData = async () => {
    try {
      const res = await fetchShoppingApi();
      setItems(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { items };
};
