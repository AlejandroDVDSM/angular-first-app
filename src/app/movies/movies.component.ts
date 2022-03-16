import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  selectedMovie?: Movie;

  movies: Movie[] = [];

  constructor(private movieService: MovieService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    this.messageService.add(`MoviesComponent: Selected movie id=${movie.id}`);
  }
  
  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
}
