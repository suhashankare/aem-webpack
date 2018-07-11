import * as $ from 'jquery';
import { expect } from 'chai';
import {movieDataService, Movie} from "../MovieDataService";



describe('movieDataService', () => {
    const expectedMovies = [{ title: 'The Matrix', year: 1998, rating: 5 }];

    describe('loadMovies', () => {
        it('should return movies from api', () => {

            expect(movieDataService).to.be.equal(0);

        });
    });

});