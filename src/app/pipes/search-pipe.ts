import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform{
    transform(values: any, {query, type='body'}) {
        if (values === undefined)
            return;
        
        if (query !== '') {
            let comments: Array<Object>;
            const regExp = new RegExp(query, 'i');
            
            comments = values.filter((d) => {
                if (d[type].indexOf(query) > -1) {
                    d['alias'] = d[type].replace(regExp, '<span class="highlight">' + regExp.exec(d[type]) + '</span>')
                    return d;
                }
            })
            return comments;
        } else {
            for (let i = 0; i < values.length; i++) {
                values[i]['alias'] = values[i][type];
            }
            return values;
        }
    }
}