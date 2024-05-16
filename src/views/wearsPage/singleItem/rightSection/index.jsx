import { Grid, Typography } from "@mui/material";

const RightSectionTop = ({ wears }) => {
  const displayItemInfo = (wears) => {
    return (
      <>
        <Grid item flex={1} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h1"
            color={"primary.main"}
            sx={{
              lineHeight: 1.5,
            }}
          >
            {wears && wears.title}
          </Typography>
        </Grid>
        <Grid item display={"flex"} alignItems={"flex-start"} flex={{ xs: 1 }}>
          <Typography variant="string" color={"primary.main"}>
            {wears && wears.description}
          </Typography>
        </Grid>
      </>
    );
  };

  return <>{displayItemInfo(wears)}</>;
};

export default RightSectionTop;
