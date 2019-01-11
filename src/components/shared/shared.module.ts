import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * `module` for declaring, importing and exporting features that are used across the whole app.
 */
@NgModule({
    declarations: [],
    imports: [CommonModule, TranslateModule],
    exports: [TranslateModule]
})
export class SharedModule {}
