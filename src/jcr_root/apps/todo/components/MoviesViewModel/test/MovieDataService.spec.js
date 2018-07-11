"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MovieDataService_1 = require("../MovieDataService");
describe('movieDataService', function () {
    var expectedMovies = [{ title: 'The Matrix', year: 1998, rating: 5 }];
    describe('loadMovies', function () {
        it('should return movies from api', function () {
            chai_1.expect(MovieDataService_1.movieDataService).to.be.equal(0);
        });
    });
});
