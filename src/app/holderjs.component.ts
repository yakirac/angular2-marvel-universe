import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

var Holder = require('holderjs');

@Component({
	selector: 'hjs',
	templateUrl: 'holderjs.component.html'
})

export class HolderJsComponent implements OnInit {
	@Input() heroId: string;
	@Input() imgSrc: string;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		var heroDiv = document.getElementById(this.heroId);
		Holder.addImage(this.imgSrc, heroDiv).run();
	}
}

