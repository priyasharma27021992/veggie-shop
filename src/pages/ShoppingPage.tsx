import { Container, Row } from "react-bootstrap";
import { ShoppingItem } from "../feature-components/shopping/ShoppingItem";
import { ShoppingItemProps } from "../types/shopping";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShopContext";

const ShoppingPage = () => {
  const items = useContext(ShoppingContext);
  console.log("items", items);
  const addToCart = () => {};
  return (
    <main className="shopping-container">
      <Container className="mw-100">
        <Row xs={1} md={3} lg={3} className="g-4 justify-content-md-center">
          {items?.map((item: ShoppingItemProps) => (
            <>
              <ShoppingItem item={item} addToCart={addToCart} />
            </>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export { ShoppingPage };
