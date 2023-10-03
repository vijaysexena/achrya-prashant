import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  jsonData: any;

  includeicons = false;

  ngOnInit(): void {
    this.getjsonData();
  }

  getjsonData() {
    this.courseService.getJsonObject().subscribe({
      next: (res) => {
        this.jsonData = res;
      },
      error: (error) => {},
      complete: () => {},
    });
  }
}
