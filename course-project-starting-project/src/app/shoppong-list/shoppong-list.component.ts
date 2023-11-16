import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shoppong-list',
  templateUrl: './shoppong-list.component.html',
  styleUrl: './shoppong-list.component.css'
})
export class ShoppongListComponent {
  ingredients : Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('Milk', 1),
    new Ingredient('suger', 2),
  ];


  constructor() {
  }

  ngOnInit(){

  }

}
