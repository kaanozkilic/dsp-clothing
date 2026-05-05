const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    <html>
      <body style="font-family: Arial; padding: 40px;">
        <h1>DSP Clothing Store</h1>

        <h2>Team Members</h2>
        <ul>
          <li>Shuvo</li>
        </ul>
      </body>
    </html>,
  );
});
