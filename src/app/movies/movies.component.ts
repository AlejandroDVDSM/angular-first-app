import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

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
    director: 'Bong Joon Ho',
    scriptwriter: 'Han Jin-won',
    imdbRating: 8.5,
    metascoreRating: 96,
    views: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
