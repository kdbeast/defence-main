const FoodList = ({ food }) => {
  return (
    <>
      {food.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </>
  );
};

export default FoodList;
