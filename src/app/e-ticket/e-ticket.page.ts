import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e-ticket',
  templateUrl: './e-ticket.page.html',
  styleUrls: ['./e-ticket.page.scss'],
})
export class ETicketPage {
  public isMenu: boolean = false;
  public isSownloadTicket = false;
  public json;
  constructor(public navCtrl: NavController) {
    this.json = JSON.parse('[  {    "ticket": 109123,    "total": 6999,    "fecha": "02/02/2019",    "productos": [      {        "cantidad": 1,        "nombre": "Tablet huawei T3",        "descripcion": "8GB DB3-FT07",        "p_unitario": 5000,        "marca": "HUAWEI",        "image": "https://unlockandfree.com/wp-content/uploads/2018/04/Huawei-Y5-Lite.3-600x578.png",        "modelo": "BG2-W09"      },      {        "cantidad": 1,        "nombre": "Celular huawei Y5",        "descripcion": "Y5 Lite 2017 4G ",        "p_unitario": 1999,        "marca": "HUAWEI",        "image": "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2897238.jpg",        "modelo": "BG2-W09"      }    ]  },  {    "ticket": 109895,    "total": 1699,    "fecha": "15/05/2019",    "productos": [      {        "cantidad": 1,        "nombre": "Tablet huawei T1",        "descripcion": "8GB BG2-W09",        "p_unitario": 1699,        "marca": "https://parentesis.com/imagesPosts/tablet%20huawei.jpg",        "image": "",        "modelo": "BG2-W09"      }    ]  },  {    "ticket": 109608,    "total": 1494,    "fecha": "20/08/2019",    "productos": [      {        "cantidad": 1,        "nombre": "Audifonos",        "descripcion": "Sony EXH7",        "p_unitario": 1494,        "marca": "HUAWEI",        "image": "https://http2.mlstatic.com/audifono-inalambrico-sony-walkman-nw-ws625-contra-agua-16-gb-D_NQ_NP_697471-MLM31230566255_062019-Q.jpg",        "modelo": "BG2-W09"      }    ]  }]');
    
   }

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

  goProducts(products){
    localStorage.setItem("products", JSON.stringify(products));
      this.navCtrl.navigateRoot('/products');
    
    
  }

  downloadTicket(){
    console.log("Ticket descargado");
  }

}
