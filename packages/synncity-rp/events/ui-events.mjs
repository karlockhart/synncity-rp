mp.events.addCommand('showui', (player) => {
    player.call('browserExecute', ['http://localhost:3000']);
});

mp.events.addCommand('hideui', (player) => {
    player.call('browserDestroy', []);
});
