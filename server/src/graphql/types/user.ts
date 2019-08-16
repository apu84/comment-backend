import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean
} from "graphql";

export class User {
  public name: string = "User";
  public description: string = "This represents a user";
  public fields = function() {
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
      }
    };
  };
}

export const UserType = new GraphQLObjectType(new User());
