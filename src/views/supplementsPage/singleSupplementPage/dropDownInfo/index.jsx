import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDownInfo = ({
  setSuppDirection,
  setSuppDescription,
  suppDirection,
  suppDescription,
  supplements,
  numID,
}) => {
  const itemInfo = () => {
    return (
      <>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(!suppDirection);
            setSuppDescription(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Direction
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSuppDirection(false);
            setSuppDescription(!suppDescription);
          }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          Description
          <KeyboardArrowDownIcon />
        </Button>
        {suppDirection &&
          supplements &&
          supplements.map((elem) => {
            if (elem._id === numID) {
              return (
                <Fragment key={elem._id}>
                  <Typography
                    variant="string"
                    color={"primary.main"}
                    sx={{ borderTop: "1px solid white", pt: 2 }}
                  >
                    {elem.how_to_use}
                  </Typography>
                </Fragment>
              );
            }
          })}
        {suppDescription &&
          supplements &&
          supplements.map((elem) => {
            if (elem._id === numID) {
              return (
                <Fragment key={elem._id}>
                  <Typography
                    variant="string"
                    color={"primary.main"}
                    sx={{ borderTop: "1px solid white", pt: 2 }}
                  >
                    {elem.description}
                  </Typography>
                </Fragment>
              );
            }
          })}
      </>
    );
  };
  return <>{itemInfo()}</>;
};

export default DropDownInfo;
