import { Grid, Typography } from "@mui/material";

const RightSectionTop = ({ supplements, numID }) => {
  const displayItemInfo = (supplements, numID) => {
    return (
      <>
        <Grid item flex={1} display={"flex"} alignItems={"center"}>
          <Typography variant="h1" color={"primary.main"}>
            {supplements &&
              supplements.map((elem) => {
                if (elem._id === numID) {
                  return elem.title;
                }
              })}
          </Typography>
        </Grid>
        <Grid item display={"flex"} alignItems={"flex-start"} flex={1} pt={3}>
          <Typography variant="string" color={"primary.main"}>
            {supplements &&
              supplements.map((elem) => {
                if (elem._id === numID) {
                  return elem.description;
                }
              })}
          </Typography>
        </Grid>
      </>
    );
  };

  return <>{displayItemInfo(supplements, numID)}</>;
};

export default RightSectionTop;
