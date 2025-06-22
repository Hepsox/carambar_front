import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlagueService } from '../../service/blagues.service';
import { Blague } from '../../type/blague.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  blague?: Blague;
  loading = false;
  error?: string;

  constructor(private blagueService: BlagueService) {
    this.getBlague();
  }

  getBlague() {
    this.loading = true;
    this.error = undefined;
    this.blagueService.getRandomBlague().subscribe({
      next: (blague) => {
        this.blague = blague;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération de la blague.';
        this.loading = false;
      },
    });
  }
}
