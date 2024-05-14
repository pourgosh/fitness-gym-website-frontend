import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main style={{ minHeight: "100dvh" }}>
      <Grid
        container
        pt={{ xs: 15, lg: 20, xxl: 25 }}
        flexDirection={"column"}
        gap={20}
      >
        <Grid item flex={1} display={"flex"} justifyContent={"center"}>
          <Typography variant="h1" color={"primary.main"}>
            404 Page Not Found !
          </Typography>
        </Grid>
        <Grid item flex={1} display={"flex"} justifyContent={"center"}>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography
              variant="string"
              color={"primary.main"}
              sx={{
                textDecoration: "underline",
              }}
            >
              return
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default PageNotFound;
