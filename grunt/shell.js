module.exports = function (grunt, log){
    return {
        develop: {
            command: "hugo server -w"
        },
        build: {
            command: "hugo --config=prod-config.yaml"
        },
        deploy: {
            command: "scp -r public/.* armitage:/var/www/balance/",
            options: {
                callback: log
            }
        },
        deployImg: {
            command: ["chmod 655 public/img",
                "scp -r public/img armitage:/var/www/balance/"].join("&&"),
            options: {
                callback: log
            }
        },
        deployAudio: {
            command: ["chmod 655 public/audio",
                "scp -r public/audio armitage:/var/www/balance/"].join("&&"),
            options: {
                callback: log
            }
        }
    }
};
