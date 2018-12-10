import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, Renderer2, RendererStyleFlags2, HostListener } from '@angular/core';
import { AppService } from "./app.service";
import { Title } from "@angular/platform-browser";
import { MenuItem } from 'primeng/api';
import { Menubar } from "primeng/menubar";
import { BehaviorSubject, Observable } from "rxjs/Rx";


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )

export class AppComponent implements OnInit, AfterViewInit {
    data: string;
    showNav: boolean = true;

    @HostListener( 'window:resize', ['$event'] )
    onResize( event ) {
        if ( event.target.innerWidth < 900 ) {
            console.log( 'mobile' );
        }
        else {
            console.log( 'desktop' );
        }
    }

    @ViewChild( 'topNav' ) topNav: Menubar;
    @ViewChild( 'navButton' ) navButton: ElementRef;

    items: MenuItem[];


    @ViewChildren( "topNav" ) divs: QueryList<any>

    constructor( private appService: AppService, private titleService: Title, private renderer: Renderer2 ) { }

    ngAfterViewInit() {
        console.log( window.innerWidth );
    }

    ngOnInit() {
        //      this.showData();
        this.appService.changeFavicon( 'https://royaleapi.com/static/img/badge/gold-3/Bolt_03.png' );
        this.setTitle( this.appService.title );
        this.setItems();
    }

    setItems() {
        this.items = [
            { label: 'Home', icon: 'fas fa-fw fa-home', routerLink: '/' }
            , { label: 'Contact', icon: 'fas fa-fw fa-envelope' }
            , { label: 'About', icon: 'fas fa-fw fa-bolt' }
            , { label: 'Rules', icon: 'fas fa-fw fa-info', routerLink: 'rules' }
        ];
    }

    setTitle( newTitle: string ) {
        this.titleService.setTitle( newTitle );
    }

    showData() {
        this.appService.getData()
            .subscribe( res => {
                this.data = JSON.stringify( res );
                //            console.log(this.data);
            } );
    }

    myFunction2() {
        //      let topNav = document.getElementById("myTopnav2");

        var menubarsubList: Array<HTMLElement> = this.topNav.el.nativeElement.getElementsByTagName( "p-menubarsub" );


        for ( var menubarsub of menubarsubList ) {
            if ( menubarsub.hasAttribute( "root" ) ) {

                menubarsub.hidden = !menubarsub.hidden;

                //              this.renderer.setStyle(menubarsub, 'display', '');
                //              setStyle(menubarsub, 'display', 'inline');
                /*              
                              console.log(menubarsub.getElementsByTagName("li"));
                              
                              
                              if (!menubarsub.classList.contains('responsive2')) {
                                  this.renderer.addClass(menubarsub, 'responsive2');
                                  this.renderer.addClass(this.navButton.nativeElement, 'responsive2');
                //                  this.renderer.removeStyle(menubarsub, 'display', RendererStyleFlags2.Important);
                                  
                //                  this.showNav = false;
                                  
                                  
                              }
                              else {
                                  this.renderer.removeClass(menubarsub, 'responsive2');
                                  this.renderer.removeClass(this.navButton.nativeElement, 'responsive2');
                              }
                */
            }
        }

        //y.hasAttribute("bar")     

        //      if (topNav.className === "topnav2") {
        //          topNav.className += " responsive2";
        //      } else {
        //          topNav.className = "topnav2";
        //      }
    }

    myFunction() {
        var x = document.getElementById( "myTopnav" );
        if ( x.className === "topnav" ) {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
}


