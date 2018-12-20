import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-bl',
  templateUrl: './home-bl.component.html',
  styleUrls: ['./home-bl.component.scss']
})
export class HomeBlComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
