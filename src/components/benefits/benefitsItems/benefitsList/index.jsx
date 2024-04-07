import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

const BenfitsList = ({ label = "Free Classes" }) => {
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <StarIcon fontSize="small" sx={{ color: "white" }} />
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            color: "white",
            variant: "caption",
            lineHeight: "1",
          }}
        />
      </ListItem>
    </>
  );
};

export default BenfitsList;
