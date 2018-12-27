import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import ObjectID from "bson-objectid";
import { BehaviorSubject, Observable } from "rxjs";
import * as Peer from "peerjs";

declare var DataConnection:any;

@Injectable()
export class AppService {


    topMessage: string;
    title: string = 'Rolling Thunder';
    showTopMessage: boolean = true;
//    lobby: Peer;
    

    //    id2: string = this.getID();
    //    peer2 = new Peer( this.id2 );
    //
    //    id3: string = this.getID();
    //    peer3 = new Peer( this.id2 );


//    makeLobby(peer: Peer): Peer.DataConnection {

        //var lobby = new Peer( this.lobbyID );
//        console.log(this.lobby);    
        
//        var connection = peer.connect(this.lobbyID);
        
//        console.log(connection);
        
        //let lobbyConnections: Array<Peer.DataConnection> = lobby.connections;
        
       //let connected: boolean = false;
        
//        lobbyConnections.filter(connection => {
//            if (connection.peer === id) {
//                connected = true;
//            }
//        });
        
        //if (!connected) {
        //    console.log('not connected');   
        //}
        
       // console.log(lobbyConnections.length);
        
                 
//        
//        return connection;
//    }


    constructor( private http: HttpClient ) {
        this.currentTopMessage.subscribe( topMessage => {
            this.topMessage = topMessage;
        } );

//        this.lobby = new Peer( this.lobbyID );
        
        console.log( 'serv' );

        this.currentShowTopMessage.subscribe( showTopMessage => {
            this.showTopMessage = showTopMessage;
        } );

        //        var conn2 = this.peer2.connect( this.id1 );
        //        conn2.on( 'open', function() {
        //            conn2.send( 'hi' );
        //        } );
        //
        //        var conn3 = this.peer2.connect( this.id1 );
        //        conn3.on( 'open', function() {
        //            conn3.send( 'there' );
        //        } );
    }

    private topMessageSource: BehaviorSubject<string> = new BehaviorSubject( '' );
    private showTopMessageSource: BehaviorSubject<boolean> = new BehaviorSubject( true );

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

    getID(): string {
        return new ObjectID().toHexString();
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
 