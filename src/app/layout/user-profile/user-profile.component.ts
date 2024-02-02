import { Component, OnInit } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  constructor(private userProfileService: UserprofileService) {}

  ngOnInit(): void {
    this.getUserProfileData();
  }

  getUserProfileData() {
    this.userProfileService.getUserProfile().subscribe((res) => {
      this.userProfile = res;
    });
  }
}
