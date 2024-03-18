import { useState, useEffect } from "react";

const useShoppingData = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setShoppingItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { shoppingItems, error, loading };
};

export default useShoppingData;
