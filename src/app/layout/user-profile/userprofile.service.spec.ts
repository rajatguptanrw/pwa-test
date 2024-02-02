import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserprofileService } from './userprofile.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserprofileService', () => {
  let service: UserprofileService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'patch',
      'delete',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(UserprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the user profile', () => {
    const mockProfile = [
      {
        id: '',
        isDone: false,
        title: '',
        description: 'test description',
      },
    ];
    httpClientSpy.get.and.returnValue(of(mockProfile));

    service.getUserProfile().subscribe((res: any) => {
      expect(res).toEqual(mockProfile);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
