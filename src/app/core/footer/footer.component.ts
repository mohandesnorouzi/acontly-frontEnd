import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AppGlobals} from '../../services/app-globals.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService,
              public appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

}
