import { Component, Inject, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {


}
