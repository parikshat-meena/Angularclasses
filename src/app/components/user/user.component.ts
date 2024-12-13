import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { QuoteDataService } from '../../services/quote-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  data: any[] = [];
  quotes: any;
  serverData: any[] = [];
  constructor(
    private userData: UserDataService,
    private quoteData: QuoteDataService
  ) {}

  loadData() {
    this.data = this.userData.getStaticData();
    console.log(this.data);
  }

  getServerData() {
    this.userData.fetchUserData().subscribe((userData) => {
      this.serverData = userData;
    });
  }

  getQuotes() {
    this.quoteData.fetchData().subscribe((res) => {
      this.quotes = res;
      console.log(this.quotes, 'quotes data in user component');
    });
  }
}
