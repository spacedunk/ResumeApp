import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/School';

@Component({
  selector: 'school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit {

  @Input() schools: School[];

  constructor() { }

  ngOnInit() {
  }

}
