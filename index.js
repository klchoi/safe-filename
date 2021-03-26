exports.name = name => name
    .replace(/\.$/g, 'ꓸ')
    .replace(/\?/g, '❓')
    .replace(/\\/g, ' ⃥')
    .replace(/\//g, '⟋')
    .replace(/\|/g, '│')
    .replace(/:/g, '꞉')
    .replace(/</g, 'ᐸ')
    .replace(/>/g, 'ᐳ')
    .replace(/>/g, 'ᐳ')
    .replace(/"/g, 'ᐦ')
    .replace(/\*/g, '꘎')

exports.path = path => require('path').join(... path.split(/\/|\\/).map(exports.name))
