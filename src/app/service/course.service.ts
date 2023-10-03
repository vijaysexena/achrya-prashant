import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  getCourseListUrl,
  getFaqListUrl,
  getTagListUrl,
} from '../api/course-api';
import { Observable } from 'rxjs';
import { CourseDetails } from '../model/course-detail';
import { Tags } from '../model/tag';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getcourse(): Observable<CourseDetails> {
    return this.http.get<CourseDetails>(getCourseListUrl);
  }

  getFaq() {
    return this.http.get(getFaqListUrl);
  }

  getTag(): Observable<Tags> {
    return this.http.get<Tags>(getTagListUrl);
  }

  getJsonObject() {
    return this.http.get('../../assets/data.json');
  }
}
