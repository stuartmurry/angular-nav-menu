import { Component, OnInit } from '@angular/core';
import { NavMenu } from '../app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  menuItems : NavMenu[];
  height : number;

  $resize : Observable<any>;

  ngOnInit() {
    this.menuItems = [];
    this.menuItems.push( { name : 'Define', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-address-book'});
    this.menuItems.push( { name : 'Gather', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-address-card'});
    this.menuItems.push( { name : 'See', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-anchor'});
    this.menuItems.push( { name : 'Act', url : '', GrowFactor : 0, FontAwesomeCategory: 'fab', FontAwesome : 'fa-android'});
    this.menuItems.push( { name : 'Admin', url : '', GrowFactor : 10, FontAwesomeCategory: 'fas', FontAwesome : 'fa-bell'});
    
    this.height = window.innerHeight;
    this.$resize = Observable.fromEvent(window, 'resize');
    this.$resize.subscribe((e) => {
      console.log('Resize Event');
      this.height = e.target.outerHeight;
      console.log(this.height);
    });
  }

  navClick(nm : NavMenu) {

    this.menuItems.forEach(i => i.GrowFactor = 0);
    nm.GrowFactor = 10;
    
    console.log(nm);
  }
  

  hello() {
    alert('Hello World');
  }

  IsClosed() : boolean {
    return true;
  }
  IsOpen() : boolean {
    return false;
  }

}
