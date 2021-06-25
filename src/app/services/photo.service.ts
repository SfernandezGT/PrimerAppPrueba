import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(
    private camera: Camera,
    private storage: Storage,
    private readonly http: HttpClient
  ) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Add new photo to gallery
        this.photos.unshift({
          data: "data:image/jpeg;base64," + imageData,
        });

        // Save all photos for later viewing
        this.storage.set("photos", this.photos);
      },
      (err) => {
        // Handle error
        console.log("Camera issue: " + err);
      }
    );
  }

  getUsuarios(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  loadSaved() {
    this.storage.get("photos").then((photos) => {
      this.photos = photos || [];
    });
  }
}

class Photo {
  data: any;
}
