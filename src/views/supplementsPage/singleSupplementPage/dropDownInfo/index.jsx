import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDownInfo = ({
  setSuppDirection,
  setSuppDescription,
  suppDirection,
  suppDescription,
  supplements,
  alergens,
  setAlergens,
  ingredients,
  setIngredients,
  manufacturer,
  setManufacturer,
}) => {
  const itemInfo = () => {
    return (
      <>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(!suppDirection);
            setSuppDescription(false);
            setAlergens(false);
            setIngredients(false);
            setManufacturer(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xs: "10px", md: "12px", xxl: "15px" },
          }}
        >
          Direction
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(false);
            setSuppDescription(false);
            setAlergens(false);
            setIngredients(!ingredients);
            setManufacturer(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xs: "10px", md: "12px", xxl: "15px" },
          }}
        >
          Ingredients
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(!suppDirection);
            setIngredients(false);
            setSuppDescription(false);
            setAlergens(false);
            setManufacturer(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xs: "10px", md: "12px", xxl: "15px" },
          }}
        >
          Direction
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(false);
            setIngredients(false);
            setSuppDescription(false);
            setAlergens(!alergens);
            setManufacturer(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xs: "10px", md: "12px", xxl: "15px" },
          }}
        >
          Alergens
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(false);
            setIngredients(false);
            setSuppDescription(false);
            setAlergens(false);
            setManufacturer(!manufacturer);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xs: "10px", md: "12px", xxl: "15px" },
          }}
        >
          Manufacturer
          <KeyboardArrowDownIcon />
        </Button>
        {manufacturer && supplements && (
          <Fragment>
            <Typography
              variant="string"
              color={"primary.main"}
              sx={{ borderTop: "1px solid white", padding: 1 }}
            >
              {supplements.manufacturer}
            </Typography>
          </Fragment>
        )}
        {alergens && supplements && (
          <Fragment>
            {supplements.allergens.map((elem) => {
              return (
                <Typography
                  key={elem._id}
                  variant="string"
                  color={"primary.main"}
                  sx={{ borderTop: "1px solid white", padding: 1 }}
                >
                  {elem}
                </Typography>
              );
            })}
          </Fragment>
        )}
        {ingredients && supplements && (
          <Fragment>
            {supplements.ingredients.map((elem) => {
              return (
                <Typography
                  key={elem._id}
                  variant="string"
                  color={"primary.main"}
                  sx={{ borderTop: "1px solid white", padding: 1 }}
                >
                  {elem}
                </Typography>
              );
            })}
          </Fragment>
        )}

        {suppDirection && supplements && (
          <Fragment>
            <Typography
              variant="string"
              color={"primary.main"}
              sx={{ borderTop: "1px solid white", pt: 2 }}
            >
              {supplements.direction}
            </Typography>
          </Fragment>
        )}

        {suppDescription && supplements && (
          <Fragment>
            <Typography
              variant="string"
              color={"primary.main"}
              sx={{ borderTop: "1px solid white", pt: 2 }}
            >
              {supplements.description}
            </Typography>
          </Fragment>
        )}
      </>
    );
  };
  return <>{itemInfo()}</>;
};

export default DropDownInfo;
