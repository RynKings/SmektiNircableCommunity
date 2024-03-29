import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  public barcode: string;
  constructor( private barcodeScanner: BarcodeScanner) { }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data ' + JSON.stringify(barcodeData));
      console.log('Barcode Data :', barcodeData);
    }).catch( err => {
      console.log('error', err);
      this.barcode = JSON.stringify(err);
    });
  }

  ngOnInit() {
  }

}
