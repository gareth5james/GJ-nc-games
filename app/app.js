const express = require("express");
const { badPath, sqlError, customError } = require("./controllers/errors.js");
const { getCategories } = require("./controllers/categories.js");

const {
  getReviews,
  getReviewById,
  patchReviewVotesById,
} = require("./controllers/reviews.js");

const {
  getCommentsByReviewId,
  postNewComment,
} = require("./controllers/comments.js");

const { getUsers } = require("./controllers/users.js");

const app = express();

app.use(express.json());

app.get("/api/categories", getCategories);

app.get("/api/reviews", getReviews);
app.get("/api/reviews/:review_id", getReviewById);

app.get("/api/reviews/:review_id/comments", getCommentsByReviewId);
app.post("/api/reviews/:review_id/comments", postNewComment);

app.get("/api/users", getUsers);

app.all("*", badPath);

app.use(customError);
app.use(sqlError);

module.exports = app;
