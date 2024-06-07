import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customif]'
})
export class CustomifDirective {
@Input() customif: boolean= false
  constructor(private templateRef: TemplateRef<any>, private vrc: ViewContainerRef) { }

  ngOnInit(): void {
    if(this.customif){
      this.vrc.createEmbeddedView(this.templateRef);
    }else{
      this.vrc.clear();
    }
  }
}
