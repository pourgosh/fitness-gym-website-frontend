import { Grid } from "@mui/material";

const PartnersItem = ({ img, alt }) => {
  return (
    <Grid
      item
      height={{ xs: 50, between: 80, lg: 110 }}
      width={{ xs: 85, between: 100, lg: 200 }}
      sx={{ backgroundColor: "primary.main" }}
    >
      <img
        src={img}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Grid>
  );
};

export default PartnersItem;
