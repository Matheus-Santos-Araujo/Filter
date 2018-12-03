import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Pessoa } from '../../models/pessoa'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})

export class CadastroPage {

  public pessoa : Pessoa;
  loadForm : FormGroup;
  nome: AbstractControl;
  email: AbstractControl;
  telefone: AbstractControl;


  constructor(public navCtrl: NavController, public navParams: NavParams, public validations_form: Validators, public formBuilder: FormBuilder) {
  
    this.formBuilder = formBuilder;

    this.loadForm = this.formBuilder.group({
     'nome' : ['', Validators.required],
     'email' : ['', [Validators.minLength(10), Validators.required]],
     'telefone' : ['', [Validators.minLength(8), Validators.required]]
    });

  } 

  ionViewDidLoad() {
  }
}
