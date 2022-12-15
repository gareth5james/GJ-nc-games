const fs = require("fs/promises");

exports.getApi = (request, response, next) => {
  //   response.status(200).send({
  //     endPoints: {
  //       "GET /api": {
  //         description:
  //           "serves up a json representation of all the available endpoints of the api",
  //       },
  //       "GET /api/categories": {
  //         description: "serves an array of all categories",
  //         queries: [],
  //         exampleResponse: {
  //           categories: [
  //             {
  //               description:
  //                 "Players attempt to uncover each other's hidden role",
  //               slug: "Social deduction",
  //             },
  //           ],
  //         },
  //       },
  //       "GET /api/reviews": {
  //         description: "serves an array of all reviews",
  //         queries: ["category", "sort_by", "order"],
  //         exampleResponse: {
  //           review: [
  //             {
  //               title: "One Night Ultimate Werewolf",
  //               designer: "Akihisa Okui",
  //               owner: "happyamy2016",
  //               review_img_url:
  //                 "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //               category: "hidden-roles",
  //               created_at: 1610964101251,
  //               votes: 5,
  //             },
  //           ],
  //         },
  //       },
  //       "GET /api/reviews/:review_id": {
  //         description: "serves a single review by the id given",
  //         queries: [],
  //         exampleResponse: {
  //           review: {
  //             title: "One Night Ultimate Werewolf",
  //             designer: "Akihisa Okui",
  //             owner: "happyamy2016",
  //             review_img_url:
  //               "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //             category: "hidden-roles",
  //             created_at: 1610964101251,
  //             votes: 5,
  //           },
  //         },
  //       },
  //       "PATCH /api/reviews/:review_id": {
  //         description:
  //           "amend the votes of a single review by the id given, with an input object",
  //         queries: [],
  //         "input object": {
  //           inc_votes:
  //             "newVote(a positive/negative integer to increment/decrement the number of votes)",
  //         },
  //         exampleResponse: {
  //           review: {
  //             title: "One Night Ultimate Werewolf",
  //             designer: "Akihisa Okui",
  //             owner: "happyamy2016",
  //             review_img_url:
  //               "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //             category: "hidden-roles",
  //             created_at: 1610964101251,
  //             votes: "the new total, as amended by the input object",
  //           },
  //         },
  //       },
  //       "GET /api/reviews/:review_id/comments": {
  //         description: "serves an array of all comments on the given review",
  //         queries: [],
  //         exampleResponse: {
  //           comments: [
  //             {
  //               votes: 10,
  //               "created at": 1610964101251,
  //               author: "roalddahl",
  //               body: "zaphod's just this guy, you know?",
  //               review_id: 1500,
  //             },
  //           ],
  //         },
  //       },
  //       "POST /api/reviews/:review_id/comments": {
  //         description: "enters a new comment against the given review id",
  //         queries: [],
  //         "input object": {
  //           username: "lewispanda",
  //           body: "loved this review!",
  //         },
  //         exampleResponse: {
  //           username: "lewispanda",
  //           body: "loved this review!",
  //           review_id: "1234",
  //         },
  //       },
  //       "DELETE /api/comments/:comment_id": {
  //         description: "deletes a comment from the database by the given id",
  //         queries: [],
  //         exampleResponse: {},
  //       },
  //       "GET /api/users": {
  //         description: "provides an array of userNames from the database",
  //         queries: [],
  //         exampleResponse: [
  //           {
  //             username: "lewispanda",
  //             name: "lewis",
  //             avatar_url: "https://http.cat/418",
  //           },
  //         ],
  //       },
  //     },
  //   });

  fs.readFile("../../endpoints.json", "utf-8")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
