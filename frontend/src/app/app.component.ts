import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}

  @HostListener('window:keydown',['$event'])
  handleKeyboardEvent(event:KeyboardEvent)
  {
    if(this.router.url==='/user/about-sorobon')
    {
      if(event.ctrlKey && event.altKey && event.code=='KeyA')
      {
        console.log('Event triggred')
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate(['/admin/login'])
      }
    }
  }
}
