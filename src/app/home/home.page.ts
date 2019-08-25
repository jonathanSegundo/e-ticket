import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ETicketPage } from '../e-ticket/e-ticket.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isMenu: boolean = false;

  constructor(public navCtrl: NavController) {}

  menu(){
    if(!this.isMenu){
      this.isMenu = true;
    }else{
      this.isMenu = false;
    }
  }

  goETicket(){
    this.navCtrl.navigateRoot('/e-ticket');
  }

}
