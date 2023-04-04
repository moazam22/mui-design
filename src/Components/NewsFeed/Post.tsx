import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import { FC } from "react";
import { StyledCard } from "./Styled";

interface Props {
  description: string;
  img: string;
  alt: string;
}

const Post: FC<Props> = ({ img, alt, description }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="20%" image={img} alt={alt} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default Post;
