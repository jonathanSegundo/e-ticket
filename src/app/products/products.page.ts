import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public json;
  constructor(public navCtrl: NavController) {this.json =JSON.parse(localStorage.getItem("products")); }

  ngOnInit() {
  }

}
