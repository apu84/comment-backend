import { GraphQLID, GraphQLList } from "graphql";
import { dummyComments } from "../data/dummy-data";
import { CommentType } from "../types/comment";
import { GraphQLQuery } from "./abstract-query";

export class CommentQuery implements GraphQLQuery {
  public type = CommentType;
  public description = "Lists a comment";
  public args = {
    id: {
      type: GraphQLID
    }
  };
  public resolve = function(parent: any, args: any) {
    return dummyComments.filter(comment => comment.id == args.id).pop();
  };
}

export class CommentsQuery implements GraphQLQuery {
  public type = new GraphQLList(CommentType);
  public description = "Lists all comments";
  public resolve = function(parent: any, args: any) {
    return dummyComments;
  };
}

export function getCommentsByUserId(id: string) {
  return dummyComments.filter(comment => comment.userId == id);
}
