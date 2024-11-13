var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
let movie = {};
router.get(
	"/movies",
	(req, res) => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				res.json({ movies: data.results });
			})
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	},
	[]
);

module.exports = router;
