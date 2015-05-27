module.exports = {

    dev: {
        files: {
            "themes/bn/static/css/screen.css": "themes/bn/static/css/styles.less"
        }
    },
    prod: {
        options: {
            compress: true
        },
        files: {
            "themes/bn/static/css/screen.css": "themes/bn/static/css/styles.less"
        }
    }

};