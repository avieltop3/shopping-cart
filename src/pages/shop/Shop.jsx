import Navbar from "../../components/Navbar/Navbar";
import useShoppingData from "../../functions/useShoppingData";
import Card from "../../components/Card/Card";
import "./Shop.css";

export default function Shop({ shoppingCart, setShoppingCart }) {
  const { shoppingItems, error, loading } = useShoppingData();

  if (loading) return <p>Loading from store API...</p>;

  if (error) return <p>An error has occured.</p>;

  return (
    <>
      <Navbar />
      <div className="menu">
        {shoppingItems.map((shoppingItem, index) => (
          <Card
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            key={index}
            index={index}
            image={shoppingItem.image}
            title={shoppingItem.title}
            desc={shoppingItem.description}
            price={shoppingItem.price}
          />
        ))}
      </div>
    </>
  );
}
