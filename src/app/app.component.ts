import { Component } from '@angular/core';

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
}
