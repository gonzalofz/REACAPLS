import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getCharacters } from "../../services/MiApi";

const NavbarSearch = ({ setCharacters }) => {
  const searchCharacters = async () => {
    const textValue = document
      .querySelector("#search")
      .value.toLocaleLowerCase();
    const response = await getCharacters();

    if (textValue !== "") {
      const result = response.filter((character) =>
        character.name.toLocaleLowerCase().includes(textValue)
      );

      setCharacters(result);
    } else {
      setCharacters(response);
    }
  };

  const handlerSortCharacters = async (isAsc = true) => {
    const response = await getCharacters();

    let sortCharacters;
    if (isAsc) {
      sortCharacters = response.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortCharacters = response.sort((a, b) => b.name.localeCompare(a.name));
    }

    setCharacters(sortCharacters);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Ordenar" id="navbarScrollingDropdown">
              <NavDropdown.Item
                href="#action4"
                onClick={() => handlerSortCharacters(true)}
              >
                ascendente
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                onClick={() => handlerSortCharacters(false)}
              >
                desendente
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search"
            />
            <Button variant="outline-success" onClick={searchCharacters}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSearch;
