var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
router.get(
	"/movies",
	(req, res) => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=aeaaa9d898f3645fbcb3c6df2b5ca5f7`
		)
			.then((res) => res.json())
			.then((data) => {
				res.json({ movies: data.results });
			});
	},
	[]
);

module.exports = router;
