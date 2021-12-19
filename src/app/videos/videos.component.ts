import { Videos } from './../models/videos.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public lista: Videos;

  /*lista = ["https://www.youtube.com/embed/Z1Y36AY8coU",
    "https://www.youtube.com/embed/xN-76MKRds0"];*/

  public linkando = "https://www.youtube.com/embed/Z1Y36AY8coU";

  constructor() {

    this.lista = { titulo: 'testando', url: "https://www.youtube.com/embed/Z1Y36AY8coU" };

  }

  ngOnInit(): void {
  }

}
