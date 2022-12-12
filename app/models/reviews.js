const db = require("../../db/connection.js");

exports.selectAllReviews = () => {
  return db
    .query(
      `SELECT owner, title, reviews.review_id, category, review_img_url,
    reviews.created_at, reviews.votes, designer, 
    COUNT(comment_id) AS comment_count FROM reviews
    LEFT JOIN comments ON comments.review_id = reviews.review_id 
    GROUP BY owner, title, reviews.review_id, category, review_img_url,
    reviews.created_at, reviews.votes, designer
    ORDER BY reviews.created_at DESC;`
    )
    .then((result) => result.rows);
};
