import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {

  productsArray:any=[]
  categoryArray:any=[]
  searchString:any=""

  constructor(private ps:ProductService){ }

  ngOnInit(): void{
    
    this.ps.getAllProduct().subscribe((result:any)=>{
      
      this.productsArray=result
      console.log(this.productsArray);

      this.categoryArray=this.productsArray

      this.ps.search.subscribe((value:any)=>{
        // console.log(value);
        this.searchString=value
        
      })
      
    })
  }

  categoryProduct(catId:any){
    this.categoryArray=this.productsArray.filter((item:any)=>
      item.categoryId==catId||catId=="")
      console.log(this.categoryArray);

  }
}
