import { Grid, Typography } from "@mui/material";
const BenefitsHeader = () => {
  return (
    <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography color={"white"} textAlign={"center"} variant="h6">
        Membership
      </Typography>
      <Typography color={"white"} textAlign={"center"} variant="h6">
        Benefits
      </Typography>
    </Grid>
  );
};

export default BenefitsHeader;
