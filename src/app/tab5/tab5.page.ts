import { Component, OnInit } from "@angular/core";
import { Contact, Contacts } from "@ionic-native/contacts/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab5",
  templateUrl: "./tab5.page.html",
  styleUrls: ["./tab5.page.scss"],
})
export class Tab5Page implements OnInit {
  myContacts: Contact[] = [];
  constructor(
    private readonly vibrate: Vibration,
    private readonly contacts: Contacts
  ) {}

  ngOnInit() {
  }

  vibratemetod() {
    this.vibrate.vibrate(3000);
    this.vibrate.vibrate([2000, 1000, 2000]);
    console.log("vibrar");
    
  }

  cargarContactos() {
    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
    };
    this.contacts.find(['*'], options).then((contacts: Contact[])=>{
      this.myContacts = contacts;
      console.log(this.myContacts);
      
    });

  }
}
