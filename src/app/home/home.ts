import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { myProjects } from '../my-products';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projects = myProjects;
}
