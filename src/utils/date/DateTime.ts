import moment from 'moment';
import 'moment-timezone';

export default class DateTime {
    clock: any;
    constructor() {
        const now = moment().tz('America/Sao_Paulo');
        // set brazil time-zone
        moment.locale('pt-br');
        this.clock = {
            day: now.format('DD'),
            month: now.format('MM'),
            year: now.format('YYYY'),
            hour: now.format('hh'),
            minute: now.format('mm'),
            secound: now.format('ss'),
            fullDate: now.format('DD/MM/YYYY'),
            fullTime: now.format('hh:mm:ss'),
        }
    }
}