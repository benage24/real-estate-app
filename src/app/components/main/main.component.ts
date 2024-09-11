import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { JumbontronComponent } from '../jumbontron/jumbontron.component';
import {CardsComponent} from '../cards/cards.component'
import { AboutUsComponent } from '../about-us/about-us.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutUsComponent,NavbarComponent,JumbontronComponent,CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
