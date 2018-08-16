const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/message_controller");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.post("/api/messages", mc.create);
app.delete("/api/messages/:id", mc.delete);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
