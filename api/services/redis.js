const redis                     = require('redis')
const CONFIG                    = require('../config');
const log                       = require('../services/logger')

let client = redis.createClient({
    port:                   CONFIG.redis_port,
    host:                   CONFIG.redis_host,
    password:               CONFIG.redis_password,
    family:                 4,                      // 4 (IPv4) or 6 (IPv6)
    maxRetriesPerRequest:   null,                   // unlimited retries
})

client.on('error', (err)=>{
    log.error('REDIS fail to connect.', err)
})

client.on('connect', () => {
    log.info(`REDIS connected to ${CONFIG.redis_host}:${CONFIG.redis_port}`);
});

client.set('__ACA', 'OK');

module.exports.redis = client;