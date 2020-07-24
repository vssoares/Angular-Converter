import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  dolar = '';
  dolarNumber = 0;
  

  pesoArgentino = '';
  pesoArgentinoNumber = 0;


  resultadoRtD = 0;
  resultadoPAtR = 0;
  

  valor : number = 0;

  buscaDollar() {
    fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
    .then(r => r.json())
    .then(r => {
      this.dolar = r.USD.bid;
      this.dolar = parseFloat(this.dolar).toFixed(7)
      this.dolarNumber = parseFloat(this.dolar);
    })
  }buscaPesoArgentino() {
    fetch("https://economia.awesomeapi.com.br/all/ARS-BRL")
    .then(r => r.json())
    .then(r => {
      this.pesoArgentino = r.ARS.bid;
      this.pesoArgentino = parseFloat(this.pesoArgentino).toFixed(7)
      this.pesoArgentinoNumber = parseFloat(this.pesoArgentino);
      console.log(this.pesoArgentino);
      
    })
  }

  convertRealToDollar(){
    let valorInput = (<HTMLInputElement>document.getElementById('RtD')).value;
    this.resultadoRtD = parseFloat(valorInput) * this.dolarNumber ;
    console.log(this.resultadoRtD);
  }

  convertPesoArgentinoToReal(){
    let valorInput = (<HTMLInputElement>document.getElementById('PAtR')).value;
    this.resultadoPAtR = parseFloat(valorInput) * this.pesoArgentinoNumber;
    console.log(this.resultadoPAtR);
    console.log(this.resultadoPAtR);
    
  }

  ngOnInit(): void {

    this.buscaDollar();
    this.buscaPesoArgentino()

  }

}
