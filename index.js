import {v4 as uuid4} from 'uuid';
import {format} from 'date-fns';


console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'));

console.log(uuid4());