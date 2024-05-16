(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/speak-tts/lib/speak-tts.js":
/*!*************************************************!*\
  !*** ./node_modules/speak-tts/lib/speak-tts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/speak-tts/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpeakTTS =
/*#__PURE__*/
function () {
  function SpeakTTS() {
    _classCallCheck(this, SpeakTTS);

    this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    this.synthesisVoice = null;
  }

  _createClass(SpeakTTS, [{
    key: "init",
    value: function init() {
      var _this = this;

      var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        if (!_this.browserSupport) {
          reject('Your browser does not support Speech Synthesis');
        }

        var listeners = (0, _utils.isNil)(conf.listeners) ? {} : conf.listeners;
        var splitSentences = (0, _utils.isNil)(conf.splitSentences) ? true : conf.splitSentences;
        var lang = (0, _utils.isNil)(conf.lang) ? undefined : conf.lang;
        var volume = (0, _utils.isNil)(conf.volume) ? 1 : conf.volume;
        var rate = (0, _utils.isNil)(conf.rate) ? 1 : conf.rate;
        var pitch = (0, _utils.isNil)(conf.pitch) ? 1 : conf.pitch;
        var voice = (0, _utils.isNil)(conf.voice) ? undefined : conf.voice; // Attach event listeners

        Object.keys(listeners).forEach(function (listener) {
          var fn = listeners[listener];

          var newListener = function newListener(data) {
            fn && fn(data);
          };

          if (listener !== 'onvoiceschanged') {
            speechSynthesis[listener] = newListener;
          }
        });

        _this._loadVoices().then(function (voices) {
          // Handle callback onvoiceschanged by hand
          listeners['onvoiceschanged'] && listeners['onvoiceschanged'](voices); // Initialize values if necessary

          !(0, _utils.isNil)(lang) && _this.setLanguage(lang);
          !(0, _utils.isNil)(voice) && _this.setVoice(voice);
          !(0, _utils.isNil)(volume) && _this.setVolume(volume);
          !(0, _utils.isNil)(rate) && _this.setRate(rate);
          !(0, _utils.isNil)(pitch) && _this.setPitch(pitch);
          !(0, _utils.isNil)(splitSentences) && _this.setSplitSentences(splitSentences);
          resolve({
            voices: voices,
            lang: _this.lang,
            voice: _this.voice,
            volume: _this.volume,
            rate: _this.rate,
            pitch: _this.pitch,
            splitSentences: _this.splitSentences,
            browserSupport: _this.browserSupport
          });
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "_fetchVoices",
    value: function _fetchVoices() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var voices = speechSynthesis.getVoices();

          if ((0, _utils.size)(voices) > 0) {
            return resolve(voices);
          } else {
            return reject("Could not fetch voices");
          }
        }, 100);
      });
    }
  }, {
    key: "_loadVoices",
    value: function _loadVoices() {
      var _this2 = this;

      var remainingAttempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this._fetchVoices().catch(function (error) {
        if (remainingAttempts === 0) throw error;
        return _this2._loadVoices(remainingAttempts - 1);
      });
    }
  }, {
    key: "hasBrowserSupport",
    value: function hasBrowserSupport() {
      return this.browserSupport;
    }
  }, {
    key: "setVoice",
    value: function setVoice(voice) {
      var synthesisVoice;
      var voices = speechSynthesis.getVoices(); // set voice by name

      if ((0, _utils.isString)(voice)) {
        synthesisVoice = voices.find(function (v) {
          return v.name === voice;
        });
      } // Set the voice in conf if found


      if ((0, _utils.isObject)(voice)) {
        synthesisVoice = voice;
      }

      if (synthesisVoice) {
        this.synthesisVoice = synthesisVoice;
      } else {
        throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
      }
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(lang) {
      lang = lang.replace('_', '-'); // some Android versions seem to ignore BCP 47 and use an underscore character in language tag

      if ((0, _utils.validateLocale)(lang)) {
        this.lang = lang;
      } else {
        throw 'Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)';
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      volume = parseFloat(volume);

      if (!(0, _utils.isNan)(volume) && volume >= 0 && volume <= 1) {
        this.volume = volume;
      } else {
        throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
      }
    }
  }, {
    key: "setRate",
    value: function setRate(rate) {
      rate = parseFloat(rate);

      if (!(0, _utils.isNan)(rate) && rate >= 0 && rate <= 10) {
        this.rate = rate;
      } else {
        throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
      }
    }
  }, {
    key: "setPitch",
    value: function setPitch(pitch) {
      pitch = parseFloat(pitch);

      if (!(0, _utils.isNan)(pitch) && pitch >= 0 && pitch <= 2) {
        this.pitch = pitch;
      } else {
        throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
      }
    }
  }, {
    key: "setSplitSentences",
    value: function setSplitSentences(splitSentences) {
      this.splitSentences = splitSentences;
    }
  }, {
    key: "speak",
    value: function speak(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var text = data.text,
            _data$listeners = data.listeners,
            listeners = _data$listeners === void 0 ? {} : _data$listeners,
            _data$queue = data.queue,
            queue = _data$queue === void 0 ? true : _data$queue;
        var msg = (0, _utils.trim)(text);
        if ((0, _utils.isNil)(msg)) resolve(); // Stop current speech

        !queue && _this3.cancel(); // Split into sentences (for better result and bug with some versions of chrome)

        var utterances = [];
        var sentences = _this3.splitSentences ? (0, _utils.splitSentences)(msg) : [msg];
        sentences.forEach(function (sentence, index) {
          var isLast = index === (0, _utils.size)(sentences) - 1;
          var utterance = new SpeechSynthesisUtterance();
          if (_this3.synthesisVoice) utterance.voice = _this3.synthesisVoice;
          if (_this3.lang) utterance.lang = _this3.lang;
          if (_this3.volume) utterance.volume = _this3.volume; // 0 to 1

          if (_this3.rate) utterance.rate = _this3.rate; // 0.1 to 10

          if (_this3.pitch) utterance.pitch = _this3.pitch; //0 to 2

          utterance.text = sentence; // Attach event listeners

          Object.keys(listeners).forEach(function (listener) {
            var fn = listeners[listener];

            var newListener = function newListener(data) {
              fn && fn(data);

              if (listener === 'onerror') {
                reject({
                  utterances: utterances,
                  lastUtterance: utterance,
                  error: data
                });
              }

              if (listener === 'onend') {
                if (isLast) resolve({
                  utterances: utterances,
                  lastUtterance: utterance
                });
              }
            };

            utterance[listener] = newListener;
          });
          utterances.push(utterance);
          speechSynthesis.speak(utterance);
        });
      });
    }
  }, {
    key: "pending",
    value: function pending() {
      return speechSynthesis.pending;
    }
  }, {
    key: "paused",
    value: function paused() {
      return speechSynthesis.paused;
    }
  }, {
    key: "speaking",
    value: function speaking() {
      return speechSynthesis.speaking;
    }
  }, {
    key: "pause",
    value: function pause() {
      speechSynthesis.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      speechSynthesis.resume();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      speechSynthesis.cancel();
    }
  }]);

  return SpeakTTS;
}();

var _default = SpeakTTS;
exports.default = _default;

/***/ }),

/***/ "./node_modules/speak-tts/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/speak-tts/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.isObject = exports.isNil = exports.isNan = exports.size = exports.isString = exports.validateLocale = exports.splitSentences = void 0;

var splitSentences = function splitSentences() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
    return trim(sentence);
  }).filter(Boolean);
};

exports.splitSentences = splitSentences;
var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

/**
 * Validate a locale string to test if it is bcp47 compliant
 * @param {String} locale The tag locale to parse
 * @return {Boolean} True if tag is bcp47 compliant false otherwise
 */

var validateLocale = function validateLocale(locale) {
  return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
};

exports.validateLocale = validateLocale;

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

exports.isString = isString;

var size = function size(value) {
  return value && Array.isArray(value) && value.length ? value.length : 0;
};

exports.size = size;

var isNan = function isNan(value) {
  return typeof value === "number" && isNaN(value);
};

exports.isNan = isNan;

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

exports.isNil = isNil;

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

exports.isObject = isObject;

var trim = function trim(value) {
  return isString(value) ? value.trim() : '';
};

exports.trim = trim;

/***/ }),

/***/ "./src/app/_core/ng-zorro-modules.ts":
/*!*******************************************!*\
  !*** ./src/app/_core/ng-zorro-modules.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! ng-zorro-antd/affix */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-affix.js"), __webpack_require__(/*! ng-zorro-antd/alert */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-alert.js"), __webpack_require__(/*! ng-zorro-antd/anchor */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-anchor.js"), __webpack_require__(/*! ng-zorro-antd/auto-complete */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-auto-complete.js"), __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-avatar.js"), __webpack_require__(/*! ng-zorro-antd/back-top */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-back-top.js"), __webpack_require__(/*! ng-zorro-antd/badge */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-badge.js"), __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-breadcrumb.js"), __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js"), __webpack_require__(/*! ng-zorro-antd/calendar */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-calendar.js"), __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js"), __webpack_require__(/*! ng-zorro-antd/carousel */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-carousel.js"), __webpack_require__(/*! ng-zorro-antd/cascader */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-cascader.js"), __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-checkbox.js"), __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-collapse.js"), __webpack_require__(/*! ng-zorro-antd/comment */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-comment.js"), __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js"), __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-descriptions.js"), __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-divider.js"), __webpack_require__(/*! ng-zorro-antd/drawer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-drawer.js"), __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js"), __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-empty.js"), __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js"), __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js"), __webpack_require__(/*! ng-zorro-antd/input-number */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input-number.js"), __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js"), __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-list.js"), __webpack_require__(/*! ng-zorro-antd/mention */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-mention.js"), __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js"), __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! ng-zorro-antd/page-header */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-page-header.js"), __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-pagination.js"), __webpack_require__(/*! ng-zorro-antd/popconfirm */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-popconfirm.js"), __webpack_require__(/*! ng-zorro-antd/popover */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-popover.js"), __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-progress.js"), __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-radio.js"), __webpack_require__(/*! ng-zorro-antd/rate */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-rate.js"), __webpack_require__(/*! ng-zorro-antd/result */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-result.js"), __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js"), __webpack_require__(/*! ng-zorro-antd/skeleton */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-skeleton.js"), __webpack_require__(/*! ng-zorro-antd/slider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-slider.js"), __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-spin.js"), __webpack_require__(/*! ng-zorro-antd/statistic */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-statistic.js"), __webpack_require__(/*! ng-zorro-antd/steps */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-steps.js"), __webpack_require__(/*! ng-zorro-antd/switch */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-switch.js"), __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js"), __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tabs.js"), __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tag.js"), __webpack_require__(/*! ng-zorro-antd/time-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-time-picker.js"), __webpack_require__(/*! ng-zorro-antd/timeline */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-timeline.js"), __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.js"), __webpack_require__(/*! ng-zorro-antd/transfer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-transfer.js"), __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js"), __webpack_require__(/*! ng-zorro-antd/tree-select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree-select.js"), __webpack_require__(/*! ng-zorro-antd/typography */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-typography.js"), __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-upload.js"), __webpack_require__(/*! ng-zorro-antd/resizable */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-resizable.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, affix_1, alert_1, anchor_1, auto_complete_1, avatar_1, back_top_1, badge_1, breadcrumb_1, button_1, calendar_1, card_1, carousel_1, cascader_1, checkbox_1, collapse_1, comment_1, date_picker_1, descriptions_1, divider_1, drawer_1, dropdown_1, empty_1, form_1, grid_1, i18n_1, icon_1, input_1, input_number_1, layout_1, list_1, mention_1, menu_1, message_1, modal_1, notification_1, page_header_1, pagination_1, popconfirm_1, popover_1, progress_1, radio_1, rate_1, result_1, select_1, skeleton_1, slider_1, spin_1, statistic_1, steps_1, switch_1, table_1, tabs_1, tag_1, time_picker_1, timeline_1, tooltip_1, transfer_1, tree_1, tree_select_1, typography_1, upload_1, resizable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let DemoNgZorroAntdModule = class DemoNgZorroAntdModule {
    };
    DemoNgZorroAntdModule = tslib_1.__decorate([
        core_1.NgModule({
            exports: [
                affix_1.NzAffixModule,
                alert_1.NzAlertModule,
                anchor_1.NzAnchorModule,
                auto_complete_1.NzAutocompleteModule,
                avatar_1.NzAvatarModule,
                back_top_1.NzBackTopModule,
                badge_1.NzBadgeModule,
                button_1.NzButtonModule,
                breadcrumb_1.NzBreadCrumbModule,
                calendar_1.NzCalendarModule,
                card_1.NzCardModule,
                carousel_1.NzCarouselModule,
                cascader_1.NzCascaderModule,
                checkbox_1.NzCheckboxModule,
                collapse_1.NzCollapseModule,
                comment_1.NzCommentModule,
                date_picker_1.NzDatePickerModule,
                descriptions_1.NzDescriptionsModule,
                divider_1.NzDividerModule,
                drawer_1.NzDrawerModule,
                dropdown_1.NzDropDownModule,
                empty_1.NzEmptyModule,
                form_1.NzFormModule,
                grid_1.NzGridModule,
                i18n_1.NzI18nModule,
                icon_1.NzIconModule,
                input_1.NzInputModule,
                input_number_1.NzInputNumberModule,
                layout_1.NzLayoutModule,
                list_1.NzListModule,
                mention_1.NzMentionModule,
                menu_1.NzMenuModule,
                message_1.NzMessageModule,
                modal_1.NzModalModule,
                notification_1.NzNotificationModule,
                page_header_1.NzPageHeaderModule,
                pagination_1.NzPaginationModule,
                popconfirm_1.NzPopconfirmModule,
                popover_1.NzPopoverModule,
                progress_1.NzProgressModule,
                radio_1.NzRadioModule,
                rate_1.NzRateModule,
                result_1.NzResultModule,
                select_1.NzSelectModule,
                skeleton_1.NzSkeletonModule,
                slider_1.NzSliderModule,
                spin_1.NzSpinModule,
                statistic_1.NzStatisticModule,
                steps_1.NzStepsModule,
                switch_1.NzSwitchModule,
                table_1.NzTableModule,
                tabs_1.NzTabsModule,
                tag_1.NzTagModule,
                time_picker_1.NzTimePickerModule,
                timeline_1.NzTimelineModule,
                tooltip_1.NzToolTipModule,
                transfer_1.NzTransferModule,
                tree_1.NzTreeModule,
                tree_select_1.NzTreeSelectModule,
                typography_1.NzTypographyModule,
                upload_1.NzUploadModule,
                resizable_1.NzResizableModule,
            ]
        })
    ], DemoNgZorroAntdModule);
    exports.DemoNgZorroAntdModule = DemoNgZorroAntdModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=0.js.map