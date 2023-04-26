import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from 'src/app/services/token.service';
import { LogoutConfComponent } from '../logout-conf/logout-conf.component';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(
    private tokenService: TokenService, 
    private dialog: MatDialog, 
    private scrollService: ScrollService
  ){
    this.isLogged = tokenService.isLogged();
  }

  logout(){
    const dialogRef = this.dialog.open(LogoutConfComponent)

    dialogRef.afterClosed().subscribe(resp => {
      if(resp) {
        this.tokenService.logOut();
        location.reload();
      }
    })
  }
  
  scrollTo(section: string) {
    this.scrollService.setSection(section)
  }
}
