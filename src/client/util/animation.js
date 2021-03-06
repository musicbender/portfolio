import { hasWindow } from './util';

export const startSequence = (options, func) => {
  if (!options.length && options.length < 1) {
    return;
  }

  if (!hasWindow()) {
    return;
  }

  const conf = {
    length: options.length || 0,
    delay: options.delay || 0,
    interval: options.interval || 500,
    index: options.index || 0
  }

  requestTimeout(() => {
    let i = conf.index;
    const intvl = requestInterval(() => {
      ++i;
      func(i);

      if (i >= (conf.length - 1)) {
        clearRequestInterval(intvl);
      }
    }, conf.interval);
  }, conf.delay)
}
