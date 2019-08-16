import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CommentQuery } from "./queries/comment";

class Query {
  public name = "CommentsRootQuery";
  public fields = function() {
    return {
      comment: new CommentQuery()
    };
  };
}

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType(new Query())
});