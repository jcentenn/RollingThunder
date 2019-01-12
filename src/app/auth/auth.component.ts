import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { of } from 'rxjs/observable/of';

@Component( {
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
} )
export class AuthComponent implements OnInit {

    constructor(public authService: AuthService ) {
    }

    ngOnInit() {
    }

    login() {
        this.authService.changeLoggedInStatus( !this.authService.loggedInStatus );
    }
}
