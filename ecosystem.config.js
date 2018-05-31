module.exports = {
    apps: [{
      name: 'website-ui',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'chrisboucher.co.uk',
        key: '../nodejs-server.pem',
        ref: 'origin/master',
        repo: 'git@github.com:CoolName1993/website-ui.git',
        path: '/home/ubuntu/server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }