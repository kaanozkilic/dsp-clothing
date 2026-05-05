const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const teamMembers = [
  "Shuvo"
];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; padding: 40px;">
        <h1>DSP Clothing Store</h1>
        <p>End-to-End CI/CD Pipeline Demo</p>

        <h2>Team Members</h2>
        <ul>
          ${teamMembers.map(name => `<li>${name}</li>`).join("")}
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});