/**
 * Ride the Waves（乘风破浪）· 全局游戏配置文件 (game_config.js)
 * 说明：修改下方数值后保存，刷新 index.html 即可生效。
 */
window.GAME_CONFIG = {
    // ================= 1. 基础回合与默认环境参数 =================
    defaultDaysPerRound: 3,        	// 每关默认航行天数（3 / 5 / 10 / 15 天可选）
    dayCycleSeconds: 24,           		// 游戏内“一天”对应的真实秒数（24 秒 = 1 天）
    defaultWaveMode: 'calm',      	 // 默认海浪强度：'calm'(微浪) | 'choppy'(浪涌) | 'stormy'(巨浪)
    defaultMood: 'sunset',         		// 默认天空色调：'sunset'(落日) | 'daylight'(白昼) | 'moonlight'(月夜)

    // ================= 1.5 音频资源配置（assets/audio/） =================
    audio: {
        dir: 'assets/audio/',
        enabledByDefault: true,
        bgmVolume: 0.55,
        sfxVolume: 0.85,
        tracks: {
            cover: 'backsound.mp3',
            waves: 'waves.mp3',
            port: 'backsound2.mp3',
            net: 'net.mp3'
        }
    },

    // ================= 2. 关卡配置（共 4 关） =================
    levels: [
        {
            level: 1,
            name: 'Stage 1',
            shortName: 'Stage 1 · Harpoon Ripples',
            waveName: 'Light Ripples',
            waveMode: 'calm',
            gearMode: 'harpoon',
            passScore: 99,
            obsInterval: 2.85,
            obsSpeedMult: 0.88,
            clearImg: 'assets/gk1.jpg',
            fallbackClearImg: 'gk1.jpg',
            failImg: 'assets/gk1.jpg',
            fallbackFailImg: 'gk1.jpg'
        },
        {
            level: 2,
            name: 'Stage 2',
            shortName: 'Stage 2 · Net Swell',
            waveName: 'Choppy Swell',
            waveMode: 'choppy',
            gearMode: 'net',
            passScore: 188,
            obsInterval: 2.15,
            obsSpeedMult: 1.06,
            clearImg: 'assets/gk2.jpg',
            fallbackClearImg: 'gk2.jpg',
            failImg: 'assets/gk1.jpg',
            fallbackFailImg: 'gk1.jpg'
        },
        {
            level: 3,
            name: 'Stage 3',
            shortName: 'Stage 3 · Alternate Surge',
            waveName: 'Heavy Surge',
            waveMode: 'stormy',
            gearMode: 'alternate',
            passScore: 399,
            obsInterval: 1.65,
            obsSpeedMult: 1.22,
            clearImg: 'assets/gk3.jpg',
            fallbackClearImg: 'gk3.jpg',
            failImg: 'assets/gk2.jpg',
            fallbackFailImg: 'gk2.jpg'
        },
        {
            level: 4,
            name: 'Stage 4',
            shortName: 'Stage 4 · Changing Seas',
            waveName: 'Light → Choppy → Heavy',
            waveMode: 'calm',
            waveCycle: ['calm', 'choppy', 'stormy'],
            gearMode: 'net',
            passScore: 599,
            obsInterval: 1.50,
            obsSpeedMult: 1.28,
            clearImg: 'assets/gk4.jpg',
            fallbackClearImg: 'gk4.jpg',
            failImg: 'assets/gk3.jpg',
            fallbackFailImg: 'gk3.jpg'
        }
    ],

    // ================= 3. 海浪预设参数（波幅、波速、浪花密度） =================
    wavePresets: {
        calm:   { amp: 0.56, speed: 0.76, foamDensity: 0.45 },
        choppy: { amp: 1.05, speed: 1.02, foamDensity: 0.72 },
        stormy: { amp: 1.55, speed: 1.36, foamDensity: 0.95 }
    },

    // ================= 4. 船只等级与外观（通关升级分数门槛：50, 110, 220, 420） =================
    vessels: [
        { minScore: 0,   id: 'rowboat',   icon: '🚣', name: 'Wooden Rowboat',   speedMult: 1.00, imgSrc: 'assets/vessels/rowboat.png',   drawWidth: 100, drawHeight: 150 },
        { minScore: 150,  id: 'sailboat',  icon: '⛵', name: 'Wind Sailboat',    speedMult: 1.20, imgSrc: 'assets/vessels/sailboat.png',  drawWidth: 100, drawHeight: 150 },
        { minScore: 210, id: 'speedboat', icon: '🚤', name: 'Turbo Speedboat',  speedMult: 1.45, imgSrc: 'assets/vessels/speedboat.png', drawWidth: 100, drawHeight: 150 },
        { minScore: 320, id: 'yacht',     icon: '🛥️', name: 'Ocean Yacht',      speedMult: 1.70, imgSrc: 'assets/vessels/yacht.png',     drawWidth: 100, drawHeight: 150 },
        { minScore: 420, id: 'flagship',  icon: '🚢', name: 'Ocean Cruiser',    speedMult: 1.95, imgSrc: 'assets/vessels/flagship.png',  drawWidth: 100, drawHeight: 150 }
    ],

    // ================= 5. 渔具配置（撒网与鱼叉） =================
    fishingGear: {
        activeTool: 'net',
        net: {
            name: 'Ocean Cast Net',
            imgSrc: 'assets/net.png',
            radiusMult: 1.25,
            minRadius: 34,
            maxRadius: 96,
            duration: 0.95,
            scoreMult: 1.0
        },
        harpoon: {
            name: 'Steel Harpoon',
            imgSrc: 'assets/harpoon.png',
            largeFishOnly: true,
            angleDeg: 45,
            duration: 0.85,
            scoreMult: 1.0
        }
    },

    // ================= 6. 鱼类体型分级与分值配置 =================
    fishTiers: {
        small:  { key: 'small',  label: 'Small Fish',  slots: [0, 1, 2, 3],   sizeMult: 0.82, jumpProb: 0.42, basePoints: 1, jumpPoints: 5 },
        medium: { key: 'medium', label: 'Medium Fish', slots: [4, 5, 6, 7],   sizeMult: 1.00, jumpProb: 0.32, basePoints: 2, jumpPoints: 5 },
        large:  { key: 'large',  label: 'Large Fish',  slots: [8, 9, 10, 11], sizeMult: 1.50, jumpProb: 0.25, basePoints: 4, jumpPoints: 8 }
    },

    // ================= 7. 礁石障碍物配置（原图 400x300，4:3 宽高比） =================
    obstacles: {
        dir: 'assets/obstacles/',
        files: ['rock1.png', 'rock2.png', 'rock3.png', 'rock4.png', 'rock5.png', 'rock6.png', 'rock7.png'],
        baseW: 112,
        baseH: 84,
        horizonPauseDuration: 0.85,
        horizonPauseGrowMult: 1.45
    }
};