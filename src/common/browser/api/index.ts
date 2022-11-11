import {authenticate} from "./authenticate";
import {getFollowing} from "./get-following";
import {getSaved} from "./get-saved";
import {findPosts} from "./find-posts";
import {commentPost} from "./comment-post";
import {likePost} from "./like-post";
import {followPost} from "./follow-post";
import {getUserInfo} from "./get-user-info";
import {unfollowUser} from "./unfollow-user";

export {
  getUserInfo,
  getFollowing,
  getSaved,
  findPosts,
  commentPost,
  followPost,
  likePost,
  unfollowUser,
  authenticate,
};
