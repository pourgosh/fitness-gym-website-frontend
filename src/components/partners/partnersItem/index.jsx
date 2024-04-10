import { Grid } from "@mui/material";

const PartnersItem = ({ img, alt }) => {
  return (
    <Grid item height={50} width={85} sx={{ backgroundColor: "primary.main" }}>
      <img
        src={img}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Grid>
  );
};

export default PartnersItem;
