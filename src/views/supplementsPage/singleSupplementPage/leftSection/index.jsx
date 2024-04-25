import { IconButton, Stack } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
const LeftSectionTop = ({ supplements, numID }) => {
  const displayItem = (supplements) => {
    return (
      supplements &&
      supplements
        .filter((elem) => {
          return elem._id === numID;
        })
        .map((elem) => {
          return (
            <Fragment key={elem._id}>
              <img
                src={elem.image}
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
                    console.log("i wanna rock!");
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
          );
        })
    );
  };

  return <>{displayItem(supplements)}</>;
};

export default LeftSectionTop;
