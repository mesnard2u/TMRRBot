const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/buttons/*/*.js`)).map(async btnFile => {
        const btn = require(btnFile);
        
        
        
        
        console.log(btn.name, btn);
        client.buttons.set(btn.name, btn);        
        
    });
};
