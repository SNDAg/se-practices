/**
 * Demonstration of SQL Injection using sqlite3 in Node.js
 * Based on the curriculum slides.
 */

const sqlite3 = require('sqlite3').verbose();

// 1. Create and initialize an in-memory database (from Slide 1)
let database = new sqlite3.Database(':memory:');

function initDb(db) {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
  db.run("INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')");
  db.run("INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com')");
  console.log("Database initialized with sample data.");
}

// 2. Run the serialization flow (from Slides 2 & 3)
database.serialize(() => {
  // Initialize tables and insert sample rows
  initDb(database);

  // The malicious user input (from Slide 3)
  let userInput = "Bob' OR '1'='1";

  // Vulnerable Query Construction (using String Interpolation / Template Literals)
  let query = `SELECT * FROM users WHERE name = '${userInput}'`;
  
  console.log(`\nExecuting vulnerable query: ${query}`);

  // Fetching the rows
  database.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error executing query:", err.message);
      return;
    }
    
    console.log("\n--- Query Results ---");
    rows.forEach((row) => {
      console.log(row);
    });
    console.log("----------------------\n");
    
    console.log("EXPLANATION:");
    console.log("The query evaluated to: SELECT * FROM users WHERE name = 'Bob' OR '1'='1'");
    console.log("Because '1'='1' is always true, the OR condition bypassed the name filter");
    console.log("and returned ALL users in the database (Alice AND Bob) instead of just Bob!");
  });
});

// Close database connection
database.close();