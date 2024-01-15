import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngyn-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgynFormsComponent {}
