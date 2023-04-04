import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { itemData } from "../../utils";

const LatestImages = () => {
  return (
    <Box my="2em">
      <Typography variant="h6" fontWeight={100} sx={{ opacity: "0.5" }}>
        Latest Images
      </Typography>
      <ImageList sx={{ marginY: "0.5em" }} cols={3} rowHeight={150} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default LatestImages;
