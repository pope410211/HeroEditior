import { Component } from '@angular/core';
import { Hero } from './hero';



const HEROES: Hero[] = [
	{id: 1, name: 'Nezzerand Silverlight'},
	{id: 2, name: 'Lady Idril'},
	{id: 3, name: 'Drizzt Do\' Urden'},
	{id: 4, name: 'Bruenor Battlehammer'},
	{id: 5, name: 'Commander Shephard'},
	{id: 6, name: 'Dr. Liara T\'Soni'},
	{id: 7, name: 'Gandalf the White'},
	{id: 8, name: 'Samwise Gamgee'},
	{id: 9, name: 'Peregrin Took'},
	{id: 10, name: 'Meriadoc Brandybuck'}
];

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li [class.selected]="hero === selectedHero" *ngFor="let hero of heroes" (click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<hero-detail [hero]="selectedHero"></hero-detail>
		`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`]
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}