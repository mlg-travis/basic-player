import Player from './bitmovin';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import { PlayerEvent } from 'bitmovin-player/modules/bitmovinplayer-core';
class MediaNetworkPlayer {

    player: any;
    uiController: any;
    
    constructor() {
    }
    
    loadPlayer(container: HTMLElement, config: object): any {
        
        const defaultConfig: any = {
            key: 'f356b147-0d6e-4b14-a178-fedbc262b1b3', // - MLG KEY
            
            advertising: {
                adBreaks: [{
                    id: 'pre-roll-ad',
                    tag: {
                        url: '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=',
                        type: 'vast'
                    },
                    position: '10%'
                }]
            },
            
            remotecontrol: {
                type: 'googlecast',
            },
            ui: false          
        }
        
        const conf: any = {
            ...defaultConfig,
            ...config
        }
        
        let play = new Player(container, conf);
        this.player = play;
        UIFactory.buildDefaultUI(this.player)

        return play;
    }
    
}

export = new MediaNetworkPlayer();
