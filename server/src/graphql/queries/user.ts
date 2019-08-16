import { GraphQLID } from "graphql";
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
    return dummyUsers.filter(user => user.id == args.id).pop();
  };
}
