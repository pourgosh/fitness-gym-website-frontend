import { Grid, Typography } from "@mui/material";

const GoalsText = ({ text, variant = "h6", pl }) => {
  return (
    <Grid item>
      <Typography variant={variant} pl={pl} color={"white"}>
        {text}
      </Typography>
    </Grid>
  );
};

export default GoalsText;
