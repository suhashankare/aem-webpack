"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Movie = /** @class */ (function () {
    function Movie(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    return Movie;
}());
exports.Movie = Movie;
var MovieDataService = /** @class */ (function () {
    function MovieDataService() {
    }
    MovieDataService.prototype.loadMovies = function () {
        var movies = [];
        $.getJSON('/movies').then(function (data) {
            data.forEach(function (movie) { return movies.push(new Movie(movie.title, movie.year, movie.rating)); });
        });
        return movies;
    };
    MovieDataService.prototype.save = function (movie) {
        return $.post('/movies', JSON.stringify(movie));
    };
    return MovieDataService;
}());
exports.movieDataService = new MovieDataService();
