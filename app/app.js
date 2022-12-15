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
  deleteComment,
} = require("./controllers/comments.js");

const { getApi } = require("./controllers/api.js");

const { getUsers } = require("./controllers/users.js");

const app = express();

app.use(express.json());

app.get("/api", getApi);

app.get("/api/categories", getCategories);

app.get("/api/reviews", getReviews);
app.get("/api/reviews/:review_id", getReviewById);
app.patch("/api/reviews/:review_id", patchReviewVotesById);

app.get("/api/reviews/:review_id/comments", getCommentsByReviewId);
app.post("/api/reviews/:review_id/comments", postNewComment);
app.delete("/api/comments/:comment_id", deleteComment);

app.get("/api/users", getUsers);

app.all("*", badPath);

app.use(customError);
app.use(sqlError);

module.exports = app;
