/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 */

module.exports = {
    hooks: {
        "page:before": function(page) {
            if (this.options.pluginsConfig["punctuation-converter"]) {

                page.content = page.content.replace(/,/g, ',')
                    .replace(/,/g, '，')
                    .replace(/\.$/mg, '。')
                    .replace(/:[^/]/g, '：')
                    .replace(/;/g, '；')
                    .replace(/![^[]/g, '！')
                    .replace(/<</g, '《')
                    .replace(/>>/g, '》');

                return page;
            }
        }
    }
};