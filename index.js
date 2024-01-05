const options = [
    // Primary
    {
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
    {
        'AR': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'BREATH', 'STABILITY'],
        'SMG': ['NONE', 'KICK', 'RANGE', 'ATTACHMENTS', 'FOCUS', 'MELEE', 'STABILITY'],
        'LMG': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'SPEED', 'STABILITY'],
        'Sniper': ['NONE', 'KICK', 'IMPACT', 'ATTACHMENTS', 'FOCUS', 'SPEED', 'STABILITY'],
        'Shotgun': ['NONE', 'KICK', 'FOCUS', 'ATTACHMENTS', 'MELEE', 'RANGE', 'DAMAGE'],
        'Riot Shield': ['NONE', 'MELEE', 'SPEED'],
    },

    // Primary Attachment
    {
        'AR': ['NONE', 'RED DOT', 'SILENCER', 'TUBE', 'ACOG', 'HEARTBEAT', 'HOLOGRAPHIC', 'SHOTGUN', 'HYBRID', 'EXTENDED MAG', 'THERMAL'],
        'SMG': ['NONE', 'RED DOT', 'SILENCER', 'RAPID FIRE', 'ACOG SCOPE', 'HOLOGRAPHIC', 'HAMR', 'EXTENDED MAG', 'THERMAL'],
        'LMG': ['NONE', 'RED DOT', 'SILENCER', 'GRIP', 'ACOG', 'RAPID FIRE', 'HEARTBEAT', 'HOLOGRAPHIC', 'EXTENDED MAG', 'THERMAL'],
        'Sniper': ['NONE', 'ACOG', 'SILENCER', 'HEARTBEAT', 'EXTENDED MAG', 'THERMAL', 'VARIABLE ZOOM'],
        'Shotgun': ['NONE', 'GRIP', 'SILENCER', 'RED DOT', 'HOLOGRAPHIC', 'EXTENDED MAG'],
        'Riot Shield': ['NONE'],
    },

    // Secondary
    {
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
    {
        'Machine Pistol': ['NONE', 'SILENCER', 'AKIMBO', 'RED DOT', 'HOLOGRAPHIC', 'EXTENDED MAG'],
        'Handgun': ['NONE', 'SILENCER', 'AKIMBO', 'TAC KNIFE', 'EXTENDED MAG'],
        'Launcher': ['NONE']
    },

    // Lethal
    ['FRAG', 'SEMTEX', 'THROWING KNIFE', 'BOUNCING BETTY', 'CLAYMORE', 'C4'],

    // Tactical
    ['FLASH', 'CONCUSSION', 'SCRAMBLER', 'EMP', 'SMOKE', 'TROPHY SYSTEM', 'TAC INSERT', 'PORTABLE RADAR'],

    // Perk 1
    ['RECON', 'SLEIGHT OF HAND', 'BLIND EYE', 'EXTREME CONDITIONING', 'SCAVENGER'],

    // Perk 2
    ['QUICKDRAW', 'BLAST SHIELD', 'HARDLINE', 'ASSASSIN', 'OVERKILL'],

    // Perk 3
    ['MARKSMAN', 'STALKER', 'SITREP', 'STEADY AIM', 'DEAD SILENCE']
]

let primaryWeaponType
let secondaryWeaponType

const generate = () => {
    const results = Array.from(document.getElementsByClassName('result'))
    results.forEach((result, index) => {
        let selection
        let list = options[index]
        if (Array.isArray(list)) {
            selection = list[Math.floor(Math.random()*list.length)]
        } else {
            if (index === 0) {
                let weapons = Object.keys(list)
                let primaryWeapon = weapons[Math.floor(Math.random()*weapons.length)]
                primaryWeaponType = list[primaryWeapon]
                selection = primaryWeapon
            } else if (index === 3) {
                let weapons = Object.keys(list)
                let secondaryWeapon = weapons[Math.floor(Math.random()*weapons.length)]
                secondaryWeaponType = list[secondaryWeapon]
                selection = secondaryWeapon
            } else if (index === 1 || index === 2){
                selection = list[primaryWeaponType][Math.floor(Math.random()*list[primaryWeaponType].length)]
            } else if (index === 4) {
                selection = list[secondaryWeaponType][Math.floor(Math.random()*list[secondaryWeaponType].length)]
            }
        }
        result.innerText = selection
    })
}

document.getElementById('generate').addEventListener('click', generate)