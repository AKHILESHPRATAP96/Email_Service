const express = require("express");
const sendEmail = require("./utils/email");
const app = express();

app.get("/send", async (req, res) => {
  try {
    await sendEmail({
      email: "akhilesh17@gmail.com",
      subject: "testing for integration in app",
      text: "this is the testing mail",
    });
    res.send("hello");
  } catch (err) {
    res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
