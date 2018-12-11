import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router, NavigationEnd } from "@angular/router";

@Component( {
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
} )
export class RulesComponent implements OnInit, AfterViewInit {

    rulesessage: string = 'Behold the Laws of Rolling Thunder';
    constructor( private appService: AppService, private router: Router ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.appService.changeShowTopMessage(false);              
    }
}
