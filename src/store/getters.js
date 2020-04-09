/*包含多個基於state的getter計算屬性對象*/
export default {
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },
  totalPrice(state) {
    return state.cartFoods.reduce(
      (preTotal, food) => preTotal + food.count * food.price,
      0
    );
  }
};
