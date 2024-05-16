import { Button, Grid } from "@mui/material";

const BottomSection = ({ wears, navigate }) => {
  const displayItem = (wears) => {
    return (
      wears &&
      wears
        .filter((elem) => {
          return elem.title === "Women's Cycling Shorts";
        })
        .map((elem) => {
          return (
            <Grid
              item
              key={elem._id}
              display={"flex"}
              justifyContent={"center"}
              position={"relative"}
              sx={{ height: { xl: "500px" }, backgroundColor: "white" }}
              gridColumn={2}
            >
              <img
                src={elem.image}
                style={{
                  border: "2px solid white",
                  width: "100%",
                  height: "auto%",
                  objectFit: "contain",
                }}
                onClick={() => {
                  navigate(elem._id);
                }}
              />
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  height: { xs: "20px", xl: "40px" },
                  width: "100%",
                  color: "primary.main",
                  backgroundColor: "primary.sub",
                  fontSize: {
                    xs: "0.3rem",
                    md: "0.6rem",
                    lg: "0.9rem",
                    xxl: "1.1rem",
                  },
                }}
                onClick={() => {
                  navigate(elem._id);
                }}
              >
                {elem.title}
              </Button>
            </Grid>
          );
        })
    );
  };

  return <>{displayItem(wears)}</>;
};

export default BottomSection;
