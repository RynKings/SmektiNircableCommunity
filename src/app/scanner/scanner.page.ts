import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  public barcode: string;
  constructor( private barcodeScanner: BarcodeScanner) { }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode = barcodeData['text'];
      console.log('Barcode Data :', barcodeData);
    }).catch( err => {
      console.log('error', err);
      this.barcode = JSON.stringify(err);
    });
  }

  ngOnInit() {
  }

}
