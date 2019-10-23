import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})

export class VistaClientesComponent implements OnInit {
  private cliente : Cliente;
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;
  
  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.obtener();
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  obtener(){    
     this.clienteService.obtener().subscribe(
        Response=>{
          this.cliente = Response;
          console.log(this.cliente);
        },
        Error=>{
          console.log("error");
        }
      );
  }
}
