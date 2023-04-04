import OnlineFriends from "../OnlineFriends/OnlineFriends";
import LatestConversation from "./LatestConversation";
import LatestImages from "./LatestImages";
import { RghtBar, RghtBarContainer } from "./Styled.Rightbar";

const Rightbar = () => {
  return (
    <RghtBar>
      <RghtBarContainer sx={{ marginLeft: { lg: "3em" } }}>
        <OnlineFriends />
        <LatestImages />
        <LatestConversation />
      </RghtBarContainer>
    </RghtBar>
  );
};

export default Rightbar;
