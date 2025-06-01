"use strict";

function doAjax(method, url, headers, onSuccess, onError) {
    if (window.fetch) {

    } else if (window.XMLHttpRequest) {
        
    } else {
        throw new Error("No AJAX API available in this browser");
    }
}