import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    // this.renderer.setStyle(document.body, 'background-color', 'red');
  }

  ngOnInit() {
  }

}
