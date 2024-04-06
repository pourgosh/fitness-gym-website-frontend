import { Grid } from "@mui/material";
import GoalsText from "./goalsText";
import testImg from "../../assets/Images/5512f1de154d50572a27785e839fccc6.jpg";

const Goals = () => {
  const title = "Achieve more then your limits";

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
  in egestas erat imperdiet sed. Mi in nulla posuere sollicitudin
  aliquam. Aliquet risus feugiat in ante. Amet justo donec enim diam
  vulputate. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae
  auctor eu augue ut lectus arcu bibendum at.`;
  return (
    <section>
      <Grid container pt={2} flexDirection={"column"}>
        <Grid item display={"flex"} flex={1} justifyContent={"center"}>
          <GoalsText text={title} />
        </Grid>
        <Grid item flex={1} display={"flex"} justifyContent={"center"} pt={2}>
          <img src={testImg} style={{ width: "55%", objectFit: "contain" }} />
        </Grid>
        <Grid item pt={2} sx={{ textAlign: "center" }}>
          <GoalsText text={text} variant="subtitle" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Goals;
