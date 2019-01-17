import { Injectable } from '@angular/core';
import { UserResume } from 'src/UserResume';
import { EKEEHN } from 'src/ekeehn-resume';

@Injectable({
  providedIn: 'root'
})
export class UserResumeService {

  constructor() { }

  getUserResume() : UserResume {
    return EKEEHN;
  }
}
