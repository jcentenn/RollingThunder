import { Component, OnInit, NgZone } from '@angular/core';
import { ChatService } from './chat.service';
import { AppService } from '../app.service';
import * as Peer from 'peerjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { TranslateService } from './translate.service';
import * as tokenlib from '../../assets/js/token.js';
import * as languages from '../../assets/js/languages.js';
import * as querystring from '../../../node_modules/querystring';

// import { translate as Translate } from 'google-translate-api';
// import { token } from 'google-translate-token';

const SOH = '\u0001';
const STX = '\u0002';
const ETX = '\u0003';
const EOT = '\u0004';
const PEER_ID_REGEX = /\002[a-z0-9]{16}\003\004/i;
const PEER_ID_DELIMS_REGEX = /[\002\003\004]/g;

@Component( {
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
} )

export class ChatComponent implements OnInit {

    myPeer: Peer;
    peerConns: any;
    existingConns = new Map<string, Peer.DataConnection>();
    incomingPeers = new Array<string>();
    existingPeerID: string;

// tslint:disable-next-line: max-line-length
    constructor( public chatService: ChatService, public authService: AuthService, public appService: AppService, public zone: NgZone, private http: HttpClient, public translateService: TranslateService) {


//        translate('Ik spreek Engels', {to: 'en'}).then(res => {
//            console.log(res.text);
//            //=> I speak English
//            console.log(res.from.language.iso);
//            //=> nl
//        }).catch(err => {
//            console.error(err);
//        });


        if (authService.loggedInStatus) {
            this.chat();
        }
    }

    ngOnInit() {
        this.appService.changeTopMessage( 'Welcome to ' + this.appService.title  + ' chat');
    }

    send() {
        this.existingConns.forEach( ( existingConn, key ) => {
            const message = 'Hi my name is ' + this.chatService.myPeerID + ' at ' + Date.now();
            existingConn.send(message);
      } );
    }

    translate() {
        const text = 'hello there';
//        token.get('Hello').then(console.log);
        this.translateService.updateTKK().subscribe(
                tkkData => {
                    const codeArray: Array<string> = tkkData.match(/tkk:'.*?'/g);
                    let tkk: string;

                    if (codeArray) {
                        let code = codeArray[0];
                        code = code.replace(/'/g, '"');
                        code = code.replace('tkk', '"tkk"');
                        tkk = JSON.parse('{' + code + '}').tkk;

//                        window.TKK = tkk;
//                        console.log(tkk);

                        let tk = tokenlib.sM(text, tkk);
                        tk = tk.replace('&tk=', '');

                        const token = JSON.parse('{"name": "tk", "value":' + tk + '}');

//                        console.log(token);
                        const opts = {from: 'en', to: 'ru'};

                        let e;
                        [opts.from, opts.to].forEach(function (lang) {
                            if (lang && !languages.isSupported(lang)) {
                                e = new Error();
                                e.code = 400;
                                e.message = 'The language \'' + lang + '\' is not supported';
                            }
                        });

                        if (e) {
                            console.log(e);
                        }

                        opts.from = opts.from || 'auto';
                        opts.to = opts.to || 'en';

                        opts.from = languages.getCode(opts.from);
                        opts.to = languages.getCode(opts.to);



                        let url = 'https://translate.google.com/translate_a/single';
                        const data = {
                            client: 't',
                            sl: opts.from,
                            tl: opts.to,
                            hl: opts.to,
                            dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
                            ie: 'UTF-8',
                            oe: 'UTF-8',
                            otf: 1,
                            ssel: 0,
                            tsel: 0,
                            kc: 7,
                            q: text
                        };

                        data[token.name] = token.value;

                        url = url + '?' + querystring.stringify(data);


                        console.log(url);



                    }
                });
    }

    chat() {
        const peer: Peer = new Peer( { debug: 3 } );
        const http = this.http;
        const removeSession = this.removeSession;
        const existingConns = this.existingConns;

        peer.on('open', () => {
            this.chatService.myPeerID = peer.id;
            this.myPeer = peer;
            this.peerConns = peer.connections;

            this.http.post<Array<string>>( '/id.php', { id: peer.id } ).subscribe(
                existingSessions => {

                    existingSessions.forEach( existingSession => {

                        const peerConnection = peer.connect(existingSession);

                        this.existingPeerID = existingSession;

                        peer.on('error', (err) => {
                            console.log(err);
                           removeSession( existingConns, existingSession, http );
                        });

                        peerConnection.on( 'close', () => {
                            removeSession( existingConns, existingSession, http );
                        } );

                        peerConnection.on('open', () => {
                            this.existingConns.set(existingSession, peerConnection);

//                            console.log('****** ' + peer.id + ' sending ping to ' + peerConnection.peer + ' ******');
                            peerConnection.send(STX + peer.id + ETX + EOT);
                        });
                    });
                } );
        });


//        peer.on( 'error', () => {
//            removeSession( existingConns, this.existingPeerID, http );
//        });

        peer.on( 'connection', ( conn: Peer.DataConnection ) => {

            conn.on( 'error', function( err ) {
                console.log( conn.peer + ' error1' );
                this.removeSession( this.existingConns, conn.peer, this.http );
            } );

            conn.on('data', ( data: string ) => {
                if (data.match(PEER_ID_REGEX)) {
                    const incomingID = data.replace(PEER_ID_DELIMS_REGEX, '');
//                    console.log('****** recieved ping from ' + incomingID + ' ******');

                    const pingConn = peer.connect(incomingID);
                    this.existingConns.set(pingConn.peer, pingConn);
//                  Have to trigger change detection manually due to the event callback being triggered outside of Angular zone
                } else {
                    this.zone.run( () => {
                        this.chatService.changeChatMessage( data );
                    } );
                }
            });
        });
    }

    removeSession( existingConns: Map<string, Peer.DataConnection>, id: string, http: HttpClient ) {

        console.log( 'Removed session: ' + id );

        existingConns.delete( id );

        http.post( '/removeSession.php', { id: id } ).subscribe(
            data => {
            }
        );
    }

/*
    connect() {
        this.chatService.otherConn = this.myPeer.connect( this.chatService.otherPeerID );
//        console.log(this.chatService.otherPeerID);

        this.existingConns.set(this.chatService.otherPeerID, this.chatService.otherConn);

        this.chatService.otherConn.on('data', ( data: string ) => {
            console.log(data);
        });
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
*/
}

