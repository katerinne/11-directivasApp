import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color:string = 'red';
  private _mensaje:string = 'Este campo es requerido';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string){
    this._mensaje = valor;
    this.setMensaje();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }
  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  setEstilo(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color;

  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
