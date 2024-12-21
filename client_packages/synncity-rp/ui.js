let cefBrowser = null;

mp.events.add('browserExecute', (url) => {
    if (!cefBrowser) {
        cefBrowser = mp.browsers.new(url);
    }
});

mp.events.add('browserDestroy', () => {
    if (cefBrowser) {
        cefBrowser.destroy();
        cefBrowser = null;
    }
});
