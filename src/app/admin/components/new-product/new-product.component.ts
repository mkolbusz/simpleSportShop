import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../../app-settings';
import { FileHolder } from 'angular2-image-upload/lib/image-upload/image-upload.component';
import { NotificationsService } from 'angular2-notifications';
import { Product } from '../../../common/models/product';
import { Category } from '../../../common/models/category';
import { ProductsService } from '../../../public/services/products.service';
import { CategoriesService } from '../../../public/services/categories.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  urlAddress = AppSettings.API_URL + '/products/image/upload';

  @Input() product: Product;
  categories: Category[];
  pathToFiles = [];
  isNewCategoryModalOpen = false;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private notificationService: NotificationsService) {
      this.product = new Product(null, '', '', 0, 0, [], '');
      categoriesService.categoriesState.subscribe(categories => {
        this.categories = categories;
      });
  }

  ngOnInit() {
  }

  saveProduct() {
    this.productsService.saveNewProduct(this.product).subscribe(
      res => {
        this.product = new Product(null, '', '', 0, 0, [], '');
        this.pathToFiles = [];
        this.notificationService.success('Dodawanie produktu', 'Produkt został dodany pomyślnie');
      },
      err => {
        this.notificationService.error('Dodawanie produktu', 'Wystąpił błąd podczas dodawania produktu');
      });
  }

  onUploadFinished(file: FileHolder) {
    const image = JSON.parse(file.serverResponse['_body']);
    this.product.images.push(image.filename);
  }

  handleNewCategory() {
    this.categories.push(new Category(this.product.category));
    this.isNewCategoryModalOpen = false;
  }

  onRemoved(file: FileHolder) {
    const image = JSON.parse(file.serverResponse['_body']);
    const index = this.product.images.findIndex(img => img === image.filename);
    this.product.images.splice(index, 1);
    this.productsService.removeUploadedPhoto(image.filename).subscribe(
      res => {
      },
      err => {
      }
    );
  }

}
