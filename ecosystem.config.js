module.exports = {
    apps: [{
      name: 'website-ui'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'www.chrisboucher.co.uk',
        key: '../nodejs-server.pem',
        ref: 'origin/master',
        repo: 'git@github.com:CoolName1993/website-ui.git',
        path: '/home/ubuntu/server',
        'post-deploy': 'npm install && npm run-script build-prod'
      }
    }
  }