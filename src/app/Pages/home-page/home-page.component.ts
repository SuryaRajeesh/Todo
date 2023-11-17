import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private api:ApiService){
    this.api.getTodo().subscribe((data:any)=>{
      this.todos=data
    })

  }
  todos:any;
  ngOnInit(){

  }

}
