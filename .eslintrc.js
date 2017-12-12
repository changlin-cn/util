module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    globals:{

    },
    parser:'babel-eslint',
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        'no-unused-vars':0,
        'no-console':0,
    }
}
