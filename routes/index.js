var express = require("express");
var router = express.Router();
let API_KEY = "process.env.API_KEY";
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
