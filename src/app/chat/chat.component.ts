import { Component, OnInit, NgZone } from '@angular/core';
import { ChatService } from './chat.service';
import { AppService } from '../app.service';
import * as Peer from "peerjs";


@Component( {
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
} )

export class ChatComponent implements OnInit {

    constructor( public chatService: ChatService, public appService: AppService, public zone: NgZone ) {

        setTimeout( () => {
            chatService.lobbyPeer = new Peer( ChatService.lobbyID, { debug: 0 } );

            chatService.lobbyPeer.on( 'connection', ( conn: Peer.DataConnection ) => {

                chatService.connectedPeers = Object.values( chatService.lobbyPeer.connections );

                console.log( chatService.connectedPeers );

                //              connectedPeers.forEach( ( val ) => {
                //                  
                //                  let xx:Peer.DataConnection = val;
                //              
                //                  console.log(xx);
                //      
                //              } );


            } );

            chatService.lobbyPeer.on( 'error', function( err ) {
                console.log( 'oof' );
            } );

        }, 1000 );

        chatService.newConn( this.chatService, this.zone );

    }

    ngOnInit() {
        this.chatService.changeChatMessage( '%%%%%' );
    }

    connect() {
        this.chatService.otherConn = this.chatService.myPeer.connect( this.chatService.otherPeerID );
        //        this.otherConn.send( this.myPeerID );
    }

    send() {
        this.chatService.otherConn.send( 'Message from ' + this.chatService.myPeerID + ' at ' + Date.now() );
    }
}

