import { Player, PlayerEvent } from 'bitmovin-player/modules/bitmovinplayer-core';
import EngineBitmovinModule from 'bitmovin-player/modules/bitmovinplayer-engine-bitmovin';
import MseRendererModule from 'bitmovin-player/modules/bitmovinplayer-mserenderer';
import HlsModule from 'bitmovin-player/modules/bitmovinplayer-hls';
import AbrModule from 'bitmovin-player/modules/bitmovinplayer-abr';
import ContainerTSModule from 'bitmovin-player/modules/bitmovinplayer-container-ts';
import SubtitlesModule from 'bitmovin-player/modules/bitmovinplayer-subtitles';
import PolyfillModule from 'bitmovin-player/modules/bitmovinplayer-polyfill';
import StyleModule from 'bitmovin-player/modules/bitmovinplayer-style';
import DashModule from 'bitmovin-player/modules/bitmovinplayer-dash';
import XmlModule from 'bitmovin-player/modules/bitmovinplayer-xml';

import AdvertisingCore from 'bitmovin-player/modules/bitmovinplayer-advertising-core';
import AdvertisingIma from 'bitmovin-player/modules/bitmovinplayer-advertising-ima';

import AnalyticsModule from 'bitmovin-player/modules/bitmovinplayer-analytics';

import RemoteControl from 'bitmovin-player/modules/bitmovinplayer-remotecontrol';

import SubtitlesWebVTT from 'bitmovin-player/modules/bitmovinplayer-subtitles-vtt';

// import {UIFactory} from 'bitmovin-player/bitmovinplayer-ui';
// import 'bitmovin-player/bitmovinplayer-ui.css';

Player.addModule(EngineBitmovinModule);
Player.addModule(MseRendererModule);
Player.addModule(HlsModule);
Player.addModule(AbrModule);
Player.addModule(ContainerTSModule);
Player.addModule(SubtitlesModule);
Player.addModule(PolyfillModule);
Player.addModule(StyleModule);
Player.addModule(DashModule);
Player.addModule(XmlModule);

Player.addModule(AdvertisingCore);
Player.addModule(AdvertisingIma);

Player.addModule(AnalyticsModule);

Player.addModule(RemoteControl);
Player.addModule(SubtitlesWebVTT);

export default Player;