import Post from "./Post";
import { posts } from "../../utils";
import { MainContainer } from "./Styled";

const NewsFeed = () => {
  return (
    <MainContainer>
      {!!posts?.length &&
        posts.map((post, key) => (
          <Post description={post.description} img={post.img} alt={`Post ${key}`} key={key} />
        ))}
    </MainContainer>
  );
};

export default NewsFeed;
