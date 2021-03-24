import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  task: Task = new Task();
  constructor(private taskService: TaskService,
  private router: Router,
  private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

  }

  public create(): void {
    this.taskService.create(this.task).subscribe(
      response => this.router.navigate(['/home'])
    )
  }
}
