import { Injectable, NgZone } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as Peer from 'peerjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from './translate.service';

const SOH = '\u0001';
const STX = '\u0002';
const ETX = '\u0003';
const EOT = '\u0004';
const PEER_ID_REGEX = /\002[a-z0-9]{16}\003\004/i;
const PEER_ID_DELIMS_REGEX = /[\002\003\004]/g;

@Injectable()

export class ChatService {

//    static lobbyID = 'RollingThunderLobby';

    //lobbyPeer: Peer;

    otherConn: Peer.DataConnection;

    otherConns = new Map<string, Peer.DataConnection>();
    otherPeerID: string;

    chatMessageSource: BehaviorSubject<string> = new BehaviorSubject( '' );
    chatMessage: string;
    currentChatMessage: Observable<string> = this.chatMessageSource.asObservable();

    myPeer: Peer;
    myPeerID: string;

    connectedPeers: Array<Peer.DataConnection> = new Array();

    constructor( public http: HttpClient, translateService: TranslateService ) {
        this.currentChatMessage.subscribe( chatMessage => {
            this.chatMessage = chatMessage;
        } );
    }

    public changeChatMessage( currentChatMessage: string ) {
        this.chatMessageSource.next( currentChatMessage );
    }

    /*
    send() {
        console.log( this.otherConns );

        this.otherConns.forEach( ( otherConn, key ) => {

//            console.log(otherConn.open);

            otherConn.send( 'Message from ' + this.myPeerID + ' at ' + Date.now() );
        } );
    }

    newConn( chatService: ChatService, zone: NgZone ) {
        const peer: Peer = new Peer( { debug: 3 } );

        //        this.otherConn = peer.connect( ChatService.lobbyID );

        setTimeout( () => {
            this.myPeerID = peer.id;
            this.myPeer = peer;

            this.pingSessions(peer);

//            this.http.post<Array<string>>( '/id.php', { id: peer.id } ).subscribe(
//                existingSessions => {
//
//                    const removeSession = this.removeSession;
//                    const otherConns = this.otherConns;
//                    const http = this.http;
//
//                    existingSessions.forEach( existingSession => {
//                        const otherConn: Peer.DataConnection = peer.connect( existingSession );
//
//                        otherConn.on( 'open', () => {
//                            console.log('****** ' + this.myPeerID + ' sending ping to ' + otherConn.peer + ' ******');
//                            otherConn.send(STX + this.myPeerID + ETX + EOT);
//                        });
//
//                        otherConn.on( 'error', function( err ) {
//                            removeSession( otherConns, existingSession, http );
//                        } );
//
////                        this.otherConns.set( existingSession, otherConn );
//                    } );
//                },
//                error => {
//                    console.log( error );
//                }
//            );

            peer.on( 'close', () => {
                console.log( peer.id + 'disconnected' );
            } );

            peer.on( 'connection', ( conn: Peer.DataConnection ) => {

                conn.on('open', () => {
//                    console.log( '**** ');
//                    console.log(conn.peer);
//                    console.log(conn);

                    this.otherConns.set(conn.peer, conn);

                   // this.otherPeerID = conn.peer;
//                    conn.provider.connect(peer.id);

                });

                const providerConnections = conn.provider.connections;

                Object.keys(providerConnections).forEach(key => {
                    const connections = providerConnections[key] as Array<Peer.DataConnection>;
//                    const  isConnected = dc.open();

                    connections.forEach(connection => {
                       console.log(connection.peer + ': ' + connection.open);
                    });
//                    console.log(key + ': ' + isConnected);
                });


                console.log( conn.peer + ' connected' );
//                console.log(this.connectedPeers);

                //                this.otherConns.includes(searchElement, fromIndex)
                //                peer.connect(conn.peer);

                conn.on( 'data', ( data: string ) => {
                    
                    console.log(data);
                    
                    if (data.match(PEER_ID_REGEX)) {
                        const incomingID = data.replace(PEER_ID_DELIMS_REGEX, '');
                        
                        console.log('****** recieved ping from ' + incomingID + ' ******');

                        const peerConns = peer.connections;
                        
                        Object.keys(peerConns).forEach(key => {
                            const peerConnArray = peerConns[key] as Array<Peer.DataConnection>;
                            
                            peerConnArray.forEach( peerConn => {
                                if (peerConn.open) {
                                    console.log(peerConn);
                                    
                                    peerConn.send('hi');
                                }
                            });
                            

                        });
                        
//                        this.pingSessions(peer);
                        
                         //const peerConn = peer.connect(incomingID);
                         //this.otherConns.set( incomingID, peerConn);
//                         peer.connect(incomingID);
//                        peerConn.send(STX + this.myPeerID + ETX + EOT);
                        
//                      Have to trigger change detection manually due to the event callback being triggered outside of Angular zone                        
                    } else {
                        zone.run( () => {
                            chatService.changeChatMessage( data );
                        } );
                    }
                } );

                conn.on( 'error', function( err ) {
                    console.log( conn.peer + ' error1' );

                    this.removeSession( this.otherConns, conn.peer, this.http );

                } );

                conn.on( 'close', () => {
                    this.removeSession( this.otherConns, conn.peer, this.http );
                } );
            } );

//            this.myPeer.connect(peer.id);
        }, 1500 );
    }
*/
/*    
    pingSessions(peer: Peer) {
        this.http.post<Array<string>>( '/id.php', { id: peer.id } ).subscribe(
                existingSessions => {

                    const removeSession = this.removeSession;
                    const otherConns = this.otherConns;
                    const http = this.http;

                    existingSessions.forEach( existingSession => {
                        const otherConn: Peer.DataConnection = peer.connect( existingSession );

                        otherConn.on( 'open', () => {
                            console.log('****** ' + this.myPeerID + ' sending ping to ' + otherConn.peer + ' ******');
                            otherConn.send(STX + this.myPeerID + ETX + EOT);
                        });

                        otherConn.on( 'error', function( err ) {
                            removeSession( otherConns, existingSession, http );
                        } );

                        this.otherConns.set( existingSession, otherConn );
                    } );
                },
                error => {
                    console.log( error );
                }
            );
    }
*/
    removeSession( otherConns: Map<string, Peer.DataConnection>, id: string, http: HttpClient ) {

        console.log( 'Removed session: ' + id );

        otherConns.delete( id );

        http.post( '/removeSession.php', { id: id } ).subscribe(
            data => {
                //                    console.log(data);
            }
        );
    }
}
