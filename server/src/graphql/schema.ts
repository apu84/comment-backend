import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CommentQuery } from "./queries/comment";
import { UserQuery } from "./queries/user";

class Query {
  public name = "CommentsRootQuery";
  public fields = function() {
    return {
      comment: new CommentQuery(),
      user: new UserQuery()
    };
  };
}

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType(new Query())
});
