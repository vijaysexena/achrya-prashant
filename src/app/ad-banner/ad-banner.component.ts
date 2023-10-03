import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css'],
})
export class AdBannerComponent {
  customHTML: string = `

      <span class="text-white me-3"
        >Get access to all 350+ video series at once!</span
      >`;
}
