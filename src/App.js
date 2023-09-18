// Components
import Container from "./Components/Container";
import Counter from "./Components/Counter";
import Header from "./Components/Header";

// React Router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/modal" element={<h1>Modal</h1>} />
      </Routes>
    </Container>
  );
};

export default App;
