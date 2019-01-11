import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';

/**
 * `module` for declaring, importing and exporting features that are used across the whole app.
 */
@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, TranslateModule],
    exports: [TranslateModule, HeaderComponent]
})
export class SharedModule {}
