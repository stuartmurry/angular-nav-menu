import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NavMenu } from '../app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // [style.height.px]="height"
  constructor() { }

  @Input()
  menuItems : NavMenu[];
  
  // @Input()
  // width : number;
  navHeight : number = 50;

  height : number;
  scrollHeight: number;
  // width : number;
  $resize : Observable<any>;

  ngOnInit() {

    // Initialize
    this.height = window.innerHeight;
    this.calculateNavHeight();

    // Example of how to treat event as observer
    this.$resize = Observable.fromEvent(window, 'resize');
    this.$resize.subscribe((e) => {
      // this.width = document.getElementById()
      this.height = e.target.innerHeight;
      this.calculateNavHeight();
    });
  }

  calculateNavHeight() {
    let calibration = 17;//                 borders, margin, etc
    this.scrollHeight = (this.height - (this.menuItems.length * 2) - (this.menuItems.length * this.navHeight)) - calibration;
  }

  captureResize() {
    console.log(this);
  }

  navClick(nm : NavMenu) {
    
    // Clear previous settings
    this.menuItems.forEach(i => {
      i.GrowFactor = 0;
      i.IsExpanded = false;
    });

    // dynamically adjust html flexbox
    nm.GrowFactor = 10;
    nm.IsExpanded = true;

  }

  IsClosed(nm : NavMenu) : boolean {
    return !nm.IsExpanded;
  }

  IsOpen(nm : NavMenu) : boolean {
    return nm.IsExpanded;
  }

}
