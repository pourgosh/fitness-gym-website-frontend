import { Button, Grid } from "@mui/material";

const TopSection = ({ supplements }) => {
  const displayItems = (supplements) => {
    return (
      supplements &&
      supplements
        .filter((_, index) => {
          return index > 6 && index < 10;
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
            >
              <img
                src={elem.image}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  border: "2px solid white",
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

  return <>{displayItems(supplements)}</>;
};

export default TopSection;
