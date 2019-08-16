"use strict";
import * as express from "express";
import * as GraphQLHTTP from "express-graphql";
import { schema } from "./graphql/schema";

export class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(
      "/graphql",
      GraphQLHTTP({
        schema: schema,
        graphiql: true
      })
    );
  }
}

export default new App().app;
