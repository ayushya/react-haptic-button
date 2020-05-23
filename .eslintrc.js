module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "new-cap": 0,
    "no-unused-vars": 2,
    "no-undef": 2,
    "no-alert": 0,
    "no-var": 2,
    "prefer-const": 2,
    "handle-callback-err": 0,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-equals-spacing": 2,
    "react/no-find-dom-node": 0,
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-dangle": [2, "always-multiline"],
    "semi": [2, "always"],
    "space-infix-ops": [2, {"int32Hint": false}],
    "object-curly-spacing": [2, "always"],
    "indent": ["error", 2, { "SwitchCase": 1, "flatTernaryExpressions": true, "ignoredNodes": ["ConditionalExpression"] }],
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^on.+$/",
        "/^render.+$/",
        "render"
      ]
    }],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-first-prop-new-line": 2,
    "react/jsx-max-props-per-line": [2, { "maximum": 1, "when": "multiline" }],
    "react/display-name": 0,
    "react/jsx-pascal-case": [2, { "allowAllCaps": true }],
    "react/jsx-tag-spacing": 2,
    "react/jsx-closing-bracket-location": 2,
    "key-spacing": 2,
    "keyword-spacing": 2,
    "space-before-function-paren": 2,
    "space-before-blocks": 2,
    "func-call-spacing": 2,
    "arrow-spacing": 2,
    "prefer-arrow-callback": 2,
    "eol-last": 2,
    "no-empty-function": 2,
    "comma-style": 2,
    "object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }],
    "object-curly-newline": [2, { "multiline": true, "consistent": true }],
    "multiline-ternary": [2, "always-multiline"],
    "operator-linebreak": [2, "after"],
    "react/prop-types": 2,
    "no-shadow": 2,
    "jsx-a11y/alt-text": [ 2, {
      "elements": [ "img", "object", "area", "input[type=\"image\"]" ],
      "img": ["Image"],
      "object": ["Object"],
      "area": ["Area"],
      "input[type=\"image\"]": ["InputImage"]
    }],
    "simple-import-sort/sort": 2,
    "sort-imports": 0,
    "import/order": 0,
    "react/self-closing-comp": 2,
    "no-async-promise-executor": 0,
    "import/no-unresolved": [2, { ignore: ['\.(scss|less|css)$'] }]
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "simple-import-sort"
  ],
  "settings": {
    "react": {
      "version": "16.4.2"
    }
  }
}
  