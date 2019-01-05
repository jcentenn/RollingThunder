import { Injectable, NgZone } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as Peer from 'peerjs';

@Injectable()
export class ChatService {

    static lobbyID = 'RollingThunderLobby';
    lobbyPeer: Peer;

    otherConn: Peer.DataConnection;
    otherPeerID: string;

    chatMessageSource: BehaviorSubject<string> = new BehaviorSubject( '' );
    chatMessage: string;
    currentChatMessage: Observable<string> = this.chatMessageSource.asObservable();

    myPeer: Peer;
    myPeerID: string;

    connectedPeers: Array<Peer.DataConnection> = new Array();

    constructor() {
        this.currentChatMessage.subscribe( chatMessage => {
            this.chatMessage = chatMessage;
        } );
    }

    public changeChatMessage( currentChatMessage: string ) {
        this.chatMessageSource.next( currentChatMessage );
    }

    newConn( chatService: ChatService, zone: NgZone ) {
        const peer: Peer = new Peer( { debug: 3 } );

        this.otherConn = peer.connect( ChatService.lobbyID );
        setTimeout( () => {
            this.myPeerID = peer.id;
            this.myPeer = peer;

            peer.on( 'close', () => {
                console.log( peer.id + 'disconnected' );
            } );

//          Have to trigger change detection manually due to the event callback being triggered outside of Angular zone
            peer.on( 'connection', ( conn: Peer.DataConnection ) => {
                conn.on( 'data', ( data ) => {
                    zone.run( () => {
                        chatService.changeChatMessage( data );
                    } );
                } );
            } );

        }, 1500 );
    }
}
