import { Grid } from "@mui/material";
import GoalsText from "./goalsText";
import testImg from "../../assets/Images/5512f1de154d50572a27785e839fccc6.jpg";

const Goals = () => {
  const title1 = "Achieve more";
  const title2 = "then your limits";
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
  in egestas erat imperdiet sed. Mi in nulla posuere sollicitudin
  aliquam. Aliquet risus feugiat in ante. Amet justo donec enim diam
  vulputate. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae
  auctor eu augue ut lectus arcu bibendum at.`;
  return (
    <section>
      <Grid container pt={2}>
        <Grid container item flex={2} pl={2} pr={1} flexDirection={"column"}>
          <GoalsText text={title1} />
          <GoalsText text={title2} pl={5} />
          <GoalsText text={text} variant={"subtitle"} />
        </Grid>
        <Grid container item flex={1} pt={2}>
          <img src={testImg} style={{ width: "100%", objectFit: "contain" }} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Goals;
