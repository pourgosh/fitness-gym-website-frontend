import { Grid } from "@mui/material";
import GoalsText from "./goalsText";
import goalsImg from "../../assets/Images/goalsImg.jpeg";

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
      <Grid container pt={4} flexDirection={"column"}>
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
          <img src={goalsImg} style={{ width: "100%", objectFit: "contain" }} />
        </Grid>
        <Grid item pl={2} pt={1} pr={2} sx={{ textAlign: "center" }}>
          <GoalsText text={text} variant="string" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Goals;
