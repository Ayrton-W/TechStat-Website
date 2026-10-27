const mysql = require("mysql2");
const express = require("express");

// Create a connection to your MySQL Workbench database
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // or 127.0.0.1
  user: process.env.DB_USER,           // your MySQL username
  database: process.env.DB_NAME, // your MySQL password
  password: process.env.DB_PASSWORD,
});

module.exports = pool.promise

