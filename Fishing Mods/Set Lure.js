(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname != '/play/fishing') {
                alert('Not in fishing frenzy idiot');
            } else {
                let lure = Number(parseFloat(prompt('Set Lure: (1 - 5)'))) - 1;
                reactHandler().stateNode.setState({ lure: lure < 0 ? 0 : lure > 4 ? 4 : lure });
        
                alert('Your lure is set :)');
            };
})();
