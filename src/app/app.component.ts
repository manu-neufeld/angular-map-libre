import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyMapComponent } from "./my-map/my-map.component";
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { Map, NavigationControl } from 'maplibre-gl';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyMapComponent, MapComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'My-map-app';
}
