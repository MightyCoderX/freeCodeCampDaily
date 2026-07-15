/* HTML Content Extractor

Given a string of HTML, return the plain text content with all tags removed.

*/

function extractContent(html) {
    return html.replaceAll(/\<[^>]+>/g, "");
}
