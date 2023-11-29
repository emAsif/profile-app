import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ProfileMock } from '../../shared/@mocks/profile.mock';
import { DataService } from '../../shared/services/data.service';
import { of } from 'rxjs';

const RandomProfile = {
  info: {
    seed: 'd9d3281241ddc2b1',
    results: 1,
    page: 1,
    version: '1.4',
  },
  results: [
    { id: 1, email: 'edgar.gerard@example.com', gender: 'male' } as any,
  ],
};

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockProfileServiceSpy = jasmine.createSpyObj('DataService', [
    'getRandomProfiles',
    'getProfiles',
  ]);
  mockProfileServiceSpy.getProfiles.and.returnValue(of(ProfileMock));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: DataService, useValue: mockProfileServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load 20 profiles on initial load', () => {
    component.profilesList = [];

    component.ngOnInit();
    expect(component.profilesList.length).toBe(20);
  });

  it('should increase count and load profile(s) on every clicks', () => {
    component.profilesList = [];

    mockProfileServiceSpy.getRandomProfiles.and.callFake((arg?: number) => {
      if (arg === component.profileCount) {
        return of(RandomProfile);
      } else {
        return of(ProfileMock);
      }
    });

    component.getRandomProfiles(component.profileCount);
    expect(component.profilesList.length).toBe(1);
    expect(component.profilesList[0].gender).toEqual('male');

    component.getRandomProfiles(component.profileCount);
    expect(component.profilesList.length).toBe(2);

    component.getRandomProfiles(component.profileCount);
    expect(component.profilesList.length).toBe(3);
  });

  it('should renew proflist list with 20 random profile', () => {
    component.profilesList = [];
    mockProfileServiceSpy.getRandomProfiles.and.callFake((arg?: number) => {
      if (arg === component.profileCount) {
        return of(RandomProfile);
      } else {
        return of(ProfileMock);
      }
    });

    component.getRandomProfiles();
    expect(component.profilesList.length).toBe(20);
  });
});
