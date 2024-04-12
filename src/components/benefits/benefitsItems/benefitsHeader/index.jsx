import { Grid, Typography } from "@mui/material";
const BenefitsHeader = () => {
  return (
    <Grid
      item
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      pb={2}
    >
      <Typography
        color={"primary.main"}
        textAlign={"center"}
        variant="h1"
        sx={{ lineHeight: { xs: "3rem", xxl: "5rem" } }}
      >
        Membership
      </Typography>
      <Typography color={"primary.main"} textAlign={"center"} variant="h1">
        Benefits
      </Typography>
    </Grid>
  );
};

export default BenefitsHeader;
