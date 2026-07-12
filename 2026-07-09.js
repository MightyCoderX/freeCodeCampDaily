/* Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:

 - "bug" and "needs triage" if the title contains "error" or "bug"
 - "enhancement" and "discussing" if the title contains "feature" or "add"

Otherwise, if the given labels contain:

    "needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
    "discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
    Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"

If the title contains:

 - "security", add a "critical" label

*/

function triageIssue(title, labels) {
    const includesAny = (haystack, needles) => needles.some(n => haystack.includes(n));

    const remove = (arr, val) => {
        const i = arr.indexOf(val);
        return i !== -1 && arr.splice(i, 1);
    };

    if (labels.length === 0) {
        if (includesAny(title, ["error", "bug"])) {
            labels.push("bug", "needs triage");
        }
        else if (includesAny(title, ["feature", "add"])) {
            labels.push("enhancement", "discussing");
        }
    }
    else {
        if (
            labels.includes("needs triage") &&
            includesAny(title, ["simple", "easy"])
        ) {
            remove(labels, "needs triage");
            labels.push("good first issue");
        }
        else if (labels.includes("discussing") && includesAny(title, ["planned", "next"])) {
            remove(labels, "discussing");
            labels.push("on the roadmap");
        } else if (includesAny(labels, ["needs triage", "discussing"])) {
            remove(labels, "needs triage");
            remove(labels, "discussing");
            labels.push("help wanted");
        }
    }

    if (title.includes("security")) {
        labels.push("critical");
    }

    return labels;
}
