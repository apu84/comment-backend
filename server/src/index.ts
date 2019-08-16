"use strict";

import app from "./app";

const port = 3005;

app.listen(port, () =>
  console.log(`Comments service is running on port ${port}`)
);
