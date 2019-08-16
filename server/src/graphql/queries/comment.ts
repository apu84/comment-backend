import { GraphQLID } from "graphql";
import { dummyComments } from "../data/dummy-data";
import { CommentType } from "../types/Comment";
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
