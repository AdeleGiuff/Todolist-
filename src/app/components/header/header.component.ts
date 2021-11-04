import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Things to be done...';
  constructor() {}

  ngOnInit(): void {}
}
