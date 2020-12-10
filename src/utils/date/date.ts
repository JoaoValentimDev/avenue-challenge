import DateTime from './DateTime';
import Clock  from './Clock.interface';

export function showFullDateNow() : String {
    const { fullDate } : Clock = new DateTime().clock;
    const { fullTime } : Clock = new DateTime().clock;

    return `${fullDate} - ${fullTime}`;
} 