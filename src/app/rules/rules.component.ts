import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from "../app.service";

@Component( {
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
} )
export class RulesComponent implements OnInit, AfterViewInit {

    constructor( private appService: AppService ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.appService.changeTopMessage('Behold the Laws of Rolling Thunder');
    }
}
