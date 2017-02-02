import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TruncateCharactersPipe } from './truncate-characters.pipe';
import { TruncateWordsPipe } from './truncate-words.pipe';
import { LoadingComponent } from './loading/loading.component';
import { UserService } from './user.service';

import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService } from './filter-text/filter-text.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TruncateCharactersPipe,
    TruncateWordsPipe,
    LoadingComponent,
    FilterTextComponent,
  ],
  providers: [FilterTextService],
  exports: [
    TruncateCharactersPipe,
    TruncateWordsPipe,
    LoadingComponent,
    FilterTextComponent,
  ],
})
export class IPaaSCommonModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IPaaSCommonModule,
      providers: [
        UserService,
      ],
    };
  }

}
