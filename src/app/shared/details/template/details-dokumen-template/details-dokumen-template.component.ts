import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-details-dokumen-template',
  templateUrl: './details-dokumen-template.component.html',
  styleUrls: ['./details-dokumen-template.component.css']
})
export class DetailsDokumenTemplateComponent implements OnInit {
  @Input() dataList;
  
  constructor(private modalService: NgbModal,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }



  //Modal
  imageActive;
  filetype;
  documentTypes;
  angle = 0;
  indexActive = 0;
  dokumenImageModal = null;
  MAX_PIXEL = 1024;

  openModal(content, index)
  {
    this.indexActive = index;
    this.dokumenImageModal = this.modalService.open(content, {size : 'lg', windowClass: 'modal-document'});
    this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
    this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
    let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
    let values = valueDocument.split(",");
    this.getDocumentTypes(values);
  }

  closeModal()
  {
    this.dokumenImageModal.close();
  }

  nextImage()
  {
    this.indexActive++;
    if(this.indexActive > this.dataList.length-1)
    {
      this.indexActive = 0;
    }
    this.imageActive =  this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
    this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
    let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
    let values = valueDocument.split(",");
    this.getDocumentTypes(values);
  }

  prevImage()
  {
    this.indexActive--;
    if(this.indexActive < 0)
    {
      this.indexActive = this.dataList.length-1;
    }
    this.imageActive =  this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
    this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
    let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
    let values = valueDocument.split(",");
    this.getDocumentTypes(values);
  }

  getDocumentTypes(values){
    let documentTypes = "";
    for(let i = 0; i< values.length; i++)
      {
        if(values[i]!="")
        {
          if(values[i].toUpperCase() == 'FDM'.toUpperCase())
          {
            documentTypes = documentTypes + "FDM, "
          }
          if(values[i].toUpperCase() == 'Paspor'.toUpperCase())
          {
            documentTypes = documentTypes + "Paspor Pemilik, "
          } 
          if(values[i].toUpperCase() == 'Paspor Pejabat 1'.toUpperCase())
          {
            documentTypes = documentTypes + "Paspor Pejabat 1, "
          } 
          if(values[i].toUpperCase() == 'Paspor Pejabat 2'.toUpperCase())
          {
            documentTypes = documentTypes + "Paspor Pejabat 2, "
          } 
          if(values[i].toUpperCase() == 'Paspor Penerima Kuasa'.toUpperCase())
          {
            documentTypes = documentTypes + "Paspor Penerima Kuasa, "
          } 
          if(values[i].toUpperCase() == 'KTP'.toUpperCase())
          {
            documentTypes = documentTypes + "KTP/KITAS/KITAP Pemilik, "
          } // done
          if(values[i].toUpperCase() == 'NPWP'.toUpperCase())
          {
            documentTypes = documentTypes + "NPWP, "
          }
          if(values[i].toUpperCase() == 'SIUP/BAPU'.toUpperCase())
          {
            documentTypes = documentTypes + "SIUP/BAPU, "
          }
          if(values[i].toUpperCase() == 'Surat Keterangan Pameran'.toUpperCase())
          {
            documentTypes = documentTypes + "Surat Keterangan Pameran, "
          }
          if(values[i].toUpperCase() == 'RBA'.toUpperCase())
          {
            documentTypes = documentTypes + "RBA, "
          }
          if(values[i].toUpperCase() == 'NIB'.toUpperCase())
          {
            documentTypes = documentTypes + "NIB, "
          }
          if(values[i].toUpperCase() == 'KTP Penerima Kuasa'.toUpperCase())
          {
            documentTypes = documentTypes + "KTP/KITAS/KITAP Penerima Kuasa, "
          }
          if(values[i].toUpperCase() == 'Kuasa Pengajuan'.toUpperCase())
          {
            documentTypes = documentTypes + "Kuasa Pengajuan, "
          }
          if(values[i].toUpperCase() == 'Surat Kuasa Rekening'.toUpperCase())
          {
            documentTypes = documentTypes + "Surat Kuasa Rekening, "
          }
          if(values[i].toUpperCase() == 'Akta Perubahan Terakhir'.toUpperCase())
          {
            documentTypes = documentTypes + "Akta Perubahan Terakhir, "
          }
          if(values[i].toUpperCase() == 'SK / Menkeh'.toUpperCase())
          {
            documentTypes = documentTypes + "SK Menkeh, "
          }
          if(values[i].toUpperCase() == 'KTP Pejabat 1'.toUpperCase())
          {
            documentTypes = documentTypes + "KTP/KITAS/KITAP Pejabat 1, "
          }
          if(values[i].toUpperCase() == 'KTP Pejabat 2'.toUpperCase())
          {
            documentTypes = documentTypes + "KTP/KITAS/KITAP Pejabat 2, "
          }
          if(values[i].toUpperCase() == 'PKS'.toUpperCase())
          {
            documentTypes = documentTypes + "PKS/Surat Pernyataan, "
          }
          if(values[i].toUpperCase() == 'Akta Pendirian'.toUpperCase())
          {
            documentTypes = documentTypes + "Akta Pendirian, "
          }
          if(values[i].toUpperCase() == 'Foto Lokasi Usaha'.toUpperCase())
          {
            documentTypes = documentTypes + "Foto Lokasi Usaha, "
          }
          if(values[i].toUpperCase() == 'Form Close'.toUpperCase())
          {
            documentTypes = documentTypes + "Form Close, "
          }
          if(values[i].toUpperCase() == 'Lainnya'.toUpperCase())
          {
            documentTypes = documentTypes + "Lainnya, "
          }
          if(''+values[i].trim().toUpperCase() === 'Dokumen Merchant Apps'.toUpperCase() || values[i].toUpperCase() == "Dokumen Merchant Apps".toUpperCase() )
          {
            documentTypes = documentTypes + "Dokumen Merchant Apps, "
          }
          if(values[i].toUpperCase() == "FEME".toUpperCase())
          {
            documentTypes = documentTypes + "FEME, "
          }
        }
      }

      documentTypes = documentTypes.substring(0, documentTypes.length - 2);
      this.documentTypes = documentTypes;
  }

  link() {
    let url = this.dataList[this.indexActive]['name'];
    window.open(
        url,
        '_blank'
    );
  }

  rotate() {
    this.angle = (this.angle+90)%360;
    let url = this.dataList[this.indexActive]['name'];
    let img = <HTMLCanvasElement>$(`<img class="bg-white img-thumbnail" src="${url}" crossOrigin="anonymous">`).get(0);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const pixel = img.width > img.height ? img.width : img.height;
    const ratio = this.MAX_PIXEL / pixel;
    let width = img.width * ratio
    let height = img.height * ratio;

    canvas.width = height;
    canvas.height = width;

    ctx.translate(height, 0);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(img, 0, 0, width, height);
    let file = canvas.toDataURL();
    url = URL.createObjectURL(this.b64toFile(file, null, null));
    this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.dataList[this.indexActive]['name'] = url;
  }

  b64toFile (base64, contentType, sliceSize) {
    base64 = base64.split(',');
  
    contentType = contentType || base64[0].substring(base64[0].indexOf(':') + 1, base64[0].indexOf(';')) || '';
    sliceSize = sliceSize || 512;
  
    const byteCharacters = atob(base64[1]);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
  
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      byteArrays.push(new Uint8Array(byteNumbers));
    }
  
    return new Blob(byteArrays, { type: contentType });
  }
}
