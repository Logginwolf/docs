"use strict";

(function () {
    function getAppliedEdition() {
        var appliedEdition = document.querySelector("html").getAttribute("data-logginwolf-archive-edition");

        if (typeof appliedEdition !== "string" || !/^[1-9][0-9]*$/.test(appliedEdition)) {
            throw new Error("Edition number unspecified");
        }

        return appliedEdition;
    }

    function linkSchemaSrc() {
        var ghSrcLink = "https://github.com/Logginwolf/schemas/blob";
        ghSrcLink += "/" + getAppliedEdition() + "/preferences.json";

        document.querySelector("a[data-jsonschema-gh-src]").setAttribute("href", ghSrcLink);
    }

    linkSchemaSrc();
    hljs.highlightAll();
})();