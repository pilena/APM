import {Pipe, PipeTransform}  from '@angular/core';

@Pipe ({
    name: 'convertToSpaces'
    // name is used in html template
})
export class ConvertToSpacesPipe implements PipeTransform {
    // transform is interface method (already written, we just use it)
    transform(value: string, character: string): string{
        // value is value we transform, chracter is character we give to be transformed and
        //  :string is expected return type
        return value.replace(character, ' ');
    }
}