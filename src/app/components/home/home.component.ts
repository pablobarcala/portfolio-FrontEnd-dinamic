import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  section: string = '';
  showButton: boolean = false;

  constructor(private scrollService: ScrollService){}

  ngOnInit(): void {
    this.scrollService.getSection().subscribe(data => {
      this.section = data
      if(this.section != '') {
        const element = document.querySelector("#" + this.section)
        if(element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start"});
          }, 0)
        }
      } 
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const posicion = 400;
    const scrollActual = window.pageYOffset || document.documentElement.scrollTop
    this.showButton = scrollActual > posicion && window.innerWidth < 576
  }

  scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
