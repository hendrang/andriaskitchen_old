import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myCategory'
})

export class FilterPipe implements PipeTransform {
    transform(value, category: string) {
        if (value == null) {
            return null;
        } else if (category === '') {
            return value;
        }

        return value.filter(item => item.Category.toLowerCase() === category);
    }
}
