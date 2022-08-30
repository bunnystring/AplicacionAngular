import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //afectar img
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError():void {
    const eltNative = this.elHost.nativeElement
    // console.log('❤️ esta iamgen reventó', this.elHost);
    eltNative.src = this.customImg //url imagen
    
  }
//TODO: Host 
  constructor(private elHost:ElementRef) { 
   
  }

}
