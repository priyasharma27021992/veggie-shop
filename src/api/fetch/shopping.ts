export const fetchShoppingApi = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
      .then((data) => data.json())
      .then(resolve)
      .then(reject);
  });
};
