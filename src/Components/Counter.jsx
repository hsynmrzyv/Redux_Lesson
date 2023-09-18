// Components
import Button from "./Button";

// Styles
const styles = {
  counterContainer:
    "flex justify-center items-center border h-[100px] w-[250px] rounded shadow-lg",
  counter: "h-10 w-10 flex items-center justify-center border",
};

const Counter = () => {
  return (
    <div className={styles.counterContainer}>
      <Button color="red">-</Button>
      <div className={styles.counter}>0</div>
      <Button color="blue">+</Button>
    </div>
  );
};

export default Counter;
