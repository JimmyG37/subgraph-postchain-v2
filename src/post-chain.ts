import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  PostChain,
  CommentLiked as CommentLikedEvent,
  PostCreated as PostCreatedEvent,
  RepliedToPost as RepliedToPostEvent,
  UserTipped as UserTippedEvent,
} from "../generated/PostChain/PostChain";
import { Post, Comment, Like, Tipped } from "../generated/schema";

export function handleCommentLiked(event: CommentLikedEvent): void {
  let like = Like.load(
    getIdFromEventParams(event.params.postId, event.params.user)
  );

  if (!like) {
    like = new Like(
      getIdFromEventParams(event.params.postId, event.params.user)
    );
  }

  like.user = event.params.user;
  like.postId = event.params.postId;
  like.commentId = event.params.commentId;

  like.save();
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let post = Post.load(
    getIdFromEventParams(event.params.postId, event.params.creator)
  );

  if (!post) {
    post = new Post(
      getIdFromEventParams(event.params.postId, event.params.creator)
    );
  }

  post.creator = event.params.creator;
  post.postId = event.params.postId;
  post.deadline = event.params.deadline;

  post.save();
}

export function handleRepliedToPost(event: RepliedToPostEvent): void {
  let comment = Comment.load(
    getIdFromEventParams(event.params.postId, event.params.commenter)
  );

  if (!comment) {
    comment = new Comment(
      getIdFromEventParams(event.params.postId, event.params.commenter)
    );
  }

  comment.commenter = event.params.commenter;
  comment.postId = event.params.postId;
  comment.commentId = event.params.commentId;

  comment.save();
}

export function handleUserTipped(event: UserTippedEvent): void {
  let tipped = Tipped.load(
    getIdFromEventParams(event.params.tip, event.params.tipper)
  );

  if (!tipped) {
    tipped = Tipped.load(
      getIdFromEventParams(event.params.tip, event.params.tipper)
    );
  }
  tipped!.tipper = event.params.tipper;
  tipped!.user = event.params.user;
  tipped!.tip = event.params.tip;

  tipped!.save();
}

function getIdFromEventParams(postId: BigInt, userAddress: Address): string {
  return postId.toHexString() + userAddress.toHexString();
}
