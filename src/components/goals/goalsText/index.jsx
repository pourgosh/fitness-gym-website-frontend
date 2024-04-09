import { Grid, Typography } from "@mui/material";

const GoalsText = ({ text, variant = "h1", pl }) => {
  return (
    <Grid item pt={2}>
      <Typography variant={variant} pl={pl} color={"primary.main"}>
        {text}
      </Typography>
    </Grid>
  );
};

export default GoalsText;
