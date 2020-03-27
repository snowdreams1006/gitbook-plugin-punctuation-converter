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
            var punctuationConverterConfig = this.options.pluginsConfig["punctuation-converter"] || {};
            var open = punctuationConverterConfig.open;
            if (open) {
                page.content = page.content.replace(/,/g, ',')
                    .replace(/[^a-zA-Z],/g, '，')
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