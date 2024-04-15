import { Grid } from "@mui/material";
import GoalsText from "./goalsText";
import goalsImg from "../../assets/Images/goalsImg.jpeg";
import "./goals.css";

const Goals = () => {
  const titleP1 = "Achieve more then ";
  const titleP2 = "your limits";

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
  in egestas erat imperdiet sed. Mi in nulla posuere sollicitudin
  aliquam. Aliquet risus feugiat in ante. Amet justo donec enim diam
  vulputate. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae
  auctor eu augue ut lectus arcu bibendum at.`;
  return (
    <section>
      <Grid
        container
        mt={{ xs: 2, sm: 2, md: 3, lg: 6, xl: 8, xxl: 12, xxxl: 10 }}
        flexDirection={"column"}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          pl={1}
          pr={1}
          gap={1}
        >
          <GoalsText text={titleP1} />
          <GoalsText text={titleP2} />
        </Grid>
        <Grid
          container
          item
          flexDirection={{ xs: "column", lg: "row-reverse" }}
        >
          <Grid
            item
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            mt={{ xs: 2, sm: 2, md: 3, xl: 8, xxl: 12, xxxl: 10 }}
          >
            <img className="goalsImg" src={goalsImg} />
          </Grid>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flex={1}
            mt={2}
            pl={{ xs: 10, lg: 7, xl: 14, xxxl: 21 }}
            pr={{ xs: 10, lg: 18, xxl: 20 }}
            sx={{
              textAlign: { xs: "center", lg: "left" },
              maxHeight: { xs: "110px", md: "100px", lg: "100%" },
              overflow: "auto",
              overflowY: "auto",
              textOverflow: "ellipsis",
            }}
          >
            <GoalsText text={text} variant="string" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Goals;
