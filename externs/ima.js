/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for IMA SDK.
 * @externs
 */


/** @const */
var google = {};

/** @const */
google.ima = {};


/**
 * @implements {EventTarget}
 */
google.ima.AdsLoader = class {
  /** @param {!google.ima.AdDisplayContainer} container */
  constructor(container) {}

  contentComplete() {}

  /** @param {google.ima.AdsRequest} request */
  requestAds(request) {}

  /** @override */
  addEventListener() {}

  /** @override */
  removeEventListener() {}

  /** @override */
  dispatchEvent() {}
};


/**
 * @implements {EventTarget}
 */
google.ima.AdsManager = class {
  start() {}

  /**
   * @param {number} width
   * @param {number} height
   * @param {google.ima.ViewMode} viewMode
   */
  init(width, height, viewMode) {}

  /**
   * @return {number}
   */
  getRemainingTime() {}

  pause() {}

  resume() {}

  getVolume() {}

  /**
   * @param {number} volume
   */
  setVolume(volume) {}

  /**
   * @param {number} width
   * @param {number} height
   * @param {google.ima.ViewMode} viewMode
   */
  resize(width, height, viewMode) {}

  /** @override */
  addEventListener() {}

  /** @override */
  removeEventListener() {}

  /** @override */
  dispatchEvent() {}
};


/** @const */
google.ima.AdsManagerLoadedEvent = class extends Event {
  /**
   * @param {!HTMLElement} video
   * @return {!google.ima.AdsManager}
   */
  getAdsManager(video) {}
};


/** @const */
google.ima.AdDisplayContainer = class {
  /**
   * @param {HTMLElement} adContainer
   * @param {HTMLMediaElement} video
   */
  constructor(adContainer, video) {}

  initialize() {}
};


/**
 * @enum {string}
 */
google.ima.AdsManagerLoadedEvent.Type = {
  ADS_MANAGER_LOADED: 'ADS_MANAGER_LOADED',
};


/** @const */
google.ima.AdEvent = class extends Event {
  /** @return {!google.ima.Ad } */
  getAd() {}
};


/** @const */
google.ima.Ad = class {
  /** @return {number} */
  getDuration() {}
};


/**
 * @enum {string}
 */
google.ima.AdEvent.Type = {
  CONTENT_PAUSE_REQUESTED: 'CONTENT_PAUSE_REQUESTED',
  CONTENT_RESUME_REQUESTED: 'CONTENT_RESUME_REQUESTED',
  AD_ERROR: 'AD_ERROR',
  PAUSED: 'PAUSED',
  RESUMED: 'RESUMED',
  VOLUME_CHANGED: 'VOLUME_CHANGED',
  VOLUME_MUTED: 'VOLUME_MUTED',
};


/**
 * @typedef {{
 *   adTagUrl: string,
 * }}
 *
 * @description Request for the ad server
 * @property {string} adTagUrl
 * @exportDoc
 */
google.ima.AdsRequest;


/** @const */
google.ima.AdError = class {};


/** @const */
google.ima.AdErrorEvent = class extends Event {
  /** @return {google.ima.AdError} */
  getError() {}
};


/**
 * @enum {string}
 */
google.ima.AdErrorEvent.Type = {
  AD_ERROR: 'AD_ERROR',
};


/**
 * @enum {string}
 */
google.ima.ViewMode = {
  FULLSCREEN: 'FULLSCREEN',
  NORMAL: 'NORMAL',
};
