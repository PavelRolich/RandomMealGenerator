import { Component, Output, OnDestroy, OnInit } from '@angular/core';
import { LoadRecipesService, Recipe } from './load-recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'RandomMealGenerator';
  viewRecipe = false;
  numRecipe: number;
  recipesList: Recipe[] = [
    {
      recipeName:  'Маринованные опята',
      recipeCategory: {
        category: 'Заготовки',
        area: 'Русская',
        tags: 'Соленья, Консервация'
      },
      // tslint:disable-next-line:max-line-length
      recipeIngredients: [
        'Опята: 1 кг',
        'Уксус: 1 столовая ложка',
        'Соль: 2 столовые ложки',
        'Лавровый лист: 3 штуки',
        'Сахар: 2 столовые ложки',
        'Черный перец горошком: 4 штуки',
        'Чеснок: 1 зубчик',
        'Гвоздика: 4 штуки',
        'Душистый перец горошком: 4 штуки'],
      // tslint:disable-next-line:max-line-length
      recipeCooking: 'Промытые опята бросить в кипящую воду и варить на среднем огне 12-15 минут. Слить воду, вымыть кастрюлю, положить в нее вареные грибы и влить литр воды. Довести до кипения, добавить уксус и все специи и варить еще 15 минут. Готовые опята переложить в банку, залить маринадом, в котором они варились, и дать остыть. Убрать в холодильник на сутки, после чего можно будет их есть.',
      recipeImgURL: 'https://img.povar.ru/main/14/1c/ca/b2/marinovannie_opyata_v_masle-126041.jpg'
  }, {
    recipeName: 'Лечо с помидорами',
    recipeCategory: {
      category: 'Заготовки',
      area: 'Венгерская',
      tags: 'Лечо'
    },
    recipeIngredients: [
      'Помидоры: 3 кг',
      'Красный сладкий перец: 1,5 кг',
      'Растительное масло: 200 мл',
      'Сахар: 200 г',
      'Соль: 2 столовые ложки',
      'Уксусная эссенция: 1 чайная ложка'
    ],
    // tslint:disable-next-line:max-line-length
    recipeCooking: 'Помидоры вымойте и пропустите через мясорубку. Полученную массу переложите в большую кастрюлю, поставьте на огонь, доведите до кипения и варите 20 минут. У сладкого перца удалите плодоножки, семена и белые перегородки. Нарежьте перец небольшими квадратиками и выложите в горячую помидорную массу. Добавьте растительное масло, сахар и соль. Варите еще 30 минут. За 2 минуты до готовности влейте в лечо уксусную эссенцию, перемешайте и выключите огонь. Разложите лечо в стерилизованные банки и закатайте крышками. Переверните банки и дайте остыть.',
    recipeImgURL: 'https://img05.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131083953/170907133120/p_O.jpg'
  }, {
    recipeName: 'Клюквенный конфитюр с апельсином',
    recipeCategory: {
      category: 'Заготовки',
      area: 'Европейская',
      tags: 'Веганская еда'
    },
    recipeIngredients: [
      'Клюква: 1 кг',
      'Апельсины: 3 штуки',
      'Тросниковый сахар: 600 г',
      'Палочки корицы: 3 штуки'
    ],
    // tslint:disable-next-line:max-line-length
    recipeCooking: 'Снять цедру с апельсинов и выжать из них сок. У меня получилось примерно 400 мл. Клюкву положить в ковшик и бланшировать 2-3 минуты. Клюкву вместе с корицей и цедрой залить апельсиновым соком. Добавить сахарный песок, аккуратно перемешать и варить минут 10 на сильном огне (Но только следите чтобы ягодки не начинали лопаться!). Затем убавить огонь и варить конфитюр до загустения минут 30. Вынуть палочки корицы, разлить по стерилизованным банкам и хранить в холодильнике.',
    recipeImgURL: 'https://img05.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131085333/171116225804/p_O.jpg'
  }];
  selectedRecipe: Recipe;
  subscription: Subscription;

  constructor(private loadRecipesService: LoadRecipesService) {}

  showRecipe(): void {
    this.viewRecipe = true;
    this.numRecipe = Math.floor(Math.random() * 3);
    while (this.numRecipe > this.recipesList.length - 1) {
      this.numRecipe = Math.floor(Math.random() * 2 + 1);
    }
    this.selectRecipe();
  }

  getRecipes(): void {
    /* this.subscription = this.loadRecipesService.getRecipes().subscribe(result => {
      this.recipesList = result;
      console.log(this.recipesList);
    }); */
  }

  selectRecipe(): void {
    this.selectedRecipe = this.recipesList[this.numRecipe];
  }

  ngOnInit() {
    this.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
