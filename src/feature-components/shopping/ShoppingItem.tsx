import { Button, Card, Col } from "react-bootstrap";
import { ShoppingItemProps } from "../../types/shopping";
import React, { useState } from "react";
import "./shoppingItem.css";
import { Modal } from "../../components/Modal/Modal";

const ShoppingItem: React.FC<{
  item: ShoppingItemProps;
  addToCart: () => void;
}> = ({ item, addToCart, openProductPage }: { item: ShoppingItemProps }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { name, id, price } = item;
  return (
    <>
      <Col key={id} className="shopping-item">
        <Card>
          <Card.Body>
            <Card.Img
              src={item.image}
              alt="name"
              onClick={() => setIsOpenModal(true)}
            ></Card.Img>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button onClick={addToCart}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
      <Modal isOpen={isOpenModal}>
        <h1>What is Up</h1>
      </Modal>
    </>
  );
};

export { ShoppingItem };
