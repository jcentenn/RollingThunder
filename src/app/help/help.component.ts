import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit, AfterViewInit {

  divMessage: string = 'Clan Help';
  

  constructor( private appService: AppService, private router: Router ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.appService.changeShowTopMessage(false);              
  }
}
