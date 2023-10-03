import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import {
  Course,
  CourseDetails,
  RelatedContent,
  RelatedTag,
  Thumbnail,
} from '../model/course-detail';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  icons: any = ['twitter', 'facebook', 'linkedin'];
  courseDetails: CourseDetails = {
    details: {
      id: '',
      contentType: '',
      title: '',
      subtitle: '',
      description: '',
      language: '',
      thumbnail: <Thumbnail>{},
      coursesCount: 0,
      tagIds: [],
    },
    courses: <Course[]>[],
    relatedTags: <RelatedTag[]>[],
    relatedContent: <RelatedContent[]>[],
  };

  courseData: Course[] = [];
  relatedContentData: RelatedContent[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.courseService.getcourse().subscribe({
      next: (response: CourseDetails) => {
        console.log('Course response', response);
        this.courseDetails = response;
        this.courseData = response.courses;
        this.relatedContentData = response.relatedContent;
      },
      error: (error) => {
        console.log('course error', error);
      },
      complete: () => {},
    });
  }

  getThumbnailUrl(): string {
    const thumbnailData = this.courseDetails.details.thumbnail;
    const quality = thumbnailData.qualities?.[0];

    if (quality !== undefined) {
      return `${thumbnailData.domain}/${thumbnailData.basePath}/${quality}/${thumbnailData.key}`;
    }

    return '';
  }

  getImageUrl(thumbnail: any): string {
    // Construct the image URL with qualities
    const { domain, basePath, qualities, key } = thumbnail;
    const quality = qualities?.[0];
    return `${domain}/${basePath}/${quality}/${key}`;
  }
}
