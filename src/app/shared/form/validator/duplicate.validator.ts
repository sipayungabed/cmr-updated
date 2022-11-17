import { SharedService } from '../../service/api-shared/shared.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, AbstractControl, ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

export class duplicate
{
    duplicateAsyncValidator(SharedService: SharedService, urlDuplicate, valueBefore): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
          return SharedService.getData(urlDuplicate, control.value).pipe(
            map((result) => result ? 
                (result.body.content.status == 204 || control.value == valueBefore) ? null : {'duplicate': true} : 
                {'errorService': true})
          );
        };
      }
}