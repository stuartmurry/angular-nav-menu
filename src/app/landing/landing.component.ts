import { Component, OnInit } from '@angular/core';
import { NavMenu } from '../app';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private ds : DataService ) { }

  menuItems : NavMenu[];

  ngOnInit() {
    this.menuItems = this.ds.GetMenuItems();
  }

}
