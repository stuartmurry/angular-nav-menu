import { Directive, ElementRef, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appNav]',
  host : {
    '(mouseover)' : 'mouseIt()',
    '[style.height.px]' : 'height',
  },
})
export class NavDirective  implements OnInit {

  $resize : Observable<any>;

  height: number;

  width : number;

  constructor(private _el : ElementRef) { 

    console.log('Element Width');

    console.log(this._el.nativeElement.style);
    // Set initial height
    this.height = window.innerHeight;

    this.$resize = Observable.fromEvent(window, 'resize');
    this.$resize.subscribe((e) => {
      console.log(e.target.innerHeight);
      // this.width = document.getElementById()
      this.height = e.target.innerHeight;
      
    });
  }

  ngOnInit() {
    
  }

  resize() {
    console.log('Resize');
    console.log(this);
  }

  mouseIt() {
    // alert('MouseOver');
  }

}
