let lastSwiped = 0;

class Touch {
  constructor(handler, touchEvent) {
    this.handler = handler;
    this.identifier = touchEvent.identifier;
    this.startTime = Date.now();
    this.x = Math.round(touchEvent.pageX);
    this.y = Math.round(touchEvent.pageY);
    this.startSpot = { x: this.x, y: this.y };
    this.endSpot = {};
  }
  getDuration() {
    return Date.now() - this.startTime;
  }
  getDistance() {
    let distance = {};
    distance.x = this.x - this.startSpot.x;
    distance.y = this.y - this.startSpot.y;
    return distance;
  }
  getSwipe() {
    let duration = this.getDuration();
    let distance = this.getDistance();
    if (distance.y <= this.handler.gestures.swipe.north.distance && duration <= this.handler.gestures.swipe.north.duration) {
      return 'north';
    }
    if (distance.y >= this.handler.gestures.swipe.south.distance && duration <= this.handler.gestures.swipe.south.duration) {
      return 'south';
    }
    if (distance.x <= this.handler.gestures.swipe.west.distance && duration <= this.handler.gestures.swipe.west.duration) {
      return 'west';
    }
    if (distance.x >= this.handler.gestures.swipe.east.distance && duration <= this.handler.gestures.swipe.east.duration) {
      return 'east';
    }
  }
}
export default class SwipeDetector {
  constructor(app) {
    console.log('set app to', app)
    this.app = app;
    this.bound = false;
    this.currentTouches = [];
    this.swipedThisTouch = false;
    this.gestures = {
      'tap': {
        'time': 75,
        'distance': 2
      },
      'swipe': {
        'north': {
          'distance': -5,
          'duration': 500
        },
        'south': {
          'distance': 5,
          'duration': 500
        },
        'west': {
          'distance': -40,
          'duration': 100
        },
        'east': {
          'distance': 40,
          'duration': 100
        }
      }
    };
    this.swipeActions = {
      north: () => {
        this.app.switchProjects(null, 1);
      },
      south: () => {
        this.app.switchProjects(null, -1);
      },
      west: () => {
        // this.app.switchProjects(null, 1);        
      },
      east: () => {
        // this.app.switchProjects(null, -1);        
      }
    };
  }
  touchStart(event) {
    this.currentTouches.push(new Touch(this, event.targetTouches[0]));
  }
  touchMove(event) {
    let movingTouches = [];
    for (let i = 0; i < event.targetTouches.length; i++) {
      let movingTouch = event.targetTouches[i];
      let touchCopy = { 'identifier': movingTouch.identifier, 'pageX': movingTouch.pageX, 'pageY': movingTouch.pageY };
      movingTouches.push(touchCopy);
    }
    movingTouches.forEach(function (touchEvent) {
      let touchObject = new Touch(this, touchEvent);
      // take each touch that moved...
      this.currentTouches.forEach(function (existingTouch, j) {
        //...find it in the list...
        if (touchObject.identifier === existingTouch.identifier) {
          //...replace the old {x,y} with the new one
          this.currentTouches[j].x = touchObject.x;
          this.currentTouches[j].y = touchObject.y;

          // check if it has completed a swipe
          let swiped = this.currentTouches[j].getSwipe();
          if (swiped && !this.swipedThisTouch) {
            this.swipeActions[swiped]();
            this.swipedThisTouch = true;
            lastSwiped = window.performance.now();
            console.log('SWIPED!')
          }
        }
      }, this);
    }, this);
  }
  touchEnd(event) {
    Array.from(event.targetTouches).forEach(function (touch, i) {
      // var duration = this.currentTouches[i].getDuration();
      // var distance = this.currentTouches[i].getDistance();
      // // if (duration <= this.gestures.tap.time
      // //   && distance.x <= this.gestures.tap.distance && distance.y < this.gestures.tap.distance) {
      // //   true;
      // // }
      this.currentTouches.splice(i, 1);
    },this);
    this.swipedThisTouch = false;
  }
  setInputs(el) {
    el.addEventListener('touchstart', this.touchStart.bind(this), { passive: true });
    el.addEventListener('touchmove', this.touchMove.bind(this), { passive: true });
    el.addEventListener('touchend', this.touchEnd.bind(this), true);
    // this.bound = true;
  }
}
