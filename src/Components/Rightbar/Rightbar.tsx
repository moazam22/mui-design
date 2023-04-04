import OnlineFriends from "../OnlineFriends/OnlineFriends";
import LatestConversation from "./LatestConversation";
import LatestImages from "./LatestImages";
import { RghtBar, RghtBarContainer } from "./Styled.Rightbar";

const Rightbar = () => {
  return (
    <RghtBar>
      <RghtBarContainer>
        <OnlineFriends />
        <LatestImages />
        <LatestConversation />
      </RghtBarContainer>
    </RghtBar>
  );
};

export default Rightbar;
