import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProfile } from '../../shared/interface/profile';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input() userDetails!: IProfile;
  @Output() collapseWindow = new EventEmitter();
  @Output() deleteProfile = new EventEmitter();
}
