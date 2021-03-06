export interface App {
}

export interface NavMenu {
    name : string;
    url : string;
    GrowFactor : number;
    FontAwesome : string;
    FontAwesomeCategory : string; // fas, fal, far - solid, light, regular respectively
    IsExpanded : boolean;
    items : NavMenuItems[];
}

export interface NavMenuItems {
    name : string;
    menulink : string;
}
