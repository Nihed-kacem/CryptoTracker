import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/models/crypto-coin';
import { CoingeckoConsumerService } from 'src/app/services/coingecko-consumer.service';

@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.component.html',
  styleUrls: ['./litecoin.component.scss'],
})
export class LitecoinComponent implements OnInit {
  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  bitcoin$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
    console.log('bit', this.bitcoin$);
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'litecoin').toPromise();
    
  }

  async changeFiat(){
    let d = await this.callService();
    console.log(d)
    this.bitcoin$ = d[0];
  }

}
