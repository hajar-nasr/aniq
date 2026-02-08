const getCartInitialState = () => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "{}");
  } catch {
    return {
      items: [],
      totalPrice: 0,
    };
  }
};

export default getCartInitialState;
