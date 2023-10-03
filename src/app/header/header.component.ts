import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  jsonData: any;
  includeicons = false;

  headerContent: any = {
    home: 'Home',
    sessions: 'Live sessions',
    video: 'Video series',
    books: 'AP books',
    articles: 'AP articles',
    invite: 'Invite',
    media: 'In media',
    donate: 'Donate',
  };
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
