import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    name: 'Parasite',
    release: '2019',
    runningTime: '2h 12min',
    director: 'Bong Joon Ho',
    scriptwriter: 'Han Jin-won',
    imdbRating: 8.5,
    metascoreRating: 96,
    views: 0
  };

  movies = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

  selectedMovie?: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
