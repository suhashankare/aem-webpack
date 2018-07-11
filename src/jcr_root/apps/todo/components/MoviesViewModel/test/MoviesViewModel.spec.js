"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoviesViewModel_1 = require("../MoviesViewModel");
var MovieDataService_1 = require("../MovieDataService");
var chai_1 = require("chai");
describe('MoviesViewModel', function () {
    var viewModel;
    var movieDataServiceStub;
    beforeEach(function () {
        sinon.stub(MovieDataService_1.movieDataService, 'loadMovies').returns([new MovieDataService_1.Movie('The Matrix', 1998, 5)]);
        movieDataServiceStub = sinon.spy(MovieDataService_1.movieDataService, 'save');
        viewModel = new MoviesViewModel_1.default();
    });
    afterEach(function () {
        sinon.restore(MovieDataService_1.movieDataService.loadMovies);
        sinon.restore(MovieDataService_1.movieDataService.save);
    });
    it('should load movies', function () {
        chai_1.expect(viewModel.movies.length).to.be.equal(1);
    });
    it('should be able to select a movie', function () {
        viewModel.select(viewModel.movies[0]);
        chai_1.expect(viewModel.selectedMovie).to.be.equal(viewModel.movies[0]);
    });
    it('should save rated movie', function () {
        viewModel.select(viewModel.movies[0]);
        viewModel.rate(4);
        chai_1.expect(movieDataServiceStub.called).to.be.true;
    });
});
