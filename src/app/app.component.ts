import { Component } from '@angular/core';
import { UserResumeService } from './user-resume.service';
import { UserResume } from 'src/UserResume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-app';
  resume : UserResume;
  constructor(private userResumeService : UserResumeService){
    this.resume = userResumeService.getUserResume();
  }


}
