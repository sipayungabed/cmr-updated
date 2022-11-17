import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { TopBarComponent } from './shared/table/component/top-bar/top-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { InputTextComponent } from './shared/form/component/input-text/input-text.component';
import { InputRadioComponent } from './shared/form/component/input-radio/input-radio.component';
import { InputSelectComponent } from './shared/form/component/input-select/input-select.component';
import { InputModalComponent } from './shared/form/component/input-modal/input-modal.component';
import { FormTemplateComponent } from './shared/form/template/form-template/form-template.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { TableModalComponent } from './shared/form/component/input-modal/table-modal/table-modal.component';
import { InputNumberComponent } from './shared/form/component/input-number/input-number.component';
import { NonInputComponent } from './shared/form/component/non-input/non-input.component';
import { InputTextAreaComponent } from './shared/form/component/input-text-area/input-text-area.component';
import { InputAddressComponent } from './shared/form/component/input-address/input-address.component';
import { DetailsSimpleTemplateComponent } from './shared/details/template/details-simple-template/details-simple-template.component';

import { DatePipe, CurrencyPipe, DecimalPipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DetailsDualColTemplateComponent } from './shared/details/template/details-dual-col-template/details-dual-col-template.component';

import { DetailDefaultComponent } from './shared/details/component/general/detail-default/detail-default.component';
import { DetailAddressComponent } from './shared/details/component/general/detail-address/detail-address.component';
import { DetailMultiValueComponent } from './shared/details/component/general/detail-multi-value/detail-multi-value.component';
import { DetailMultiJsonLabelComponent } from './shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component';

import { DetailControllerComponent } from './shared/details/component/detail-controller/detail-controller.component';
import { DetailDokumenComponent } from './shared/details/component/custom/detail-dokumen/detail-dokumen.component';

import { DetailFasilitasDebitComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component';
import { DetailFasilitasKreditComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component';
import { DetailFasilitasFlazzComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component';
import { DetailFasilitasLainnyaComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component';
import { DetailFasilitasFiturComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component';
import { DetailFasilitasFiturControllerComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component';
import { DetailTableMdrComponent } from './shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component';
import { DetailFasilitasComponent } from './shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component';
import { DetailAddressTwoComponent } from './shared/details/component/general/detail-address-two/detail-address-two.component';
import { DetailsFasilitasCicilanNolTemplateComponent } from './shared/details/template/details-fasilitas-cicilan-nol-template/details-fasilitas-cicilan-nol-template.component';
import { DetailsFasilitasECommerceTemplateComponent } from './shared/details/template/details-fasilitas-e-commerce-template/details-fasilitas-e-commerce-template.component';
import { DetailsDataTerminalTemplateComponent } from './shared/details/template/details-data-terminal-template/details-data-terminal-template.component';
import { DetailsDokumenTemplateComponent } from './shared/details/template/details-dokumen-template/details-dokumen-template.component';
import { DetailsFasilitasDefaultTemplateComponent } from './shared/details/template/details-fasilitas-default-template/details-fasilitas-default-template.component';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { TableApiComponent } from './shared/table/template/table-api/table-api.component';
import { TableNonApiComponent } from './shared/table/template/table-non-api/table-non-api.component';
import { ChangeValuePipe } from './shared/pipe/change-value/change-value.pipe';
import { FormControllerComponent } from './shared/form/form-controller/form-controller.component';
import { DetailTextAreaDisabledComponent } from './shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component';
import { DetailTextDisabledComponent } from './shared/details/component/general/detail-text-disabled/detail-text-disabled.component';
import { DetailRadioChildrenDisabledComponent } from './shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component';
import { LoadingBarComponent } from './shared/table/component/loading-bar/loading-bar.component';
import { NotificationBarComponent } from './shared/table/component/notification-bar/notification-bar.component';
import { HeaderBarComponent } from './shared/table/component/header-bar/header-bar.component';
import { CookieService } from 'ngx-cookie-service';
import { CustomTablePipe } from './shared/pipe/custom-table/custom-table.pipe';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { HttpInterceptorService } from './shared/service/http-interceptor/http-interceptor.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataTerminalCustomPipe } from './shared/pipe/data-terminal-custom/data-terminal-custom.pipe';

import { ReportSlaComponent } from './controller/report/report-sla/report-sla.component';
import { ReportPerekrutanMerchantComponent } from './controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component';
import { ReportHomeComponent } from './controller/report/report-home/report-home.component';
import { MultipleCheckboxComponent } from './shared/form/component/multiple-checkbox/multiple-checkbox.component';
import { InputDateComponent } from './shared/form/component/input-date/input-date.component';
import { ResendReportComponent } from './controller/cmr/resend-report/resend-report.component';
import { InquiryClientComponent } from './controller/cmr/inquiry-client/inquiry-client.component';
import { CardClientComponent } from './shared/card/card-client/card-client.component';
import { CardFilterComponent } from './shared/card/card-filter/card-filter.component';
import { MatButton } from '@angular/material/button';
import { ClickOutsideDirective } from './directive/clickOutside';


registerLocaleData(localeId, 'id');




@NgModule({
  declarations: [
    ClickOutsideDirective,
    AppComponent,
    BreadcrumbsComponent,
    TopBarComponent,
    SidebarComponent,
    NavbarComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputModalComponent,
    FormTemplateComponent,
    TableModalComponent,
    InputNumberComponent,
    NonInputComponent,
    InputTextAreaComponent,
    InputAddressComponent,
    DetailsSimpleTemplateComponent,
    DetailDefaultComponent,
    DetailAddressComponent,
    DetailMultiValueComponent,
    DetailMultiJsonLabelComponent,
    DetailControllerComponent,
    DetailDokumenComponent,
    DetailFasilitasComponent,
    DetailTableMdrComponent,
    DetailFasilitasDebitComponent,
    DetailFasilitasKreditComponent,
    DetailFasilitasFlazzComponent,
    DetailFasilitasLainnyaComponent,
    DetailFasilitasFiturComponent,
    DetailFasilitasFiturControllerComponent,
    TableNonApiComponent,
    DetailsDualColTemplateComponent,
    DetailAddressTwoComponent,
    DetailsFasilitasCicilanNolTemplateComponent,
    DetailsFasilitasECommerceTemplateComponent,
    DetailsDataTerminalTemplateComponent,
    DetailsDokumenTemplateComponent,
    DetailsFasilitasDefaultTemplateComponent,
    TableApiComponent,
    ChangeValuePipe,
    FormControllerComponent,
    DetailTextAreaDisabledComponent,
    DetailTextDisabledComponent,
    DetailRadioChildrenDisabledComponent,
    LoadingBarComponent,
    NotificationBarComponent,
    HeaderBarComponent,
    CustomTablePipe,
    ForbiddenComponent,
    DataTerminalCustomPipe,

    ReportSlaComponent,
    ReportPerekrutanMerchantComponent,
    ReportHomeComponent,
    MultipleCheckboxComponent,
    InputDateComponent,
    ResendReportComponent,
    InquiryClientComponent,
    CardClientComponent,
    CardFilterComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' }},
    { provide: LOCALE_ID, useValue: "id-ID" },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: 'AuthGuardService', useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true},
    CookieService,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    ChangeValuePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
