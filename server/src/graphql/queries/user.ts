import { GraphQLID, GraphQLList } from "graphql";
import { dummyUsers } from "../data/dummy-data";
import { UserType } from "../types/user";
import { GraphQLQuery } from "./abstract-query";

export class UserQuery implements GraphQLQuery {
  public type = UserType;
  public description = "Lists an user";
  public args = {
    id: {
      type: GraphQLID
    }
  };
  public resolve = function(parent: any, args: any) {
    return getUserById(args.id);
  };
}

export class UsersQuery implements GraphQLQuery {
  public type = new GraphQLList(UserType);
  public description = "Lists all users";
  public resolve = function(parent: any, args: any) {
    return dummyUsers;
  };
}

export function getUserById(id: string) {
  return dummyUsers.filter(user => user.id == id).pop();
}
