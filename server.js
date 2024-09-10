import express from "express";
const app = express();
const PORT = 8000;
// make post data available in req.body
app.use(express.json());

// creating variable
let fakeDB = [
  {
    id: 1,
    fName: "Dinesh",
    lName: "Budhathoki",
  },

  {
    id: 2,
    fName: "Dinesh",
    lName: "Budhathoki",
  },
];

//get method
app.get("/", (req, res) => {
  //   console.log(req.query);
  //   fakeDB.push(req.query);
  res.json({
    message: "to do get method",
    users: fakeDB,
  });
});

//post method
app.post("/", (req, res) => {
  console.log(req.body);
  fakeDB.push(req.body);
  res.json({
    message: "New user has been added",
  });
});
// put method
app.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "from put");
  res.json({
    message: "to do put method",
  });
});

//delete method
app.delete("/:id", (req, res) => {
  console.log(req.body, "from delete method");
  res.json({
    message: "to do delete method",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
