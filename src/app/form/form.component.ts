import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  task: Task = new Task();
  constructor(private taskService: TaskService,
  private router: Router,
  private toastr: ToastrService,
  private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  public create(): void {
    this.taskService.create(this.task).subscribe(
      response => {
        this.router.navigate(['/home']),
        this.toastr.success('Task Added')
    })
  }
}
