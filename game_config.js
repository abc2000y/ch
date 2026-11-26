/**
 * Ride the Waves（乘风破浪）· 全局游戏配置文件 (game_config.js)
 * 说明：修改下方数值后保存，刷新 index.html 即可生效。
 */
window.GAME_CONFIG = {
    // ================= 1. 基础回合与默认环境参数 =================
    defaultDaysPerRound: 3,        	// 每关默认航行天数（当前设为每关 3 天）
    dayCycleSeconds: 24,           		// 游戏内“一天”对应的真实秒数（24 秒 = 1 天）
    defaultWaveMode: 'calm',      	 // 默认海浪强度：'calm'(微浪) | 'choppy'(浪涌) | 'stormy'(巨浪)
    defaultMood: 'sunset',         		// 默认天空色调：'sunset'(落日) | 'daylight'(白昼) | 'moonlight'(月夜)

    // ================= 2. 关卡配置（共 4 关） =================
    levels: [
        {
            level: 1,
            name: 'Stage 1',
            shortName: 'Stage 1 · Harpoon Ripples',
            waveName: 'Light Ripples',
            waveMode: 'calm',
            gearMode: 'harpoon',                     // 渔具限制：仅限鱼叉（只能捕获大型鱼）
            passScore: 99,                             	// 本关通关目标分数
            obsInterval: 2.8,                          	// 礁石生成间隔（秒）
            obsSpeedMult: 0.90,                       // 礁石移动速度倍率
            clearImg: 'assets/gk1.jpg',              // 【通关】入港图片（第 1 关港口）
            fallbackClearImg: 'gk1.jpg',
            failImg: 'assets/gk1.jpg',                 // 【失败】入港图片（第 1 关无上一关，兜底显示 gk1.jpg；如有初始港可改为 gk0.jpg）
            fallbackFailImg: 'gk1.jpg'
        },
        {
            level: 2,
            name: 'Stage 2',
            shortName: 'Stage 2 · Net Swell',
            waveName: 'Choppy Swell',
            waveMode: 'choppy',
            gearMode: 'net',                           // 渔具限制：仅限撒网
            passScore: 188,
            obsInterval: 2.1,
            obsSpeedMult: 1.08,
            clearImg: 'assets/gk2.jpg',                // 【通关】显示第 2 关港口
            fallbackClearImg: 'gk2.jpg',
            failImg: 'assets/gk1.jpg',                 // 【失败】显示上一关（第 1 关）港口
            fallbackFailImg: 'gk1.jpg'
        },
        {
            level: 3,
            name: 'Stage 3',
            shortName: 'Stage 3 · Alternate Surge',
            waveName: 'Heavy Surge',
            waveMode: 'stormy',
            gearMode: 'alternate',                     // 渔具限制：按天轮换（第1天鱼叉、第2天撒网、第3天鱼叉…）
            passScore: 399,
            obsInterval: 1.65,
            obsSpeedMult: 1.22,
            clearImg: 'assets/gk3.jpg',                // 【通关】显示第 3 关港口
            fallbackClearImg: 'gk3.jpg',
            failImg: 'assets/gk2.jpg',                 // 【失败】显示上一关（第 2 关）港口
            fallbackFailImg: 'gk2.jpg'
        },
        {
            level: 4,
            name: 'Stage 4',
            shortName: 'Stage 4 · Changing Seas',
            waveName: 'Light → Choppy → Heavy',
            waveMode: 'calm',
            waveCycle: ['calm', 'choppy', 'stormy'],   // 每天海况轮换：第1天微浪、第2天浪涌、第3天巨浪
            gearMode: 'net',                           // 渔具限制：仅限撒网 + 保护物种/可食用评分规则
            passScore: 599,
            obsInterval: 1.5,
            obsSpeedMult: 1.30,
            clearImg: 'assets/gk4.jpg',                // 【通关】显示第 4 关港口
            fallbackClearImg: 'gk4.jpg',
            failImg: 'assets/gk3.jpg',                 // 【失败】显示上一关（第 3 关）港口
            fallbackFailImg: 'gk3.jpg'
        }
    ],

    // ================= 3. 海浪预设参数（波幅、波速、浪花密度） =================
    wavePresets: {
        calm:   { amp: 0.56, speed: 0.75, foamDensity: 0.45 },
        choppy: { amp: 1.05, speed: 1.02, foamDensity: 0.72 },
        stormy: { amp: 1.55, speed: 1.38, foamDensity: 0.95 }
    },

    // ================= 4. 船只等级与外观（通关升级分数门槛：55, 100, 200, 400） =================
    vessels: [
        { minScore: 0,   id: 'rowboat',   icon: '🚣', name: 'Wooden Rowboat',   speedMult: 1.00, imgSrc: 'assets/vessels/rowboat.png',   drawWidth: 100, drawHeight: 150 },
        { minScore: 55,  id: 'sailboat',  icon: '⛵', name: 'Wind Sailboat',    speedMult: 1.20, imgSrc: 'assets/vessels/sailboat.png',  drawWidth: 100, drawHeight: 150 },
        { minScore: 100, id: 'speedboat', icon: '🚤', name: 'Turbo Speedboat',  speedMult: 1.45, imgSrc: 'assets/vessels/speedboat.png', drawWidth: 100, drawHeight: 150 },
        { minScore: 200, id: 'yacht',     icon: '🛥️', name: 'Ocean Yacht',      speedMult: 1.70, imgSrc: 'assets/vessels/yacht.png',     drawWidth: 100, drawHeight: 150 },
        { minScore: 400, id: 'flagship',  icon: '🚢', name: 'Ocean Cruiser',    speedMult: 1.95, imgSrc: 'assets/vessels/flagship.png',  drawWidth: 100, drawHeight: 150 }
    ],

    // ================= 5. 渔具配置（撒网与鱼叉） =================
    fishingGear: {
        activeTool: 'net',
        net: {
            name: 'Ocean Cast Net',
            imgSrc: 'assets/net.png',
            radiusMult: 1.25,     // 撒网判定半径倍率
            minRadius: 34,        // 最小撒网半径（像素）
            maxRadius: 96,        // 最大撒网半径（像素）
            duration: 0.95,       // 撒网持续时间（秒）
            scoreMult: 1.0
        },
        harpoon: {
            name: 'Steel Harpoon',
            imgSrc: 'assets/harpoon.png',
            largeFishOnly: true,  // true=鱼叉仅可捕获大型鱼
            angleDeg: 45,         // 刺出角度（度）
            duration: 0.95,       // 鱼叉持续时间（秒）
            scoreMult: 1.0
        }
    },

    // ================= 6. 鱼类体型分级与分值配置 =================
    fishTiers: {
        small:  { key: 'small',  label: 'Small Fish',  slots: [0, 1, 2, 3],   sizeMult: 0.82, jumpProb: 0.42, basePoints: 1, jumpPoints: 5 },
        medium: { key: 'medium', label: 'Medium Fish', slots: [4, 5, 6, 7],   sizeMult: 1.00, jumpProb: 0.32, basePoints: 2, jumpPoints: 5 },
        large:  { key: 'large',  label: 'Large Fish',  slots: [8, 9, 10, 11], sizeMult: 1.50, jumpProb: 0.22, basePoints: 4, jumpPoints: 8 }
    },

    // ================= 7. 礁石障碍物配置（原图 400x300，4:3 宽高比） =================
    obstacles: {
        dir: 'assets/obstacles/',
        files: ['rock1.png', 'rock2.png', 'rock3.png', 'rock4.png', 'rock5.png', 'rock6.png', 'rock7.png'],
        baseW: 112,                   		 // 基础绘制宽度（由 84/100 适度放大至 112，保持 4:3 原图比例）
        baseH: 84,                   			 // 基础绘制高度（由 63/80 适度放大至 84）
        horizonPauseDuration: 0.85,  	 // 礁石在海平线处停顿显现的时间（秒）
        horizonPauseGrowMult: 1.45    // 礁石停顿与逼近时的放大倍率（由 1.38 调至 1.45）
    }
};
