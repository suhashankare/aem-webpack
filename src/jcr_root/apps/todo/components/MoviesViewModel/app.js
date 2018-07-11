"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoviesViewModel_1 = require("./MoviesViewModel");
new MoviesViewModel_1.default().movies.forEach(function (movie) { return console.log(movie.title); });
