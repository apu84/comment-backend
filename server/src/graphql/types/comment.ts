import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from "graphql";
import { getUserById } from "../queries/user";
import { UserType } from "./user";

export class Comment {
  public name: string = "Comment";
  public description: string = "This represents a comment";
  public fields = function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      content: {
        type: GraphQLString
      },
      creationDate: {
        type: GraphQLString
      },
      lastModifiedDate: {
        type: GraphQLString
      },
      user: {
        type: UserType,
        resolve: (parent: any) => getUserById(parent.userId)
      }
    };
  };
}

export const CommentType = new GraphQLObjectType(new Comment());
