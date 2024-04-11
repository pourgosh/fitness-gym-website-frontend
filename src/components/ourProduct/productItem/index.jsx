import { Grid, Button } from "@mui/material";

const ProductItem = ({ img, text = "Wears", alt = "Wears Image" }) => {
  return (
    <Grid
      item
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      flex={1}
    >
      <img src={img} alt={alt} className={"productLink"} />
      <Button
        variant="contained"
        sx={{
          fontFamily: "textFont",
          fontSize: "20px",
          border: "5px solid primary.sub",
          position: "absolute",
          padding: "10px",
          bottom: 0,
          width: { xs: "100%", lg: "30%" },
        }}
      >
        {text}
      </Button>
    </Grid>
  );
};

export default ProductItem;
