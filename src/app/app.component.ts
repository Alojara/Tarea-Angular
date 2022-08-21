import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea-angular';
  edad: number = 30;
  direccion: string = 'Portales Oriente 748';
  resultado: number = 0;
  mostrar: string = '';
  pot: number = 2;
  res: number = 2;
  sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
  restar(numero1: number, numero2: number): number {
    return numero1 - numero2;}
  dividir(numero1: number, numero2: number): number {
      return numero1 / numero2;}
  potencia(numero1: number, numero2: number): number {
    return numero1 ** numero2;}
  multiplicacion(numero1: number, numero2: number): number {
    return numero1 * numero2;}
  sumarUno():void{
    this.resultado =this.resultado + 1;
  }
  agregarletra(): void {
    this.mostrar = this.mostrar + 'hola';
  }
  elevar(): void{
    this.res = ((this.res ) ** (this.pot ));;
  }
  restarUno(): void {
    this.resultado = this.resultado - 1;
  }
}
