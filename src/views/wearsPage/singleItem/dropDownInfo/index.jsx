import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDownInfo = ({
  setManufacture,
  setDescription,
  manufactur,
  description,
  wears,
}) => {
  const itemInfo = () => {
    return (
      <>
        <Button
          variant="text"
          onClick={() => {
            setManufacture(!manufactur);
            setDescription(false);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Manufacturer
          <KeyboardArrowDownIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setManufacture(false);
            setDescription(!description);
          }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          Description
          <KeyboardArrowDownIcon />
        </Button>
        {manufactur && wears && (
          <Fragment key={wears._id}>
            <Typography
              variant="string"
              color={"primary.main"}
              sx={{ borderTop: "1px solid white", pt: 2 }}
            >
              {wears.manufacturer}
            </Typography>
          </Fragment>
        )}
        {description && wears && (
          <Fragment key={wears._id}>
            <Typography
              color={"primary.main"}
              variant="string"
              sx={{ borderTop: "1px solid white", pt: 2 }}
            >
              {wears.description}
            </Typography>
          </Fragment>
        )}
      </>
    );
  };
  return <>{itemInfo()}</>;
};

export default DropDownInfo;
