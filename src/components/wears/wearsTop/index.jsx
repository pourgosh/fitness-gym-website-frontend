import { useContext } from "react";
import { productsContext } from "../../../App";
import { Box, Button, Grid, Typography } from "@mui/material";

const WearsTop = () => {
  const products = useContext(productsContext);
  return (
    <section>
      <Box
        display={"flex"}
        justifyContent={"center"}
        pt={{ xs: 12, lg: 15, xl: 17, xxxl: 19 }}
      >
        <Typography variant="h1" color={"primary.main"}>
          Wears
        </Typography>
      </Box>
      <Grid
        container
        pt={{ xs: 2 }}
        px={{ xs: 1, md: 10, xl: 20, xxl: 50 }}
        gap={{ xs: 1, lg: 2, xxl: 3 }}
      >
        {products.wears &&
          products.wears
            .filter((_, index) => {
              return index >= 0 && index < 3;
            })
            .map((elem) => {
              return (
                <Grid
                  item
                  key={elem._id}
                  flex={1}
                  position={"relative"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "white" }}
                >
                  <img
                    src={elem.image}
                    style={{
                      width: "auto",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Button
                    variant="text"
                    sx={{
                      backgroundColor: "primary.sub",
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      color: "primary.main",
                      textAlign: "center",
                      fontFamily: "textFont",
                      fontSize: {
                        xs: "0.4rem",
                        between: "0.6rem",
                        lg: "0.8rem",
                        xxl: "1rem",
                      },
                    }}
                  >
                    {elem.title}
                  </Button>
                </Grid>
              );
            })}
      </Grid>
    </section>
  );
};

export default WearsTop;
