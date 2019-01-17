import { Component, OnInit, Input } from '@angular/core';
import { UserResume } from 'src/UserResume';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() userResume : UserResume;

  constructor() { }

  ngOnInit() {
  }

}
