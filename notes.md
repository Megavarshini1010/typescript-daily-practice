//---------TypeScript Compiler Pipeline------------//
TypeScript Source Code
        ↓
Scanner (Tokenization)
        ↓
Parser (Create AST)
        ↓
Type Checker
        ↓
Transformer
        ↓
Emitter (Generate JavaScript)
1. Scanner- The scanner converts code into tokens.
let age: number = 25
Tokens:
let | age | : | number | = | 25
2. Parser - The parser converts tokens into an AST (Abstract Syntax Tree).
VariableDeclaration
├─ Name: age
├─ Type: number
└─ Value: 25
3.Type Checker - This step validates types.
4.Transformer - TypeScript removes types and converts code to JavaScript.
5. Emitter - It generates the final .js files.
