import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../details/details.component';
import { take } from 'rxjs';
import { DataService } from '../../shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { IProfile, IProfiles } from '../../shared/interface/profile';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailsComponent, NgbPopoverModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  private dataService = inject(DataService);

  profilesList: IProfile[] = [];
  profileCount: number = 1;
  openIndex: number | null = null;
  isLoading: boolean = true;
  apiError: boolean = false;
  loadProfilesBtn: boolean = false;
  loadRenewProfilesBtn: boolean = false;
  highlightFlag: boolean = false;

  ngOnInit(): void {
    this.getProfiles();
  }

  private getProfiles(): void {
    this.dataService
      .getProfiles()
      .pipe(take(1))
      .subscribe({
        next: (profiles: IProfiles) => {
          this.profilesList = profiles.results;
          this.isLoading = false;
        },
        error: () => (this.apiError = true),
      });
  }

  public getRandomProfiles(count?: number): void {
    count ? (this.loadProfilesBtn = true) : (this.loadRenewProfilesBtn = true);
    this.dataService
      .getRandomProfiles(count)
      .pipe(take(1))
      .subscribe({
        next: (profiles: IProfiles) => {
          if (count) {
            profiles.results?.map((profile) => {
              this.profilesList?.unshift(profile);
            });

            this.profileCount++;
            this.loadProfilesBtn = false;
            this.openIndex = null;
          } else {
            this.profilesList = profiles.results!;
            this.resetAllValues();
          }
        },
        error: () => (this.apiError = true),
      });
  }

  public toggleRow(index: number): void {
    this.openIndex === index
      ? (this.openIndex = null)
      : (this.openIndex = index);

    // apply transition class after element is rendered to dom
    setTimeout(() => {
      document.querySelector('.transition-div')?.classList.add('expanded');
    }, 0);
  }

  public deleteUser(index: number): void {
    this.profilesList.splice(index, 1);
    // reset row collapse index
    this.openIndex = null;
  }

  public deleteAllUsers(): void {
    this.profilesList = [];
    this.resetAllValues();
  }

  private resetAllValues(): void {
    this.openIndex = null;
    this.profileCount = 1;
    this.isLoading = this.loadRenewProfilesBtn = this.loadProfilesBtn = false;
  }
}
