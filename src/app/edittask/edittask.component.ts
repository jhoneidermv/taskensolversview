import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  task: Task = new Task();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void{
    console.log("llegué")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.taskService.getTask(id).subscribe(task => this.task = task)
      }
    })
  }

  public create(): void {
    this.taskService.create(this.task).subscribe(
      response => this.router.navigate(['/tasks'])
    )
  }

  public cancel(): void {
    this.router.navigate(['/tasks'])
  }
}
