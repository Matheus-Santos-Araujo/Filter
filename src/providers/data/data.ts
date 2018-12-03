import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  items: any;

  constructor(public http: HttpClient) {
    this.items = [
      {title: 'Felipe'}, 
      {title: 'Carlos'},
      {title: 'Jessica'},
      {title: 'Douglas'},
      {title: 'Mariana'},
      {title: 'Diego'}
  ]
  }

  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
 }
}
