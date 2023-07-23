import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor (private fb:FormBuilder, private ps:ProductService, private router:Router) { }

  ngOnInit(): void{ }

  // model form for add 
  addForm=this.fb.group({
    pid:[''],
    pname:[''],
    catId:[''],
    desc:[''],
    price:[''],
    is_avail:[''],
    prodImg:[''],
    rating:[''],
    review:[''],
    vendorName:[''],
    warranty:['']
  })

  add(){
  var  path=this.addForm.value
  var proData = {
    id: path.pid,
    productName:path.pname,
    categoryId: path.catId,
    Description:path.desc,
    price:path.price,
    productImage:path.prodImg,
    rating:path.rating,
    review:path.review,
    vendorName:path.vendorName,
    warranty:path.warranty

  }
  this.ps.addProduct(proData).subscribe((result:any)=>{
    alert('product added')
    this.router.navigateByUrl('')
  })
  }
  

}

