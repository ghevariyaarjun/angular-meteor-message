module.exports = {
    servers: {
        one: {
            "host": "ec2-52-38-222-134.us-west-2.compute.amazonaws.com",
            "username": "ubuntu",
            "pem": "D:/projects/meteor/whatsapp2/.deploy/mahidaparth7.pem"
        }
    },
    meteor: {
        name: 'whatsapp',
        path: 'D:/projects/meteor/whatsapp2/api',
        servers: {
            one: {},
        },
        buildOptions: {
            serverOnly: true,
            buildLocation: 'D:/projects/meteor/build', // defaults to /tmp/<uuid>
        },
        env: {
            PORT: 3000,
            ROOT_URL: 'http://ec2-52-38-222-134.us-west-2.compute.amazonaws.com'
        },
        docker: {
            image: 'abernix/meteord:base',
        },
        deployCheckWaitTime: 600,
        enableUploadProgressBar: false
    },
    mongo: {
        oplog: true,
        port: 27017,
        version: '3.4.1',
        servers: {
            one: {}
        }
    }
};
