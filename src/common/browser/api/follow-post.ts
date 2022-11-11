import {FollowPost} from "src/common/interfaces";
import {waitFor} from "src/common/utils";

const followPost: FollowPost = async function followPost(page, post) {
  if (post.isFollowed) {
    return page;
  }

  await page.click(post.followSelector);
  await waitFor(1500);
  await page.waitForSelector(post.unfollowSelector);
  return page;
};

export {followPost};
