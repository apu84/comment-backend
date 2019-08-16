import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from "graphql";

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
      }
    };
  };
}

export const CommentType = new GraphQLObjectType(new Comment());
