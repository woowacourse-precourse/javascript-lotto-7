export default [
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
		},
		rules: {
			"quotes": ["error", "single"],
			"object-curly-spacing": ["error", "always"],
			"indent": ["error", "tab", { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"] }],
			"max-len": ["error", { "code": 100, "tabWidth": 4 }],
			"wrap-iife": ["error", "outside"],
			"newline-before-return": "error",
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		},
		settings: {
			tabWidth: 4,
		},
	},
];