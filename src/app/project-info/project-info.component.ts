import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/Project';

@Component({
  selector: 'project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  @Input() projects : Project[]

  constructor() { }

  ngOnInit() {
  }

}
