import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {GraphicsPage} from "../graphics/graphics";

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = GraphicsPage;

	constructor() {

	}
}
