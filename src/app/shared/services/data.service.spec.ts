import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get same profiles', () => {
    const currentEndpoint = 'https://randomuser.me/api/?results=20&seed=abc';
    service.getProfiles().subscribe();
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: currentEndpoint,
    });
    expect(req.request.method).toEqual('GET');
  });

  it('should get random tracks', () => {
    const currentEndpoint = 'https://randomuser.me/api/?results=20';
    service.getRandomProfiles().subscribe();
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: currentEndpoint,
    });
    expect(req.request.method).toEqual('GET');
  });
});
