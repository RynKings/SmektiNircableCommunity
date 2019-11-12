import { BeritaService } from './berita.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})

export interface Berita {
  artikel_id: number;
  artikel_tanggal: number;
  artikel_judul: string;
  artikel_slug: string;
  artikel_konten: string;
  artikel_sampul: string;
  artikel_author: number;
  artikel_kategori: number;
  artikel_status: string;
}

export class BeritaPage implements OnInit {
  data: Berita;
  hasil: any;

  constructor(private beritaService: BeritaService) { }

  ngOnInit() {
    this.beritaService
      .getData()
      .subscribe(data => {
        console.log(data);
      });
  }

}
