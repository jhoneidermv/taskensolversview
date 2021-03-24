import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  listTasks: Task[];
  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(
      response => this.listTasks = response
    );
  }

  ngOnInit(): void {

  }

  delete(task: Task): void{
    console.log("Estoy en el método delete")
    this.taskService.deleteTask(task.id).subscribe(
      response => {
        this.listTasks = this.listTasks.filter(tsk => tsk !== task)
      }
    )
  }

  metod(task: Task): void{
    console.log(`estoy cambiando la tarea ${task.id}`)
    this.taskService.changeState(task.id).subscribe(
      response => {
        console.log("respuesta "+response)
    });
  }
}
