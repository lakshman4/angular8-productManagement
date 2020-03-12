import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collection = [
		{'name': 'Smith','address': 'Australia','skills': 'PHP'},
		{'name':'William', 'address':'England','skills': 'Java'},
		{'name':'Andy', 'address':'Africa','skills': 'Perl'},
		{'name':'Jhon', 'address':'Africa','skills': 'JavaScript'},
		{'name':'Flower', 'address':'Brazil','skills': 'Angular'},
		{'name':'Grant', 'address':'India','skills': 'JavaScript'},
		{'name':'Root', 'address':'Sri Lanka','skills': 'PHP'},
		{'name':'Joy', 'address':'Canada','skills': 'NodeJS'},
		{'name':'Samson', 'address':'India','skills': 'JavaScript'},
		{'name':'Sanju', 'address':'India','skills': 'PHP'},
		{'name':'Rocky', 'address':'America','skills': 'PHP'},
		{'name':'Monty', 'address':'England','skills': 'Angular'},
		{'name':'Peter', 'address':'England','skills': 'JavaScript'},
		{'name':'Fleming', 'address':'Newziland','skills': 'PHP'},
		{'name':'Astle', 'address':'England','skills': 'Angular'},
		{'name':'Chris', 'address':'France','skills': 'JavaScript'},
		{'name':'Butler', 'address':'England','skills': 'PHP'}
	];
  title = 'upaani';
  paginate ={}
}
