export default function TimeSince({date}) {

    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };
  
    for (let [unit, secondsInUnit] of Object.entries(intervals)) {
      if (seconds >= secondsInUnit) {
        const interval = Math.floor(seconds / secondsInUnit);
        return `${interval} ${unit}${interval === 1 ? ' ago' : 's ago'}`;
      }
    }
    return 'just now';
  }