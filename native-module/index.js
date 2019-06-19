const nodeconfAddon = 
    require('./build/Release/nodeconfAddon.node');
    
console.log('nodeconfAddon', nodeconfAddon);
console.log(nodeconfAddon.multiply(10, 2));

module.exports = nodeconfAddon;

