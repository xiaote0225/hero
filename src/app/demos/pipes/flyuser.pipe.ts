import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../components/pipe/pipe.component';

@Pipe({
  name: 'flyuser'
})
export class FlyuserPipe implements PipeTransform {

  transform(userList: User[]): User[] {
    return userList.filter(item => item.canFly);
  }

}
