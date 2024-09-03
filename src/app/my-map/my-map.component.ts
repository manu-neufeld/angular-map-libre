import { Component } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { FormsModule } from '@angular/forms';
import {
  RasterLayerSpecification,
  RasterSourceSpecification,
  StyleSpecification,
} from 'maplibre-gl';



@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrl: './my-map.component.css',
  standalone: true,
  imports: [MapComponent, FormsModule],
})
export class MyMapComponent {
  public map!: Map;

  layerId = 'streets';
  
  style: string | StyleSpecification | undefined;
  zoom: [number] | undefined;
  center: [number, number] | undefined;



  ngOnInit() {
    this.map = new Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/aquarelle/style.json?key=GkPf1UrE0prMPbHkzViy',

    });

    this.addPointToMadrid();
  }

  addPointToMadrid() {
    new maplibregl.Marker()
      .setLngLat([-3.8196239, 40.4381311])
      .addTo(this.map);

    this.mapGeoJsonAdd();
  }

  mapGeoJsonAdd() {
    this.map.on('load', () => {
      this.map.addSource('xample_points', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/geoinnova/Points/master/points.json'
      });

      this.map.addLayer({
        'id': 'xample_points',
        'type': 'circle',
        'source': 'xample_points',

        'paint': {
          'circle-color': '#B42222',
          "circle-radius": [
            "interpolate", ["linear"], ["zoom"],
            5, 1,
            10, 5
          ]
        }
      });
    });
  }
}