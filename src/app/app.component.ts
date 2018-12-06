import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { Title } from "@angular/platform-browser";
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
//  title = 'Rolling Thunder';
//  title = '.';
  data: string;
  
    items: MenuItem[];

  constructor(private appService: AppService, private titleService: Title ) { }
  
  ngOnInit() {
//      this.showData();
//      this.appService.changeFavicon('https://royaleapi.com/static/img/badge/gold-3/Bolt_03.png');
//      this.setTitle('Rolling Thunder');
      
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'pi pi-fw pi-plus'},
              {label: 'Download', icon: 'pi pi-fw pi-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
          ]
      }];
      
    }
  
  setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }
  
  showData() {
      this.appService.getData()
        .subscribe(res =>  {
            this.data = JSON.stringify(res);
//            console.log(this.data);
        });
    }
  

  myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }
}

