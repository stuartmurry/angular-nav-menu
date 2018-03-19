import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  menuItems : NavMenu[];
  height : number;
  $resize : Observable<any>;

  ngOnInit() {
    
    // Initialize
    this.height = window.innerHeight;

    // Example of how to treat event as observer
    this.$resize = Observable.fromEvent(window, 'resize');
    this.$resize.subscribe((e) => {
      this.height = e.target.innerHeight;
    });
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
