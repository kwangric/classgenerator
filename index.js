const options = {
    // Primary
    'primaryWeapon': {
        // AR
        'M4A1': 'AR',
        'M16A4': 'AR',
        'SCAR-L': 'AR',
        'CM901': 'AR',
        'TYPE 95': 'AR',
        'G36C': 'AR',
        'ACR 6.8': 'AR',
        'MK14': 'AR',
        'AK-47': 'AR',
        'FAD': 'AR',

        // SMG
        'MP5': 'SMG',
        'UMP45': 'SMG',
        'PP90M1': 'SMG',
        'P90': 'SMG',
        'PM-9': 'SMG',
        'MP7': 'SMG',

        // LMG
        'L86 LSW': 'LMG',
        'MG36': 'LMG',
        'PKP PECHENEG': 'LMG',
        'MK46': 'LMG',
        'M60E4': 'LMG',

        // Sniper
        'BARRETT 50 CAL': 'Sniper',
        'L118A': 'Sniper',
        'DRAGUNOV': 'Sniper',
        'AS50': 'Sniper',
        'RSASS': 'Sniper',
        'MSR': 'Sniper',

        // Shotgun
        'USAU 12': 'Shotgun',
        'KSG 12': 'Shotgun',
        'SPAS 12': 'Shotgun',
        'AA 12 ': 'Shotgun',
        'STRIKER': 'Shotgun',
        'MODEL 1887': 'Shotgun',

        // Riot Shield
        'Riot Shield': 'Riot Shield'
    },

    // Primary Proficiency
    'primaryProficiency': {
        'AR': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'BREATH', 'STABILITY'],
        'SMG': ['NONE', 'KICK', 'RANGE', 'ATTACHMENTS', 'FOCUS', 'MELEE', 'STABILITY'],
        'LMG': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'SPEED', 'STABILITY'],
        'Sniper': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'SPEED', 'STABILITY'],
        'Shotgun': ['NONE', 'KICK', 'FOCUS', 'ATTACHMENTS', 'MELEE', 'RANGE', 'DAMAGE'],
        'Riot Shield': ['NONE', 'MELEE', 'SPEED'],
    },

    // Primary Attachment
    'primaryAttachment': {
        'AR': ['NONE', 'RED DOT', 'SILENCER', 'TUBE', 'ACOG', 'HEARTBEAT', 'HOLOGRAPHIC', 'SHOTGUN', 'HYBRID', 'EXTENDED MAG', 'THERMAL'],
        'SMG': ['NONE', 'RED DOT', 'SILENCER', 'RAPID FIRE', 'ACOG SCOPE', 'HOLOGRAPHIC', 'HAMR', 'EXTENDED MAG', 'THERMAL'],
        'LMG': ['NONE', 'RED DOT', 'SILENCER', 'GRIP', 'ACOG', 'RAPID FIRE', 'HEARTBEAT', 'HOLOGRAPHIC', 'EXTENDED MAG', 'THERMAL'],
        'Sniper': ['NONE', 'ACOG', 'SILENCER', 'HEARTBEAT', 'EXTENDED MAG', 'THERMAL', 'VARIABLE ZOOM'],
        'Shotgun': ['NONE', 'GRIP', 'SILENCER', 'RED DOT', 'HOLOGRAPHIC', 'EXTENDED MAG'],
        'Riot Shield': ['NONE'],
    },

    // Secondary
    'secondaryWeapon': {
        // Machine Pistol
        'FMG9': 'Machine Pistol',
        'MP9': 'Machine Pistol',
        'SKORPION': 'Machine Pistol',
        'G18': 'Machine Pistol',

        // Handgun
        'USP 45': 'Handgun',
        'P99': 'Handgun',
        'MP412': 'Handgun',
        '44 MAGNUM': 'Handgun',
        'FIVE SEVEN': 'Handgun',
        'DESERT EAGLE': 'Handgun',

        // Launcher
        'SMAW': 'Launcher',
        'JAVELIN': 'Launcher',
        'STINGER': 'Launcher',
        'XM25': 'Launcher',
        'M320 GLM': 'Launcher',
        'RPG 7': 'Launcher',
    },

    // Secondary Attachment
    'secondaryAttachment': {
        'Machine Pistol': ['NONE', 'SILENCER', 'AKIMBO', 'RED DOT', 'HOLOGRAPHIC', 'EXTENDED MAG'],
        'Handgun': ['NONE', 'SILENCER', 'AKIMBO', 'TAC KNIFE', 'EXTENDED MAG'],
        'Launcher': ['NONE']
    },

    // Lethal
    'lethal': ['FRAG', 'SEMTEX', 'THROWING KNIFE', 'BOUNCING BETTY', 'CLAYMORE', 'C4'],

    // Tactical
    'tactical': ['FLASH', 'CONCUSSION', 'SCRAMBLER', 'EMP', 'SMOKE', 'TROPHY SYSTEM', 'TAC INSERT', 'PORTABLE RADAR'],

    // Perk 1
    'perk1': ['RECON', 'SLEIGHT OF HAND', 'BLIND EYE', 'EXTREME CONDITIONING', 'SCAVENGER'],

    // Perk 2
    'perk2': ['QUICKDRAW', 'BLAST SHIELD', 'HARDLINE', 'ASSASSIN', 'OVERKILL'],

    // Perk 3
    'perk3': ['MARKSMAN', 'STALKER', 'SITREP', 'STEADY AIM', 'DEAD SILENCE']
}

const loadout = {
    'primaryWeapon': null,
    'primaryProficiency': null,
    'primaryAttachment': null,
    'secondaryWeapon': null,
    'secondaryAttachment': null,
    'lethal': null,
    'tactical': null,
    'perk1': null,
    'perk2': null,
    'perk3': null,
}

let primaryWeaponType
let secondaryWeaponType
let secondaryProficiency

const generate = () => {
    // Clear secondary proficiency
    document.getElementById('secondaryProficiency').innerText = ''
    secondaryProficiency = null

    Object.keys(loadout).forEach(option => {
        let selection
        let list = options[option]
        if (Array.isArray(list)) {
            selection = list[Math.floor(Math.random()*list.length)]
        } else {
            if (option === 'primaryWeapon') {
                let weapons = Object.keys(list)
                let primaryWeapon = weapons[Math.floor(Math.random()*weapons.length)]
                primaryWeaponType = list[primaryWeapon]
                selection = primaryWeapon
            } else if (option === 'secondaryWeapon') {
                let weapons = Object.keys(list)
                let secondaryWeapon = weapons[Math.floor(Math.random()*weapons.length)]
                secondaryWeaponType = list[secondaryWeapon]
                selection = secondaryWeapon
            } else if (option === 'primaryProficiency' || option === 'primaryAttachment'){
                selection = list[primaryWeaponType][Math.floor(Math.random()*list[primaryWeaponType].length)]
            } else if (option === 'secondaryAttachment') {
                selection = list[secondaryWeaponType][Math.floor(Math.random()*list[secondaryWeaponType].length)]
            }
        }
        loadout[option] = selection
    })

    // Roll second primary if OVERKILL perk is rolled
    if (loadout['perk2'] === 'OVERKILL') {
        // Weapon
        let weapons = Object.keys(options['primaryWeapon'])
        let primaryWeapon = loadout['primaryWeapon']
        let secondaryWeapon
        while (!secondaryWeapon || primaryWeapon === secondaryWeapon) {
            secondaryWeapon = weapons[Math.floor(Math.random()*weapons.length)]
        }
        secondaryWeaponType = options['primaryWeapon'][secondaryWeapon]
        loadout['secondaryWeapon'] = secondaryWeapon
        
        // Proficiency
        secondaryProficiency = options['primaryProficiency'][secondaryWeaponType][Math.floor(Math.random()*options['primaryProficiency'][secondaryWeaponType].length)]
        document.getElementById('secondaryProficiency').innerText = secondaryProficiency

        // Attachment
        loadout['secondaryAttachment'] = options['primaryAttachment'][secondaryWeaponType][Math.floor(Math.random()*options['primaryAttachment'][secondaryWeaponType].length)]
    }

    // Roll two primary attachments if ATTACHMENTS proficiency is rolled
    if (loadout['primaryProficiency'] === 'ATTACHMENTS') {
        // Reroll attachment if NONE
        while (loadout['primaryAttachment'] === 'NONE') {
            loadout['primaryAttachment'] = options['primaryAttachment'][primaryWeaponType][Math.floor(Math.random()*options['primaryAttachment'][primaryWeaponType].length)]
        }
        let primaryAttachment = loadout['primaryAttachment']
        let primaryAttachment2
        while (!primaryAttachment2 || primaryAttachment === primaryAttachment2 || primaryAttachment2 === 'NONE' || (primaryAttachment === 'RED DOT' && primaryAttachment2 === 'ACOG') || (primaryAttachment === 'ACOG' && primaryAttachment2 === 'RED DOT')) {
            primaryAttachment2 = options['primaryAttachment'][primaryWeaponType][Math.floor(Math.random()*options['primaryAttachment'][primaryWeaponType].length)]
        }
        loadout['primaryAttachment'] = loadout['primaryAttachment'] + '/' + primaryAttachment2
    }

    // Roll two secondary attachments if ATTACHMENTS proficiency is rolled
    if (secondaryProficiency === 'ATTACHMENTS') {
        // Reroll attachment if NONE
        while (loadout['secondaryAttachment'] === 'NONE') {
            loadout['secondaryAttachment'] = options['primaryAttachment'][secondaryWeaponType][Math.floor(Math.random()*options['primaryAttachment'][secondaryWeaponType].length)]
        }
        let secondaryAttachment = loadout['secondaryAttachment']
        let secondaryAttachment2
        while (!secondaryAttachment2 || secondaryAttachment === secondaryAttachment2 || secondaryAttachment2 === 'NONE' || (secondaryAttachment === 'RED DOT' && secondaryAttachment2 === 'ACOG') || (secondaryAttachment === 'ACOG' && secondaryAttachment2 === 'RED DOT')) {
            secondaryAttachment2 = options['primaryAttachment'][secondaryWeaponType][Math.floor(Math.random()*options['primaryAttachment'][secondaryWeaponType].length)]
        }
        loadout['secondaryAttachment'] = loadout['secondaryAttachment'] + '/' + secondaryAttachment2
    }
    
    Object.keys(loadout).forEach(option => {
        document.getElementById(option).innerText = loadout[option]
    })
}

document.getElementById('generate').addEventListener('click', generate)