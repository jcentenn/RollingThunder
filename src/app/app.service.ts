import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {

    topMessage: string;
    title: string = 'Rolling Thunder';
    showTopMessage: boolean = true;

    constructor( private http: HttpClient ) {
        this.currentTopMessage.subscribe( topMessage => {
            this.topMessage = topMessage;
        } );
        
        this.currentShowTopMessage.subscribe( showTopMessage => {
            this.showTopMessage = showTopMessage;
        } );

    }

    private topMessageSource: BehaviorSubject<string> = new BehaviorSubject('');
    private showTopMessageSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
    
    currentTopMessage: Observable<string> = this.topMessageSource.asObservable();
    currentShowTopMessage: Observable<boolean> = this.showTopMessageSource.asObservable();

    url: string = 'https://api.royaleapi.com/player/J8YL90U2';
    auth: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAzNCwiaWRlbiI6IjI4NzEwODcxMDE1NTY4MTc5NCIsIm1kIjp7fSwidHMiOjE1NDI4MjY2Mzk0NTd9.FH8-yfk_eeIiLd1put1lSc6iY2K1QSlVBnjF73g-auI';

    httpOptions = {
        headers: new HttpHeaders( {
            'Content-Type': 'application/json',
            'auth': this.auth
        } )
    }

    getData() {
        return this.http.get( this.url, this.httpOptions );
    }

    changeTopMessage( currentTopMessage: string ) {
        this.topMessageSource.next( currentTopMessage );
    }

    changeShowTopMessage( currentShowTopMessage: boolean ) {
        this.showTopMessageSource.next( currentShowTopMessage );
    }
    
    changeFavicon = link => {
        let $favicon: any = document.querySelector( 'link[rel="icon"]' )
        // If a <link rel="icon"> element already exists,
        // change its href to the given link.
        if ( $favicon !== null ) {
            $favicon.href = link
            // Otherwise, create a new element and append it to <head>.
        } else {
            $favicon = document.createElement( "link" )
            $favicon.rel = "icon"
            $favicon.href = link
            document.head.appendChild( $favicon )
        }
    }
}
 