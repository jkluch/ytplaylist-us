// ==UserScript==
// @name         Youtube open to playlist page
// @namespace    https://github.com/jkluch/ 
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/jkluch/ytplaylist-us/master/ytplaylist-us.user.js
// @description  When you click on a playlist on youtube, instead of opening to a video in playlist mode, it'll open to the playlist page instead.
// @author       jkluch
// @match        *://www.youtube.com/user/*/playlists*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ytplaylist_fixer = {
        start: function(){
            let thumbnails = document.querySelectorAll('ytd-grid-playlist-renderer.style-scope > ytd-playlist-thumbnail > a');
            let lower_links = document.querySelectorAll('ytd-grid-playlist-renderer.style-scope > a');

            var regex = new RegExp('list.*');

            for(let i = 0; i < thumbnails.length; i++){
                var link = regex.exec(thumbnails[i].href)[0];
                thumbnails[i].href = '/playlist?'+link;
                lower_links[i].href = '/playlist?'+link;
            }
        }
    };

    ytplaylist_fixer.start();
})();
