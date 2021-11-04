import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  name: string;
  hour: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert("Don't forget to write something!");
      return;
    }

    const newTask = {
      hour: this.hour,
      name: this.name,
    };

    this.hour = '';
    this.name = '';
  }
}
