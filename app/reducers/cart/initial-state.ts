const getCartInitialState = () => {
  const initialState = {
    items: [],
    totalPrice: 0,
  };

  try {
    if (typeof window === undefined) return initialState;

    const cartInStorage = localStorage.getItem("cart");
    if (!cartInStorage) return initialState;

    return JSON.parse(cartInStorage);
  } catch {
    return initialState;
  }
};

export default getCartInitialState;
