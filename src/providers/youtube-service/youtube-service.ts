import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable, NgZone } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';


@Injectable()
export class YoutubeService {
  youtube: any = {
    ready: false,
    player: null,
    playerId: null,
    videoId: null,
    videoTitle: null,
    playerHeight: '200',
    playerWidth: '200'
  }

  constructor() {
    this.setupPlayer();
  }

  bindPlayer(elementId): void {
    this.youtube.playerId = elementId;
  };

  createPlayer(): void {
    console.log(this.youtube.playerId, 'playerId');
    var yTInit = new window.YT.Player('video-placeholder', {
      height: this.youtube.playerHeight,
      width: this.youtube.playerWidth,
      playerVars: {
        rel: 0,
        showinfo: 0
      }
    });
    console.log(yTInit, 'youtube init');
    return yTInit;
  }

  loadPlayer(): void {
    if (this.youtube.ready && this.youtube.playerId) {
      if (this.youtube.player) {
        console.log('got here');
        this.youtube.player.destroy();
      }
      return this.youtube.player = this.createPlayer();
    }
  }

  setupPlayer() {
    // in production mode, the youtube iframe api script tag is loaded
    // before the bundle.js, so the 'onYouTubeIfarmeAPIReady' has
    // already been triggered
    // TODO: handle this in build or in nicer in code
    console.log("Running Setup Player");
    setTimeout(() => {
      window['onYouTubeIframeAPIReady'] = () => {
        if (window['YT']) {
          console.log('Youtube API is ready');
          this.youtube.ready = true;
          this.bindPlayer('video-placeholder');
          return this.loadPlayer();
        }
      };
    }, 2000);
    if (window.YT && window.YT.Player) {
      console.log('Youtube API is ready');
      this.youtube.ready = true;
      this.bindPlayer('video-placeholder');
      this.loadPlayer();
    }
  }

  launchPlayer(id, title): void {
    console.log(this.youtube.player, 'player');
    if (this.youtube.player && this.youtube.player.hasOwnProperty('loadVideoById')) {
      console.log('got here again');
      this.youtube.player.loadVideoById(id);
      this.youtube.videoId = id;
      this.youtube.videoTitle = title;
      return this.youtube;
    }
  }
}

