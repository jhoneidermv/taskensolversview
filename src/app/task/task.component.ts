import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  listTasks: Task[];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      response => this.listTasks = response
    );
  }

  delete(task: Task): void{
    console.log("Estoy en el método delete")
    this.taskService.deleteTask(task.id).subscribe(
      response => {
        this.listTasks = this.listTasks.filter(tsk => tsk !== task)
      }
    )
  }
}
