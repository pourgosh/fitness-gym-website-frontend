import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { productsContext } from "../../../App";
import RightSection from "./rightSection";
import LeftSection from "./leftSection";

const SupplementsMiddle = () => {
  const products = useContext(productsContext);
  useEffect(() => {
    products.getSupplementData();
  });
  return (
    <section style={{ paddingTop: "30px" }}>
      <Grid
        container
        display={"flex"}
        gap={"1px"}
        px={{ lg: 10, xl: 20, xxl: 40, xxxl: 65 }}
      >
        <Grid
          item
          flex={1}
          display={"grid"}
          gap={"1px"}
          gridTemplateColumns={"repeat(2,1fr)"}
        >
          <LeftSection supplements={products && products.supplements} />
        </Grid>
        <Grid item flex={1} display={"flex"}>
          <RightSection supplements={products && products.supplements} />
        </Grid>
      </Grid>
    </section>
  );
};

export default SupplementsMiddle;

/*<Grid
        container
        pl={{ xs: 1, md: 10, xl: 20, xxl: 50 }}
        pr={{ xs: 1, md: 10, xl: 20, xxl: 50 }}
      >
        <Grid item flex={1} sx={{ background: "white" }}>
          {products.supplements &&
            products.supplements
              .filter((_, index) => {
                return index === 14;
              })
              .map((elem) => {
                return (
                  <Fragment key={elem._id}>
                    <img
                      src={elem.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{ width: "100%", background: "yellow" }}
                    >
                      <Typography variant="string">{elem.title}</Typography>
                    </Box>
                  </Fragment>
                );
              })}
        </Grid>
        <Grid container item display={"flex"} flex={1}>
          <Grid item flex={1} sx={{ background: "white" }}>
            {products.supplements &&
              products.supplements
                .filter((_, index) => {
                  return index > 2 && index < 5;
                })
                .map((elem) => {
                  return (
                    <Fragment key={elem._id}>
                      <img
                        src={elem.image}
                        style={{
                          width: "100%",
                          height: "49%",
                          objectFit: "contain",
                        }}
                      />
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ width: "100%", background: "yellow" }}
                      >
                        <Typography variant="string">{elem.title}</Typography>
                      </Box>
                    </Fragment>
                  );
                })}
          </Grid>
          <Grid item flex={1} sx={{ background: "white" }}>
            {products.supplements &&
              products.supplements
                .filter((_, index) => {
                  return index > 5 && index < 8;
                })
                .map((elem) => {
                  return (
                    <Fragment key={elem._id}>
                      <img
                        src={elem.image}
                        style={{
                          width: "100%",
                          height: "49%",
                          objectFit: "contain",
                        }}
                      />
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ width: "100%", background: "yellow" }}
                      >
                        <Typography variant="string">{elem.title}</Typography>
                      </Box>
                    </Fragment>
                  );
                })}
          </Grid>
        </Grid>
      </Grid> */
