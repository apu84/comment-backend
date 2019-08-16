import { GraphQLType } from "graphql";

export interface GraphQLQuery {
  type: GraphQLType;
  description: string;
  args?: any;
  resolve: Function;
}
