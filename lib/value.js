
exports.types = [
    {name: 'Class'},
    {name: 'Functional'},
];

exports.files = [
    {name: 'js'},
    {name: 'css'},
    {name: 'scss'},
    {name: 'ts'},
    {name: 'json'},
    {name: 'jsx'},
    {name: 'README'},
    {name: 'config'},
    {name: 'gitignore'},
    {name: 'npmignore'},
];

exports.typesPlain = exports.types.map(function(o) {
    return o.name; 
});

exports.filesPlain = exports.files.map(f => 
    f.name
)

exports.stylef = [
    {name: 'CSS'},
    {name: 'SASS'},
];
exports.stylePlain = exports.stylef.map(function(o) {
    return o.name ;
});