import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  listTasks: Task[];
  constructor(private taskService: TaskService,
  private toastr: ToastrService) {
    this.taskService.getTasks().subscribe(
      response => this.listTasks = response
    );
  }

  ngOnInit(): void {

  }

  delete(task: Task): void{
    this.taskService.deleteTask(task.id).subscribe(
      response => {
        this.listTasks = this.listTasks.filter(tsk => tsk !== task),
        this.toastr.success('Task Deleted')
      }
    )
  }

  metod(task: Task): void{
    this.taskService.changeState(task.id).subscribe(
      response => {
        this.toastr.success('Changed status')
    });
  }
}
