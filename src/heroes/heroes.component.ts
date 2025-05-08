import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../services/hero.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, RouterLink]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  private heroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}