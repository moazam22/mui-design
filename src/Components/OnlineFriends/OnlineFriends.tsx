import { AvatarGroup, Avatar, Typography, Box } from "@mui/material";
const OnlineFriends = () => {
  return (
    <Box alignItems="left" mt={4}>
      <Typography variant="h6" fontWeight={100} sx={{ opacity: "0.5" }}>
        Online Friends
      </Typography>
      <AvatarGroup max={7} sx={{ marginY: "5px", justifyContent: "flex-end" }}>
        <Avatar alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/8.jpg" />
      </AvatarGroup>
    </Box>
  );
};

export default OnlineFriends;
