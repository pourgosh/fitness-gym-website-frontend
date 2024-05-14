import { IconButton, Stack } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";

const LeftSectionTop = ({ wears, addItem }) => {
  const displayItem = (wears) => {
    return (
      wears && (
        <Fragment key={wears._id}>
          <img
            src={wears.image}
            style={{
              width: "50%",
              objectFit: "cover",
            }}
          />
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="Add to cart"
              sx={{ color: "primary.main" }}
              onClick={() => {
                addItem(wears);
              }}
            >
              <AddIcon
                sx={{
                  fontSize: {
                    xs: "20px",
                    md: "25px",
                    lg: "30px",
                    xxl: "40px",
                  },
                }}
              />
            </IconButton>
          </Stack>
        </Fragment>
      )
    );
  };

  return <>{displayItem(wears)}</>;
};

export default LeftSectionTop;
