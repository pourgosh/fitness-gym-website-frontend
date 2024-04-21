import { Box, Button } from "@mui/material";

const LeftSection = ({ supplements }) => {
  const displaySupplements = (supplements) => {
    return (
      supplements &&
      supplements
        .filter((_, index) => {
          return index > 2 && index < 7;
        })
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
                border: "2px solid white",
              }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              sx={{
                position: "absolute",
                bottom: 0,
                height: { xs: "20px", xl: "40px" },
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
          </Box>
        ))
    );
  };

  return <>{displaySupplements(supplements)}</>;
};

export default LeftSection;