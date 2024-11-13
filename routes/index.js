var express = require("express");
var router = express.Router();
let API_KEY = "aeaaa9d898f3645fbcb3c6df2b5ca5f7";
const fetch = require("node-fetch");
let movie = {};
router.get(
	"/movies",
	(req, res) => {
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
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
