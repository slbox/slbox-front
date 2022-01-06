/**
 * Browser scroll event
 */
export function scrollDown(height, allTime, time = 1) {
  let scrollTop = 0;
  const secondHeight = height / allTime;
  const timer = setInterval(() => {
    scrollTop += secondHeight;
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
    if (scrollTop >= height) {
      clearInterval(timer);
    }
  }, time);
}

export function scrollUp(height, allTime, time = 1) {
  let scrollTop = height;
  const secondHeight = height / allTime;
  const timer = setInterval(() => {
    scrollTop -= secondHeight;
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
    if (scrollTop <= 0) {
      clearInterval(timer);
    }
  }, time);
}
