import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-clan-wars',
  templateUrl: './clan-wars.component.html',
  styleUrls: ['./clan-wars.component.css']
})
export class ClanWarsComponent implements OnInit, AfterViewInit {

    divMessage: string = 'Tips for Clan Wars';
    constructor( private appService: AppService, private router: Router ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.appService.changeShowTopMessage(false);              
    }

    goToLink(url: string){
        window.open(url, "royaleAPI");
        }
}



