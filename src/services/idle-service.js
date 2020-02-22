// 

let _timeout
let _idleCallback = null
let _notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart' ]
let _TEN_MINUTES = 10 * 60 * 1000;

const IdleService = {
    setIdleCallback(idleCallback) {
        _idleCallback = idleCallback;
    },
    resetTimer(event){
        clearTimeout(_timeout);

        _timeout = setTimeout(_idleCallback, _TEN_MINUTES)
    },
    regiserIdleTimerResets() {
        _notIdleEvents.forEach(event =>
          document.addEventListener(event, IdleService.resetTimer, true)
        )
      },
      unRegisterIdleResets() {
        clearTimeout(_timeout)
        _notIdleEvents.forEach(event =>
          document.removeEventListener(event, IdleService.resetIdleTimer, true)
        )
      },
}

export default IdleService