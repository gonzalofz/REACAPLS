import CardCharacter from "./CardCharacter";
import { Grid } from "@mui/material";

const CardsCharacters = ({ characters }) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {characters.map((character, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardCharacter character={character} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardsCharacters;
