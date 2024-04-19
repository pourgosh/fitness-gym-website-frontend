import { Box, Button } from "@mui/material";

const RightSection = ({ supplements }) => {
  const esnElement = (supplements) => {
    return (
      supplements &&
      supplements
        .filter((elem) => elem.title.includes("Crank"))
        .map((elem) => (
          <Box
            key={elem._id}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <img
              src={elem.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: { xs: "20px", xl: "40px" },
                color: "primary.main",
                border: "2px solid primary.main",
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
          </Box>
        ))
    );
  };

  return <>{esnElement(supplements)}</>;
};

export default RightSection;
