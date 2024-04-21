import { Button, Grid } from "@mui/material";

const BottomSection = ({ supplements }) => {
  const displayItem = (supplements) => {
    console.log(supplements);
    return (
      supplements &&
      supplements
        .filter((elem) => {
          return elem.title === "Hemp Protein Powder";
        })
        .map((elem) => {
          return (
            <Grid
              item
              key={elem._id}
              display={"flex"}
              justifyContent={"center"}
              position={"relative"}
              sx={{ background: "red" }}
              gridColumn={2}
            >
              <img
                src={elem.image}
                style={{
                  border: "2px solid white",
                  width: "100%",
                  height: "auto%",
                  objectFit: "cover",
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
              >
                {elem.title}
              </Button>
            </Grid>
          );
        })
    );
  };
  return <>{displayItem(supplements)}</>;
};

export default BottomSection;