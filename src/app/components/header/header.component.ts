import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(public tokenService: TokenService){
    this.isLogged = tokenService.isLogged();
  }

  logout(){
    this.tokenService.logOut();
    location.reload();
  }
}
