import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public usuarios;
  constructor(private readonly servicioUsuarios: PhotoService) { }

  ngOnInit() {
    this.UsuariosObtener();
  }

  UsuariosObtener(){
    this.servicioUsuarios.getUsuarios().subscribe(res => {
      this.usuarios = res;
      console.log(this.usuarios);
      
    },error =>{
      console.log(error);
      
    });
  }

}
