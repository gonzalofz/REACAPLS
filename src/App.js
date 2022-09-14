import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import CardsCharacters from "./components/CardsCharacters";
import { getCharacters } from "./services/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSearch from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharactersService = async () => {
      const response = await getCharacters();

      setCharacters(response);
    };

    getCharactersService();
  }, []);

  return (
    <>
      <NavbarSearch setCharacters={setCharacters} />
      <Container>
        <CardsCharacters characters={characters} />
      </Container>
    </>
  );
}

export default App;
