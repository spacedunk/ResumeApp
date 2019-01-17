import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/Experience';

@Component({
  selector: 'experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {

  @Input() experiences : Experience[];
  panelOpenState: boolean;
  
  constructor() { }

  ngOnInit() {
    this.panelOpenState = false;
    this.experiences.forEach(element => {
      element['show'] = false;
    });
  }

}
