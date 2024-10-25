const getTotalCartItems = (cartItem) => {
  let totalItem = 0;
  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      totalItem += cartItem[item];
    }
  }
  return totalItem;
};
describe("Cart Products Management Functions", () => {
  test("Get Total Cart Items", () => {
    const cartItem = {
      0: 0,
      1: 2,
      2: 1,
    };
    const totalItem = getTotalCartItems(cartItem);

    expect(totalItem).toEqual(3);
  });
});
