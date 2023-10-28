const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, "public")));

/**
 * This middleware will make the server serve the html files
 * without the extension.
 *
 * For example, if you have a file called about.html, you can
 * access it by going to http://localhost:3000/about
 */
app.use((req, res, next) => {
  if (path.extname(req.path).length === 0) {
    const file = path.join(__dirname, "public", `${req.path}.html`);
    express.static(file)(req, res, next);
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
