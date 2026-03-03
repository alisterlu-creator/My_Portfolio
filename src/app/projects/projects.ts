import { Component } from '@angular/core';
import { myProjects } from '../my-products';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = myProjects;
}
