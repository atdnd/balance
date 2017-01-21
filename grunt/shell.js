module.exports = function (grunt, log){
    return {
        develop: {
            command: "hugo server -w"
        },
        build: {
            command: "hugo --config=prod-config.yaml"
        },
        deploy: {
            command: "",
            options: {
                callback: log
            }
        }
    }
};
