import { Component, OnInit } from '@angular/core';
import { CourseService } from './../service/course.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  liveSessions: any[] = [];

  isLevel1Clickable = false;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getTagData();
  }

  getTagData() {
    this.courseService.getTag().subscribe({
      next: (response: any) => {
        console.log('Tag response', response);
        this.buildMenuStructure(response);
      },
      error: (error) => {
        console.log('Tag error', error);
      },
      complete: () => {},
    });
  }

  buildMenuStructure(res: any) {
    const level0Items = res[0];
    const level1Items = res[1];

    console.log('level 0 items', level0Items);
    console.log('level 1 items', level1Items);

    level0Items.forEach((level0Item: any) => {
      level0Item.children = level1Items.filter(
        (level1Item: any) => level1Item.parent === level0Item.tagId
      );

      level0Item.children.forEach((level1Item: any) => {
        level1Item.children = level1Items.filter(
          (level2Item: any) => level2Item.parent === level1Item.tagId
        );
      });
    });

    this.liveSessions = level0Items;
    console.log('livesession', this.liveSessions);
  }
}
