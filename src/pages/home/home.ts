import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular'
import { CadastroPage } from '../../pages/cadastro/cadastro'

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // ionic cordova resources --icon
  // https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/
  public searchopen = false;
  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public loadingCtrl: LoadingController) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 4000);

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
      
      this.setFilteredItems();

  });

  }

  onSearchInput(){
    this.searching = true;
  }


  setFilteredItems() {
 
    this.items = this.dataService.filterItems(this.searchTerm);

  }
     
  Cadastrar(){ 
    this.navCtrl.push(CadastroPage.name)
  }
}
