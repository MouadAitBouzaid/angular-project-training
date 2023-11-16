import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
 recipes : Recipe[] = [
    new Recipe ('a test recipe', 'this is a simply test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
   new Recipe ('a test recipe', 'this is a simply test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
   new Recipe ('a test recipe', 'this is a simply test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')

 ];


  constructor() {
  }

  ngOnInit(){

  }
}
