import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.skills =  this.profileService.skills()
    }
}
