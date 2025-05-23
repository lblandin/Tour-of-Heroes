import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vilain } from '../interface/vilain';
import { VilainService } from '../services/vilain.service';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vilain-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './vilain-detail.component.html',
  styleUrl: './vilain-detail.component.css'
})
export class VilainDetailComponent {
  vilain: Vilain | undefined;

  constructor(
    private route: ActivatedRoute,
    private vilainService: VilainService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vilainService.getVilain(id)
      .subscribe(vilain => this.vilain = vilain);
  }

  goBack(): void {
    this.location.back();
  }
}
