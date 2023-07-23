import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  pid:any
  pdata:any={}

  constructor(private ar:ActivatedRoute, private ps:ProductService,private router:Router){ 
  }

  ngOnInit(): void{
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      console.log(this.pid);
      
    })


// api call
   this.ps.getProduct(this.pid).subscribe((result:any)=>{
  // console.log(result);
  this.pdata=result
  console.log(this.pdata);

  })
  }

  deleteProduct(){
    this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
      alert('product deleted')
      this.router.navigateByUrl('')
    })
  }

}
