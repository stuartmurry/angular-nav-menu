import { Injectable } from '@angular/core';
import { NavMenu } from '../app';

@Injectable()
export class DataService {

  constructor() { }

  GetMenuItems() : NavMenu[] {
    
    let menuItems : NavMenu[] = [];
    menuItems.push( { name : 'Define', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-address-book', IsExpanded:false });
    menuItems.push( { name : 'Gather', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-address-card', IsExpanded:false });
    menuItems.push( { name : 'See', url : '', GrowFactor : 0, FontAwesomeCategory: 'fas', FontAwesome : 'fa-anchor', IsExpanded:false });
    menuItems.push( { name : 'Act', url : '', GrowFactor : 0, FontAwesomeCategory: 'fab', FontAwesome : 'fa-android', IsExpanded:false });
    menuItems.push( { name : 'Admin', url : '', GrowFactor : 10, FontAwesomeCategory: 'fas', FontAwesome : 'fa-bell', IsExpanded:true });

    return menuItems;
  }

}
