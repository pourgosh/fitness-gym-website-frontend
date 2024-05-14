import { Grid, Typography } from "@mui/material";

const RightSectionTop = ({ supplements }) => {
  const displayItemInfo = (supplements) => {
    return (
      <>
        <Grid item flex={1} display={"flex"} alignItems={"center"}>
          <Typography variant="h1" color={"primary.main"}>
            {supplements && supplements.title}
          </Typography>
        </Grid>
        <Grid item display={"flex"} alignItems={"flex-start"} flex={1} pt={3}>
          <Typography variant="string" color={"primary.main"}>
            {supplements && supplements.description}
          </Typography>
        </Grid>
      </>
    );
  };

  return <>{displayItemInfo(supplements)}</>;
};

export default RightSectionTop;
