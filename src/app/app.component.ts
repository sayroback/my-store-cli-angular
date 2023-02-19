import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	name = 'Juan';
	age = 23;
	img = 'https://source.unsplash.com/random';
	btnDisabled = true;
	person = {
		name: 'Juan',
		age: 23,
		img: 'https://source.unsplash.com/random',
	};
	scroll = 0;
	names: string[] = ['Nicolas', 'Juan', 'Mr. Robot', 'Batman'];
	newName = '';
	products: Product[] = [
		{ name: 'producto 1', price: 12, image: this.img },
		{ name: 'producto 2', price: 42, image: this.img },
		{ name: 'producto 3', price: 72, image: this.img },
		{ name: 'producto 4', price: 22, image: this.img },
	];

	toggleButton() {
		this.btnDisabled = !this.btnDisabled;
	}

	increaseAge() {
		this.person.age++;
	}

	onScroll(event: Event) {
		const element = event.target as HTMLElement;
		this.scroll = element.scrollTop;
	}

	onKeyUp(event: Event) {
		const element = event.target as HTMLInputElement;
		this.person.name = element.value;
	}

	addName() {
		this.names.push(this.newName);
		this.newName = '';
	}

	deleteName(index: number) {
		this.names.splice(index, 1);
	}
}
