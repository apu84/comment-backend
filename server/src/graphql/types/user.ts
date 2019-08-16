import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList
} from "graphql";
import { getCommentsByUserId } from "../queries/comment";
import { CommentType } from "./comment";

export class User {
  public name: string = "User";
  public description: string = "This represents a user";
  public fields = function(): any {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      username: {
        type: GraphQLString
      },
      fullName: {
        type: GraphQLString
      },
      active: {
        type: GraphQLBoolean
      },
      comments: {
        type: new GraphQLList(CommentType),
        resolve: (parent: any) => getCommentsByUserId(parent.id)
      }
    };
  };
}

export const UserType = new GraphQLObjectType(new User());
