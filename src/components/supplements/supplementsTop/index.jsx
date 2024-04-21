import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { productsContext } from "../../../App";

const SupplementsTop = () => {
  const products = useContext(productsContext);

  return (
    <section>
      <Box
        display={"flex"}
        justifyContent={"center"}
        pt={{ xs: 12, lg: 15, xl: 17, xxxl: 19 }}
      >
        <Typography variant="h1" color={"primary.main"}>
          Supplements
        </Typography>
      </Box>
      <Grid
        container
        pt={{ xs: 2 }}
        pr={{ xs: 1, md: 10, xl: 20, xxl: 50 }}
        pl={{ xs: 1, md: 10, xl: 20, xxl: 50 }}
        gap={{ xs: 1, lg: 2, xxl: 3 }}
      >
        {products.supplements &&
          products.supplements
            .filter((_, index) => {
              return index < 3;
            })
            .map((elem) => {
              return (
                <Grid
                  position={"relative"}
                  key={elem._id}
                  item
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  flex={1}
                  border="2px solid white"
                >
                  <img
                    src={elem.image}
                    style={{
                      height: "auto",
                      width: "100%",
                      justifySelf: "flex-start",
                    }}
                  />
                  <Box
                    sx={{
                      width: { xs: "100%" },
                      height: {
                        xs: "20px",
                        md: "30px",
                        lg: "45px",
                        xxl: "60px",
                      },
                      justifySelf: "flex-end",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "primary.sub",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
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
                  </Box>
                </Grid>
              );
            })}
      </Grid>
    </section>
  );
};

export default SupplementsTop;
