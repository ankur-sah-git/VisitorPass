import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisitorPass'; empName:any;
  showHeaderFooter = true;
  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
  ) {
    
  }

  scrollTop(){
    window.scroll(0,0)
  }

  ngOnInit() { 
    //this.empName=localStorage?.getItem("empName")??'User';
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
}
