import { IconButton, Stack } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
const LeftSectionTop = ({ supplements, addItem }) => {
  const displayItem = (supplements) => {
    return (
      supplements && (
        <Fragment key={supplements._id}>
          <img
            src={supplements.image}
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
                addItem(supplements);
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

  return <>{displayItem(supplements)}</>;
};

export default LeftSectionTop;
