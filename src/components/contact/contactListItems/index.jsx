import { Typography, ListItem, ListItemIcon } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactListItems = () => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <EmailIcon sx={{ color: "white" }} />
          <Typography
            variant="list"
            color={"primary.main"}
            sx={{ paddingLeft: "5px" }}
          >
            info@mutent.com
          </Typography>
        </ListItemIcon>
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <PhoneIcon sx={{ color: "white" }} />
          <Typography
            variant="list"
            color={"primary.main"}
            sx={{ paddingLeft: "5px" }}
          >
            0049 177 728 0 392
          </Typography>
        </ListItemIcon>
      </ListItem>

      <ListItem sx={{ width: "100%" }}>
        <ListItemIcon>
          <LocationOnIcon sx={{ color: "white" }} />
          <Typography
            variant="list"
            color={"primary.main"}
            sx={{ paddingLeft: "5px", width: "120px" }}
          >
            Oliviastr 18, 28399 Bremen, Germany
          </Typography>
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default ContactListItems;
