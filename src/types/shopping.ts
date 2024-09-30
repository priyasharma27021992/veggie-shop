enum ItemType {
  Vegetable,
  Fruits,
}
type ShoppingItemProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
};

export { ItemType };
export type { ShoppingItemProps };
