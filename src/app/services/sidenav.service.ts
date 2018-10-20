import {Injectable} from '@angular/core';
import {MatSidenavModule, MatDrawerToggleResult, MatSidenav} from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  // public setSidenav(sidenav: MatSidenavModule) {
  //   this.sidenav = sidenav;
  // }
  //
  // public open(): Promise<MatDrawerToggleResult> {
  //   return this.sidenav.open();
  // }
  //
  // public close(): Promise<MatDrawerToggleResult> {
  //   return this.sidenav.close();
  // }
  //
  // public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
  //   return this.sidenav.toggle(isOpen);
  // }
}
