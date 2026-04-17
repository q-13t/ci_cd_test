import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ["**/*.jsx"],
        ignores: ["node_modules/**"],
        languageOptions: {
            parser: tsParser, // use this + files: ["**/*.tsx"] for TypeScript/TSX
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
        },
        rules: {
            "no-console": "error",
            "semi": ["error", "always"]
        }
    }
];