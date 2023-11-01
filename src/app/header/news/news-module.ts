import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';

export const NewsModule = [CommonModule, NzTableModule, HttpClientModule];
