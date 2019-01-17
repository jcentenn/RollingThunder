import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { AppService } from '../app.service';
import { MenuItem } from 'primeng/api';

@Injectable( {
    providedIn: 'root'
} )

export class AuthService {

    items: MenuItem[];
    loggedInStatus: boolean;
    loggedInStatusSource: BehaviorSubject<boolean> = new BehaviorSubject( true );
    currentLoggedInStatus: Observable<boolean> = this.loggedInStatusSource.asObservable();

    constructor(public appService: AppService) {
        this.currentLoggedInStatus.subscribe( loggedInStatus => {
            this.loggedInStatus = loggedInStatus;

            this.setItems();
        } );
    }

    setItems() {
        this.items = [
            { label: 'Home', icon: 'fas fa-fw fa-home', routerLink: '/' }
//            , { label: 'Contact', icon: 'fas fa-fw fa-envelope' }
//            , { label: 'About', icon: 'fas fa-fw fa-bolt', disabled: !this.loggedInStatus }
            , { label: 'Rules', icon: 'fas fa-fw fa-scroll', routerLink: 'rules' }
            , { label: 'Chat', icon: 'fas fa-fw fa-mobile-alt', routerLink: 'chat', disabled: !this.loggedInStatus }
//            , { label: 'Login', icon: 'fas fa-fw fa-sign-in-alt', routerLink: 'auth' }
        ];
    }

    public changeLoggedInStatus( loggedInStatus: boolean ) {
        this.loggedInStatusSource.next( loggedInStatus );
    }
}
