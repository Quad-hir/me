/**
   * Create By THE JO BOT
   * Base By Dika
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ownername = 'π―UΝ‘Νπ-π­πΊπ'
// Other
global.owner = ['2347082252014','2347046411495']
global.premium = ['2347082252014','2347046411495']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.wlcm = ['Heyπ€­β£οΈ, I am π―UΝ‘Νπ-π­πΊππ¦']
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    success: 'β Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'π―UΝ‘Νπ-π­πΊπ must be an admin first!',
    owner: 'Owners Special Features',
    group: 'Feature is used only in Groups!',
    private: 'Feature is used only in private chat!',
    bot: 'Special Features For Bot Number Users',
    wait: 'πππππππ...',
    endLimit: 'Your daily limit has been exhausted, The limit will be reset every 12 hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
