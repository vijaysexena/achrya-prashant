import { CourseService } from './../service/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
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
