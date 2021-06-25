import { Component } from "@angular/core";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  public CoordenadasLongitud;
  public CoordenadasLatitud;
  public CoordenadasAltitud;
  constructor(private readonly geolocation: Geolocation) {}
  ngOnInit() {
    this.geolocalizacionNative();
  }

  geolocalizacionNative() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(geoposition);
      let longitud = geoposition.coords.longitude;
      let altitud = geoposition.coords.altitude;
      let latitud = geoposition.coords.latitude;
      console.log(longitud);
      console.log(altitud);
      console.log(latitud);

      this.CoordenadasLongitud = geoposition.coords.longitude;
      this.CoordenadasLatitud = geoposition.coords.latitude;
      if (geoposition.coords.altitude == null) {
        this.CoordenadasAltitud = 0;
      } else {
        this.CoordenadasAltitud = geoposition.coords.altitude;
      }
    });
  }
}
