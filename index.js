import express from "express";
import thesisRoutes from "./routes/thesis.js";

const app = express();

app.use(express.json());

// -------------------------------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server run on ${port}`));

app.get("/", (req, res) => {
  res.send("hello world");
});

// -------------------------------------------------------------------------

app.use("/api/thesis/", thesisRoutes);
