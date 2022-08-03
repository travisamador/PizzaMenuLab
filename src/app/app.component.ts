import { Component, ɵisListLikeIterable } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  greeting: string = "Welcome to Chirpus Pizza!";
  itemParts: string[] = ["Name", "Category", "Price"];
  menu: MenuItem[] = [
    {
      name: "Pepperoni Pizza",
      category: "Pizza",
      price: 9.99
    },
    {
      name: "Stuffed-Crust Pizza",
      category: "Pizza",
      price: 10.99
    },
    {
      name: "Custom Pizza",
      category: "Pizza",
      price: 12.99
    },
    {
      name: "Garlic Breadsticks",
      category: "Sides",
      price: 3.99
    },
    {
      name: "Bosco Sticks",
      category: "Sides",
      price: 4.99
    },
    {
      name: "Salad",
      category: "Sides",
      price: 2.50
    },
    {
      name: "Chocolate Chip Cookie",
      category: "Dessert",
      price: 0.99
    },
    {
      name: "Magic Brownie",
      category: "Dessert",
      price: 1.25
    },
    {
      name: "Pepsi",
      category: "Drinks",
      price: 1.20
    },
    {
      name: "Mountain Dew",
      category: "Drinks",
      price: 1.20
    },
    {
      name: "Dr. Pepper",
      category: "Drinks",
      price: 1.20
    }
  ]

  getCategories():string[]{
 let categories: string[] = [];
 this.menu.forEach(i => {
  if(categories.indexOf(i.category) == -1)
  {
    categories.push(i.category)
  }});
  return categories;
}

  getByCategory(Cat:string):MenuItem[]
  {
    let list: MenuItem[] = [];
    this.menu.forEach(i=>{
      if(i.category == Cat)
      {
        list.push(i);
      }});
      return list;
  }
}
