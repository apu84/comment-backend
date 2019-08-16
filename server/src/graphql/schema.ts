import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CommentQuery, CommentsQuery } from "./queries/comment";
import { UserQuery, UsersQuery } from "./queries/user";

class Query {
  public name = "CommentsRootQuery";
  public fields = function() {
    return {
      comment: new CommentQuery(),
      comments: new CommentsQuery(),
      user: new UserQuery(),
      users: new UsersQuery()
    };
  };
}

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType(new Query())
});
