import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-sideheader-bl',
  templateUrl: './sideheader-bl.component.html',
  styleUrls: ['./sideheader-bl.component.scss']
})
export class SideheaderBLComponent implements OnInit, OnDestroy {

  canClose: boolean;
  isOpen: boolean;
  @ViewChild('mySideNav') mySideNav: ElementRef;
  @ViewChild('menuIcon') menuIcon: ElementRef;

  constructor(public appGlobal: AppGlobals, private renderer: Renderer2) {
  }

  openNav() {
    this.isOpen = true;
    this.canClose = false;
    this.mySideNav.nativeElement.style.right = '0';
    this.mySideNav.nativeElement.style.boxShadow = '-5px 0px 15px rgba(0, 0, 0, 0.5)';
    this.menuIcon.nativeElement.style.display = 'none';
    this.appGlobal.activeBlur = true;
  }

  closeNav() {
    this.isOpen = false;
    this.mySideNav.nativeElement.style.right = '-250px';
    this.mySideNav.nativeElement.style.boxShadow = 'none';
    this.menuIcon.nativeElement.style.display = 'block';
    this.appGlobal.activeBlur = false;
    this.ngOnDestroy();
  }

  onClickedOutside(e: Event) {
    if (this.isOpen && this.canClose && e.target['className'] !== 'sideNav') {
      this.isOpen = false;
      this.canClose = false;
      this.closeNav();
    } else {
      this.canClose = true;
    }
  }

  // Change color of element when mouse hover
  onHover(id1, id2) {
    document.getElementById(id1).style.color = '#56ecdb';
    document.getElementById(id2).style.color = '#56ecdb';
  }

  // Change color of element when mouse hover out
  onHoverOut(id1, id2) {
    document.getElementById(id1).style.color = 'white';
    document.getElementById(id2).style.color = 'white';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'backgroundBlur');
  }

}
