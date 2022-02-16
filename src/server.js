const Obserser = require('./services/watcher/observer');
const { sendToQueue } = require('./services/rabbit/publisher');

var obserser = new Obserser();

const folder = '/tmp';
obserser.on('file-added', (log) => {
    console.log(log.message);
    sendToQueue(log.message);
});
obserser.watchFolder(folder);

const file = './info.log';
obserser.on('file-updated', (log) => {
    console.log(log.message);
});

obserser.watchFile(file);
