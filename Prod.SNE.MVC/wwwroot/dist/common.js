(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js ***!
  \************************************************************************/
/*! exports provided: NgxYoutubePlayerModule, YouTubePlayerRef, YouTubeRef, YoutubePlayerComponent, YoutubePlayerService, defaultSizes, win */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxYoutubePlayerModule", function() { return NgxYoutubePlayerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePlayerRef", function() { return YouTubePlayerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeRef", function() { return YouTubeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return YoutubePlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSizes", function() { return defaultSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




function win() {
    return window;
}
function YouTubeRef() {
    return win()["YT"];
}
function YouTubePlayerRef() {
    return YouTubeRef().Player;
}
const defaultSizes = {
    height: 270,
    width: 367,
};
class YoutubePlayerService {
    constructor(zone) {
        this.zone = zone;
        this.api = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.createApi();
    }
    loadPlayerApi(options) {
        const doc = win().document;
        if (!YoutubePlayerService["ytApiLoaded"]) {
            YoutubePlayerService.ytApiLoaded = true;
            const playerApiScript = doc.createElement("script");
            playerApiScript.type = "text/javascript";
            playerApiScript.src = `${options.protocol}://www.youtube.com/iframe_api`;
            doc.body.appendChild(playerApiScript);
        }
    }
    setupPlayer(elementId, outputs, sizes, videoId = "", playerVars) {
        const createPlayer = () => {
            if (YouTubePlayerRef) {
                this.createPlayer(elementId, outputs, sizes, videoId, playerVars);
            }
        };
        this.api.subscribe(createPlayer);
    }
    play(player) {
        player.playVideo();
    }
    pause(player) {
        player.pauseVideo();
    }
    playVideo(media, player) {
        const id = media.id.videoId ? media.id.videoId : media.id;
        player.loadVideoById(id);
        this.play(player);
    }
    isPlaying(player) {
        // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
        const isPlayerReady = player && player.getPlayerState;
        const playerState = isPlayerReady ? player.getPlayerState() : {};
        const isPlayerPlaying = isPlayerReady
            ? playerState !== YouTubeRef().PlayerState.ENDED &&
                playerState !== YouTubeRef().PlayerState.PAUSED
            : false;
        return isPlayerPlaying;
    }
    createPlayer(elementId, outputs, sizes, videoId = "", playerVars = {}) {
        const playerSize = {
            height: sizes.height || defaultSizes.height,
            width: sizes.width || defaultSizes.width,
        };
        const ytPlayer = YouTubePlayerRef();
        return new ytPlayer(elementId, Object.assign(Object.assign({}, playerSize), { events: {
                onReady: (ev) => {
                    this.zone.run(() => outputs.ready && outputs.ready.next(ev.target));
                },
                onStateChange: (ev) => {
                    this.zone.run(() => outputs.change && outputs.change.next(ev));
                },
            }, playerVars,
            videoId }));
    }
    toggleFullScreen(player, isFullScreen) {
        let { height, width } = defaultSizes;
        if (!isFullScreen) {
            height = window.innerHeight;
            width = window.innerWidth;
        }
        player.setSize(width, height);
    }
    // adpoted from uid
    generateUniqueId() {
        const len = 7;
        return Math.random().toString(35).substr(2, len);
    }
    createApi() {
        const onYouTubeIframeAPIReady = () => {
            if (win()) {
                win()["onYouTubeIframeAPIReadyCalled"] = true;
                this.api.next();
            }
        };
        win()["onYouTubeIframeAPIReady"] = onYouTubeIframeAPIReady;
        /**
         * If onYouTubeIframeAPIReady is called in other place, then just trigger next
         * This is to prevent player not initializing issue when another player got initialized in other place
         */
        if (win()["onYouTubeIframeAPIReadyCalled"]) {
            this.api.next();
        }
    }
}
YoutubePlayerService.ytApiLoaded = false;
YoutubePlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function YoutubePlayerService_Factory() { return new YoutubePlayerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: YoutubePlayerService, providedIn: "root" });
YoutubePlayerService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root",
            },] }
];
YoutubePlayerService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

class YoutubePlayerComponent {
    constructor(playerService, elementRef, renderer) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.videoId = '';
        this.height = defaultSizes.height;
        this.width = defaultSizes.width;
        /**
         * @description sets the protocol by the navigator object
         * if there is no window, it sets a default http protocol
         * unless the protocol is set from outside
         */
        this.protocol = this.getProtocol();
        this.playerVars = {};
        // player created and initialized - sends instance of the player
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // state change: send the YT event with its state
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterContentInit() {
        const htmlId = this.playerService.generateUniqueId();
        const playerSize = { height: this.height, width: this.width };
        const container = this.renderer.selectRootElement('#yt-player-ngx-component');
        this.renderer.setAttribute(container, 'id', htmlId);
        this.playerService.loadPlayerApi({
            protocol: this.protocol
        });
        this.playerService.setupPlayer(htmlId, {
            change: this.change,
            ready: this.ready
        }, playerSize, this.videoId, this.playerVars);
    }
    getProtocol() {
        const hasWindow = window && window.location;
        const protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    }
}
YoutubePlayerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'youtube-player',
                template: `
    <div id="yt-player-ngx-component"></div>
  `
            },] }
];
YoutubePlayerComponent.ctorParameters = () => [
    { type: YoutubePlayerService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
YoutubePlayerComponent.propDecorators = {
    videoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    protocol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    playerVars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class NgxYoutubePlayerModule {
    static forRoot() {
        return {
            ngModule: NgxYoutubePlayerModule,
            providers: [YoutubePlayerService]
        };
    }
}
NgxYoutubePlayerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [YoutubePlayerComponent],
                imports: [],
                providers: [YoutubePlayerService],
                exports: [YoutubePlayerComponent]
            },] }
];

/*
 * Public API Surface of ngx-youtube-player
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-youtube-player.js.map


/***/ })

}]);
//# sourceMappingURL=common.js.map