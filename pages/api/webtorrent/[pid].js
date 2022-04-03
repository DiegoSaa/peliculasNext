const WebTorrent = require('webtorrent');
const fs= require('fs');
const client = new WebTorrent({
  maxConns: 10,        // Max number of connections per torrent (default=55)
  nodeId: String|Buffer,   // DHT protocol node ID (default=randomly generated)
  peerId: String|Buffer,   // Wire protocol peer ID (default=randomly generated)
  tracker: Boolean|Object, // Enable trackers (default=true), or options object for Tracker
  dht: Boolean|Object,     // Enable DHT (default=true), or options object for DHT
  lsd: Boolean,            // Enable BEP14 local service discovery (default=true)
  webSeeds: Boolean,       // Enable BEP19 web seeds (default=true)
  utp: Boolean,            // Enable BEP29 uTorrent transport protocol (default=false)
});

export default async function handler(req, res) {

  let filesData = {};

  const torrentId = 'magnet:?xt=urn:btih:32D44E769718ECE6A147FBE2E380A27F2BD59AE6&dn=SpiderMan%20No%20Way%20Home%202021%20V2%20x264%20AAC%201200MB%20720p%20HDCAM&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce'
  console.log('torrentId:\t', torrentId);

  client.add(torrentId, torrent => {
    const files = torrent.files
    let length = files.length
    // Stream each file to the disk
    files.forEach( (file, index) => {
      const source = file.createReadStream()
      const destination = fs.createWriteStream(file.name)
      filesData = { ...filesData, [index]: file.name}
      source.on('end', () => {
        console.log('file:\t\t', file.name)
        // close after all files are saved
        length -= 1
        if (!length) console.log("terminado")
      }).pipe(destination)
    })
  })

  console.log("data: ", filesData);
  await res.end(JSON.stringify(filesData));
}
