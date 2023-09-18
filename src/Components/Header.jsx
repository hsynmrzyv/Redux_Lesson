// Router
import { Link } from "react-router-dom";

// Styles
const styles = {
  header: "border w-[250px] mb-2 rounded shadow-lg",
  ul: "flex gap-2 p-2 justify-center",
  li: "border p-2 rounded transition-all duration-200 hover:scale-105 active:scale-95",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <Link to="/">
            <li className={styles.li}>Counter</li>
          </Link>
          <Link to="/modal">
            <li className={styles.li}>Modal</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
