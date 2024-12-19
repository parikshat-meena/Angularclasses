import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  currentPage1 = 1;
  data = [
    { username: 'john_doe', email: 'john.doe@example.com' },
    { username: 'jane_smith', email: 'jane.smith@example.com' },
    { username: 'alex_jones', email: 'alex.jones@example.com' },
    { username: 'lisa_brown', email: 'lisa.brown@example.com' },
    { username: 'michael_white', email: 'michael.white@example.com' },
    { username: 'sarah_clark', email: 'sarah.clark@example.com' },
    { username: 'daniel_adams', email: 'daniel.adams@example.com' },
    { username: 'emma_hill', email: 'emma.hill@example.com' },
    { username: 'chris_lee', email: 'chris.lee@example.com' },
    { username: 'olivia_turner', email: 'olivia.turner@example.com' },
    { username: 'joshua_hall', email: 'joshua.hall@example.com' },
    { username: 'megan_scott', email: 'megan.scott@example.com' },
    { username: 'ryan_green', email: 'ryan.green@example.com' },
    { username: 'amy_wright', email: 'amy.wright@example.com' },
    { username: 'david_king', email: 'david.king@example.com' },
  ];
}
