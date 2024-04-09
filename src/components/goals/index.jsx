import { Grid } from "@mui/material";
import GoalsText from "./goalsText";
import testImg from "../../assets/Images/5512f1de154d50572a27785e839fccc6.jpg";

const Goals = () => {
  const titleP1 = "Achieve more then your";
  const titleP2 = "limits";

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
  in egestas erat imperdiet sed. Mi in nulla posuere sollicitudin
  aliquam. Aliquet risus feugiat in ante. Amet justo donec enim diam
  vulputate. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae
  auctor eu augue ut lectus arcu bibendum at.`;
  return (
    <section>
      <Grid container pt={2} flexDirection={"column"}>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          alignItems={"center"}
          pl={1}
          pr={1}
        >
          <GoalsText text={titleP1} />
          <GoalsText text={titleP2} />
        </Grid>
        <Grid item flex={1} display={"flex"} justifyContent={"center"} pt={2}>
          <img src={testImg} style={{ width: "55%", objectFit: "contain" }} />
        </Grid>
        <Grid item pl={2} pr={2} sx={{ textAlign: "center" }}>
          <GoalsText text={text} variant="string" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Goals;
