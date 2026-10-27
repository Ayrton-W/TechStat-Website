const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to your existing MySQL server
const db = mysql.createPool({
  host: "127.0.0.1",      // your MySQL server host
  user: "root",           // your MySQL username
  password: "123321", // your MySQL password
  database: "techstat_db"    // your database name
});

// Login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM admins WHERE username = ?", [username]);

    if (rows.length === 0) {
      return res.json({ success: false });
    }

    const user = rows[0];

    // Compare entered password with stored hash
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (isMatch) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

app.listen(3306, () => console.log("Server running on http://127.0.0.1:3306"));
