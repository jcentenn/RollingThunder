import { Component, OnInit, NgZone } from '@angular/core';
import { ChatService } from './chat.service';
import { AppService } from '../app.service';
import * as Peer from 'peerjs';
import { HttpClient } from '@angular/common/http';

@Component( {
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
} )

export class ChatComponent implements OnInit {

    constructor( public chatService: ChatService, public appService: AppService, public zone: NgZone, private http: HttpClient ) {

        setTimeout( () => {
            chatService.lobbyPeer = new Peer( ChatService.lobbyID, { debug: 3 } );

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
//        console.log(this.chatService.otherPeerID);

        //        this.otherConn.send( this.myPeerID );
    }

    send() {
        this.chatService.otherConn.send( 'Message from ' + this.chatService.myPeerID + ' at ' + Date.now() );
    }

    upload() {
        const json = {'peerID': this.chatService.chatMessage };

//        var file = new Blob([JSON.stringify(data)], {type : 'application/json'});


        const formData = new FormData();
        formData.append('fileToUpload', JSON.stringify(json));

        console.log(JSON.stringify(json));

        this.http.post('/id.php' , formData) .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                }
            );

    }

}

