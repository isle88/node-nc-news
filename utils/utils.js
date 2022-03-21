const db = require("../db/connection");

exports.checkArticleId = (article_id) => {
  return db
    .query("SELECT * FROM articles WHERE article_id=$1", [article_id])
    .then(({ rows }) => {
      if (rows.length) {
        return true;
      }
      return false;
    });
};