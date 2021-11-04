import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  @Output() onUpdateReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delTask(task: Task) {
    this.onDelete.emit(task);
  }
  onUpdate(task: Task) {
    this.onUpdateReminder.emit(task);
  }
}
