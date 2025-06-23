import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlagueService } from '../../service/blagues.service';
import { Blague } from '../../type/blague.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  blague$!: Observable<Blague>;

  constructor(private service: BlagueService) {}

  ngOnInit(): void {
    this.loadBlague();
  }

  loadBlague(): void {
    this.blague$ = this.service.getRandomBlague();
  }
}
