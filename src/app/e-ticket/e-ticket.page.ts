import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e-ticket',
  templateUrl: './e-ticket.page.html',
  styleUrls: ['./e-ticket.page.scss'],
})
export class ETicketPage {
  public isMenu: boolean = false;
  constructor(public navCtrl: NavController) { }

  menu(){
    if(!this.isMenu){
      this.isMenu = true;
    }else{
      this.isMenu = false;
    }
  }

  ngOnInit() {
  }

  goETicket(){
    this.isMenu = false;
  }

  goProducts(){
    this.navCtrl.navigateRoot('/products');
  }

}
