import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';
import { genreConst } from 'src/app/utils/dataset';
import { IFilm } from '../model/film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() film: IFilm;
  @Input() favoritFilms: IFilm[];
  @Input() hasFavoriteIcon: boolean;
  isLove: boolean = false;

  convertGenre(item: number, array: number[]) {
    // console.log(`item - ${array.indexOf(item)},arr.length - ${array.length}`);
    return `${genreConst[item - 1]}${
      array.indexOf(item) + 1 === array.length ? '' : ','
    } `;
  }

  getIsLove(): string {
    return !this.isLove
      ? '../../../assets/love.svg'
      : '../../../assets/love-fill.svg';
  }

  toggleLove(filmElement: IFilm): void {
    this.isLove = !this.isLove;
    if (
      this.favoritFilms.length === 0 ||
      !this.favoritFilms.find((el) => el.id === filmElement.id)
    ) {
      this.favoritFilms.push(filmElement);
      localStorage.setItem('0', JSON.stringify(this.favoritFilms));
    } else if (this.favoritFilms.find((el) => el.id === filmElement.id)) {
      const ind = this.favoritFilms.findIndex((el) => el.id === filmElement.id);
      this.favoritFilms.splice(ind, 1);
      const item = localStorage.getItem('0');
      localStorage.setItem(
        '0',
        JSON.stringify(item && JSON.parse(item).splice(ind, 1))
      );
      // this.favoritFilms = this.favoritFilms.filter(
      //   (el) => el.id !== filmElement.id
      // );
    }
    console.log(this.favoritFilms);
  }
}
