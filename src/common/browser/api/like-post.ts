import {LikePost} from "src/common/interfaces";
import {waitFor} from "src/common/utils";

const likePost: LikePost = async function likePost(page, post) {
  if (post.isLiked) {
    return page;
  }

  await page.click(post.likeSelector);
  await waitFor(2500);
  await page.waitForSelector(post.unlikeSelector);
  return page;
};

export {likePost};
