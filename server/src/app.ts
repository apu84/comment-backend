"use strict";
import * as express from "express";

export class App {
  public app: express.Express;
  constructor() {
    this.app = express();
  }
}

export default new App().app;
