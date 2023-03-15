import { Component, OnInit } from '@angular/core';
import store from '../data.json';
import { IFilm } from './components/model/film';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  films: IFilm[];
  favoritFilms: IFilm[] = [];
  constructor() {
    console.log(store);
    this.films = store;
  }
  ngOnInit(): void {
    const item = localStorage.getItem('0');

    if (item) {
      this.favoritFilms = [...this.favoritFilms, ...JSON.parse(item)];
    }
    console.log(this.favoritFilms);
  }
}
