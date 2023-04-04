import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { StyledAddPost } from "./StyledAddPost";
import { UserBox } from "../Navbar/Styled.Navbar";
import DP from "../../Images/joey.jpeg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { DateRange } from "@mui/icons-material";

const AddPost = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleModal = (value: boolean) => setOpenModal(value);
  return (
    <>
      <Tooltip
        title="New Post"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: 30 } }}
        onClick={() => toggleModal(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledAddPost
        open={openModal}
        onClose={() => toggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={280}
          width={500}
          bgcolor="background.default"
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" textAlign="center" fontWeight={600}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Joey Tribiani"
              sx={{
                height: 40,
                width: 40,
                objectFit: "cover",
                cursor: "pointer",
              }}
              src={DP}
            />
            <Typography fontWeight="500">Joey</Typography>
          </UserBox>
          <TextField
            sx={{ marginY: 2 }}
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledAddPost>
    </>
  );
};

export default AddPost;
