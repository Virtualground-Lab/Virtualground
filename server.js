const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

//Serve website
app.use(express.static(path.join(__dirname, ".", "out")));

//Client side routing fix on page refresh or direct browsing to non-root directory
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.get("/marketplace", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "marketplace.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "blog.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/blog-articles", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "out", "blog-articles.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("/blog-reach-view", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "out", "blog-reach-view.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("/blog-search", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "blog-search.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/builder", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "builder.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/careers", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "careers.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/career-opening", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "out", "career-opening.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "faq.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/policy", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "policy.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "terms.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/help-center", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "help-center.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/help-center-article", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "out", "help-center-article.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("/contact-page", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "contact-page.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "404.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/not-found", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "out", "not-found.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/not-found-cover", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "out", "not-found-cover.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});
//Start the server
app.listen(port, () => console.log(`Virtualground listening on port ${port}!`));
