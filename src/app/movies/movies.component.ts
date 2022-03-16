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
  
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

  add(name: string, release: string, runningTime: string, director: string, scriptwriter: string, imdbRatingString: string, metascoreRatingString: string, viewsString: string): void {
    name = name.trim();
    release = release.trim();
    runningTime = runningTime.trim();
    director = director.trim();
    scriptwriter = scriptwriter.trim();

    var imdbRating: number = parseInt(imdbRatingString);
    var metascoreRating: number  = parseInt(imdbRatingString);
    var views: number = parseInt(imdbRatingString);

    if (!name || !release || !runningTime || !director || !scriptwriter || !imdbRating || !metascoreRating || !views) { return; }
    this.movieService.addMovie({ name, release, runningTime, director, scriptwriter, imdbRating, metascoreRating, views } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie.id).subscribe();
  }  
}
