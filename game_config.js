/**
 * Ride the Waves · Global Game Config File (game_config.js)
 * Note: Edit values below, save, and refresh index.html to apply.
 */
window.GAME_CONFIG = {
    // ================= 1. Base Round & Default Parameters =================
    defaultDaysPerRound: 3,        // Default days per stage (set to 3 days)
    dayCycleSeconds: 24,           // Real seconds per in-game day
    defaultWaveMode: 'calm',       // Default wave intensity: 'calm' | 'choppy' | 'stormy'
    defaultMood: 'sunset',         // Default sky mood: 'sunset' | 'daylight' | 'moonlight'

    // ================= 2. Stage Configuration =================
    levels: [
        { level: 1, name: 'Stage 1', shortName: 'Stage 1 · Light Ripples', waveName: 'Light Ripples', waveMode: 'calm',   obsInterval: 2.8, obsSpeedMult: 0.90, clearImg: 'assets/gk1.jpg', fallbackClearImg: 'gk1.jpg' },
        { level: 2, name: 'Stage 2', shortName: 'Stage 2 · Choppy Swell', waveName: 'Choppy Swell', waveMode: 'choppy', obsInterval: 2.1, obsSpeedMult: 1.08, clearImg: 'assets/gk2.jpg', fallbackClearImg: 'gk2.jpg' },
        { level: 3, name: 'Stage 3', shortName: 'Stage 3 · Heavy Surge', waveName: 'Heavy Surge', waveMode: 'stormy', obsInterval: 1.6, obsSpeedMult: 1.25, clearImg: 'assets/gk3.jpg', fallbackClearImg: 'gk3.jpg' }
    ],

    // ================= 3. Wave Preset Parameters (Amplitude, Speed, Foam Density) =================
    wavePresets: {
        calm:   { amp: 0.56, speed: 0.75, foamDensity: 0.52 },
        choppy: { amp: 1.12, speed: 1.06, foamDensity: 0.85 },
        stormy: { amp: 1.65, speed: 1.42, foamDensity: 1.05 } // Tuned foam density for heavy surge
    },

    // ================= 4. Vessel Tiers & Appearance (Sprites 230x340, Rendered 100x150) =================
    vessels: [
        { minScore: 0,   id: 'rowboat',   icon: '🚣', name: 'Wooden Rowboat',   speedMult: 1.00, imgSrc: 'assets/vessels/rowboat.png',   drawWidth: 100, drawHeight: 150 },
        { minScore: 25,  id: 'sailboat',  icon: '⛵', name: 'Wind Sailboat',    speedMult: 1.25, imgSrc: 'assets/vessels/sailboat.png',  drawWidth: 100, drawHeight: 150 },
        { minScore: 60,  id: 'speedboat', icon: '🚤', name: 'Turbo Speedboat',  speedMult: 1.55, imgSrc: 'assets/vessels/speedboat.png', drawWidth: 100, drawHeight: 150 },
        { minScore: 110, id: 'yacht',     icon: '🛥️', name: 'Ocean Yacht',      speedMult: 1.80, imgSrc: 'assets/vessels/yacht.png',     drawWidth: 100, drawHeight: 150 }
    ],

    // ================= 5. Fishing Gear Config (Net / Harpoon Extension Slot) =================
    fishingGear: {
        activeTool: 'net', // Active tool: 'net' | future extension 'harpoon'
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
            name: 'Steel Harpoon (Reserved)',
            imgSrc: 'assets/harpoon.png',
            rangeRadius: 28,
            speed: 920,
            scoreMult: 1.5,
            enabled: false
        }
    },

    // ================= 6. Fish Size Tiers & Scoring Config =================
    fishTiers: {
        small:  { key: 'small',  label: 'Small Fish',  slots: [0, 1, 2, 3],   sizeMult: 0.82, jumpProb: 0.42, basePoints: 1, jumpPoints: 5 },
        medium: { key: 'medium', label: 'Medium Fish', slots: [4, 5, 6, 7],   sizeMult: 1.00, jumpProb: 0.32, basePoints: 2, jumpPoints: 5 },
        large:  { key: 'large',  label: 'Large Fish',  slots: [8, 9, 10, 11], sizeMult: 1.50, jumpProb: 0.22, basePoints: 4, jumpPoints: 8 }
    },

    // ================= 7. Rock Obstacle Config (Sprites 400x300, 4:3 Aspect Ratio) =================
    obstacles: {
        dir: 'assets/obstacles/',
        files: ['rock1.png', 'rock2.png', 'rock3.png', 'rock4.png'],
        baseW: 84,                  // Preserves 400x300 4:3 ratio
        baseH: 63,
        horizonPauseDuration: 0.85, // Seconds pausing and growing slightly after breaching horizon
        horizonPauseGrowMult: 1.38  // Scale multiplier at end of horizon pause vs initial emergence
    }
};