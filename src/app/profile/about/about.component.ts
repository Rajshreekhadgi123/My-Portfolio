import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

about1: any;
about2: any;

constructor(private profileservice : ProfileService) { }

  ngOnInit() {
    this.about1 =  this.profileservice.about1
    this.about2 =  this.profileservice.about2
  }
}
