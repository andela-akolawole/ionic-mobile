import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable, NgZone } from '@angular/core';
import { Events } from "ionic-angular";
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

  constructor(public events: Events) {
    // this.setupPlayer();

    this.events.subscribe('App:Paused', () => {
      this.youtube.player.pauseVideo();
    });
  }

  bindPlayer(elementId): void {
    this.youtube.playerId = elementId;
  };

  createPlayer(): void {
    console.log(this.youtube.playerId, 'playerId');
    return new window.YT.Player(this.youtube.playerId, {
      height: this.youtube.playerHeight,
      width: this.youtube.playerWidth,
      playerVars: {
        rel: 0,
        showinfo: 0
      }
    });
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

  setupPlayer(callback) {
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
          this.bindPlayer('video-player');
          return this.loadPlayer();
        }
      };
      callback(true);
    }, 2000);
    if (window.YT && window.YT.Player) {
      console.log('Youtube API is ready');
      this.youtube.ready = true;
      this.bindPlayer('video-player');
      this.loadPlayer();
      console.log(this.youtube.player, "player");
      callback(true);
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

