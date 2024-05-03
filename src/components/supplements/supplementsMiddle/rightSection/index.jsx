import { Box, Button } from "@mui/material";

const RightSection = ({ supplements, navigate }) => {
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
            px={1}
          >
            <img
              src={elem.image}
              className="commonFilter"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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

  return <>{esnElement(supplements)}</>;
};

export default RightSection;
