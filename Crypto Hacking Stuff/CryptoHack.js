/**
* @README
* Copyright (c) Hell Modz 2023 
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
*/


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
        
            if (window.location.pathname != '/play/hack') {
                alert('Not in crytpo hack idiot 💀');
            } else {
                let amount = Number(parseFloat(prompt('Set Your Crypto To What?')));
                reactHandler().stateNode.setState({ crypto2: amount, crypto: amount });
        
                alert('Crypto Added, Get 1 Question Correct!');
            };
})();
