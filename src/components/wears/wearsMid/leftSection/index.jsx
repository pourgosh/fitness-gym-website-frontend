import { Box, Button } from "@mui/material";

const LeftSection = ({ wears, navigate }) => {
  const singleElement = (wears) => {
    return (
      wears &&
      wears
        .filter((elem) => elem.title.includes("Ventilated Fitness Gloves"))
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
                objectFit: "contain",
                border: "2px solid white",
              }}
              onClick={() => {
                navigate(elem._id);
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
              onClick={() => {
                navigate(elem._id);
              }}
            >
              {elem.title}
            </Button>
          </Box>
        ))
    );
  };

  return <>{singleElement(wears)}</>;
};

export default LeftSection;
