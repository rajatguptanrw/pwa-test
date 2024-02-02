import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { UserprofileService } from './userprofile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let mockProfileService: jasmine.SpyObj<UserprofileService>;

  beforeEach(() => {
    mockProfileService = jasmine.createSpyObj('UserprofileService', [
      'getUserProfile',
    ]);

    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: UserprofileService, useValue: mockProfileService },
      ],
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call user profile - ngOnInit', () => {
    spyOn(component, 'getUserProfileData');
    component.ngOnInit();
    expect(component.getUserProfileData).toHaveBeenCalled();
  });

  it('should set todoList on get all todos', () => {
    const mockProfileData = {
      name: '',
      component: '',
    };
    mockProfileService.getUserProfile.and.returnValue(of(mockProfileData));
    component.getUserProfileData();
    expect(component.userProfile).toEqual(mockProfileData);
  });
});
