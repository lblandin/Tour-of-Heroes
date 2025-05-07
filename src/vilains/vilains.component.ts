import { Component } from '@angular/core';
import { Vilain } from '../interface/vilain';
import { VilainService } from '../services/vilain.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vilains',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './vilains.component.html',
  styleUrl: './vilains.component.css'
})
export class VilainsComponent {
  vilains: Vilain[] = [];

  constructor(private vilainService: VilainService) { }

  ngOnInit(): void {
    this.getVilains();
  }

  getVilains(): void {
    this.vilainService.getVilains()
    .subscribe(vilains => this.vilains = vilains);
  }
}
