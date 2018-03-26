import { Injectable } from "@angular/core";
import { NavMenu } from "../app";

@Injectable()
export class DataService {
  constructor() {}

  GetMenuItems(): NavMenu[] {
    let menuItems: NavMenu[] = [];
    // menuItems.push({
    //   name: "Games",
    //   url: "",
    //   GrowFactor: 0,
    //   FontAwesomeCategory: "fas",
    //   FontAwesome: "fa-address-book",
    //   IsExpanded: false,
    //   items: [
    //     { name : 'Lorem ipsum1', menulink : '' },
    //     { name : 'Lorem ipsum2', menulink : '' },
    //     { name : 'Lorem ipsum3', menulink : '' },
    //     { name : 'Lorem ipsum4', menulink : '' },
    //     { name : 'Lorem ipsum5', menulink : ''},
    //   ]
    // });
    // menuItems.push({
    //   name: "Characters",
    //   url: "",
    //   GrowFactor: 0,
    //   FontAwesomeCategory: "fas",
    //   FontAwesome: "fa-address-card",
    //   IsExpanded: false,
    //   items: [
    //     { name : 'Lorem ipsum6', menulink : '' },
    //   ]
    // });
    menuItems.push({
      name: "Invitations",
      url: "",
      GrowFactor: 0,
      FontAwesomeCategory: "fas",
      FontAwesome: "fa-anchor",
      IsExpanded: false,
      items: [
        { name : 'Lorem ipsum7', menulink : '' },
        { name : 'Lorem ipsum8', menulink : '' },
        { name : 'Lorem ipsum9', menulink : '' },
        { name : 'Lorem ipsum10', menulink : ''},
        { name : 'Lorem ipsum11', menulink : ''},
        { name : 'Lorem ipsum12', menulink : ''},
        { name : 'Lorem ipsum13', menulink : ''},
        { name : 'Lorem ipsum14', menulink : ''},
        { name : 'Lorem ipsum15', menulink : ''},
      ]
    });
    menuItems.push({
      name: "Characters",
      url: "",
      GrowFactor: 0,
      FontAwesomeCategory: "fab",
      FontAwesome: "fa-android",
      IsExpanded: false,
      items: [
        { name : 'Lorem ipsum16', menulink : '' },
      ]
    });
    menuItems.push({
      name: "Games",
      url: "",
      GrowFactor: 10,
      FontAwesomeCategory: "fas",
      FontAwesome: "fa-bell",
      IsExpanded: true,
      items: [
        { name : 'Lorem ipsum17', menulink : '' },
        { name : 'Lorem ipsum18', menulink : '' },
        { name : 'Lorem ipsum19', menulink : '' },
        { name : 'Lorem ipsum20', menulink : '' },
      ]
    });

    return menuItems;
  }
}
