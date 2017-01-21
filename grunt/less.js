module.exports = {

    dev: {
        files: {
            "themes/bn2016/static/css/screen.css": "themes/bn2016/static/css/styles.less"
        }
    },
    prod: {
        options: {
            compress: true
        },
        files: {
            "themes/bn2016/static/css/screen.css": "themes/bn2016/static/css/styles.less"
        }
    }

};