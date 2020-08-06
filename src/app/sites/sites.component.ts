import { Component, OnInit, Input } from '@angular/core';
import { Website } from 'src/Website';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  @Input() sites : Website[];

  constructor() { }

  ngOnInit() {
  }

}
