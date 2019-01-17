import { Component, OnInit, Input } from '@angular/core';
import { Skill} from 'src/Skill'

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.css']
})
export class SkillInfoComponent implements OnInit {

  @Input() skills: Skill[];

  constructor() { }

  ngOnInit() {
  }

}
