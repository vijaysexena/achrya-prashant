import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqsList: {
    answer: string;
    question: string;
  }[] = [];

  customHTML: string = `
          <h5 class="h5 fs-18">FAQs</h5>
    <p>
      Can’t find the answer you’re looking for? <br />
      Reach out to our
      <a href="https://acharyaprashant.org/en/technical-support" class="text-danger" target=_blank> support</a> team
    </p>
  `;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getFaqData();
  }

  getFaqData() {
    this.courseService.getFaq().subscribe({
      next: (response: any) => {
        this.faqsList = response;
        console.log('Faq response', response);
      },
      error: (error) => {
        console.log('Faq error', error);
      },
      complete: () => {},
    });
  }
}
