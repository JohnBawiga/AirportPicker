import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgSelectModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'airportpicker';
  cities = [
    {
      id: 1,
      name: 'Sydney',
      name_2: 'Australia',
      code: 'AUD',
      avatar:
        '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
      group: 'Geolocation',
    },
    {
      id: 2,
      name: 'Bacolod',
      name_2: 'Philippines',
      code: 'PH',
      avatar:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
      group: 'All Locations',
    },
    {
      id: 3,
      name: 'Manila',
      name_2: 'Philippines',
      code: 'PH',
      avatar:
        '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
      group: 'All Locations',
    },
    {
      id: 4,
      name: 'Sydney',
      name_2: 'Australia',
      code: 'AUD',
      avatar:
        '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
      group: 'All Locations',
    },
  ];
  selectedCity = this.cities[0].name;
ngOnInit() {}

}
