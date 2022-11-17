import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { AuthGuardService } from './shared/service/auth-guard/auth-guard.service';

import { ReportHomeComponent } from './controller/report/report-home/report-home.component';
import { ReportSlaComponent } from './controller/report/report-sla/report-sla.component';
import { ReportPerekrutanMerchantComponent } from './controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component';
import { InquiryClientComponent } from './controller/cmr/inquiry-client/inquiry-client.component';
import { ResendReportComponent } from './controller/cmr/resend-report/resend-report.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Laporan',
      title: 'Laporan'
    },
    children: [
      {
        path: '',
        component: ReportHomeComponent,
      },
      {
        path: 'report-sla',
        data: {
          breadcrumb: 'Laporan SLA'
        },
        children: [
          {
            path: '',
            component: ReportSlaComponent,
          },

        ],
      },
      {
        path: 'report-perekrutan-merchant',
        data: {
          breadcrumb: 'Laporan Perekrutan Merchant'
        },
        children: [
          {
            path: '',
            component: ReportPerekrutanMerchantComponent,
          },

        ],
      },
    ]
  },
  {
    path: 'cmr',
    canActivate: [AuthGuardService],
    data: {
      title: 'Menu CMR',
      breadcrumb: 'Menu CMR'
    },
    children: [
      {
        path: 'resend-report',
        data: {
          breadcrumb: 'Refresh Resend Report'
        },
        children: [
          {
            path: '',
            component: ResendReportComponent,
          },
        ],
      },
      {
        path: 'inquiry-client',
        data: {
          breadcrumb: 'Inquiry Client'
        },
        children: [
          {
            path: '',
            component: InquiryClientComponent,
          },

        ],
      },
    ]
  },
  {
    path: 'forbidden',
    data:
    {
      title: 'Error Code 403: Forbidden',
      breadcrumb: 'Forbidden'
    },
    component: ForbiddenComponent,
  },
  { path: '', redirectTo: 'data-master', pathMatch: 'full' },
  { path: '**', redirectTo: 'data-master', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

