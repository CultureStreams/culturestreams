import {Directive, Input, HostBinding} from '@angular/core'
@Directive({
    selector: 'img[default]',
    host: {
      '(error)':'updateUrl()',
      '(load)': 'load()',
      '[src]':'src'
     }
  })

 export class ImagePreloadDirective {
    @Input() src:string;
    @Input() default:string;
    @Input() class:string;
    @HostBinding('class') newClassName

    updateUrl() {
      // console.log('update image url');
      this.src = this.default;
    }
    load(){
      this.newClassName = this.class;
    }
  }
