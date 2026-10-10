type NumericValues = Record<string, string | number | undefined>;

type Token =
  | { type: "number"; value: number }
  | { type: "identifier"; value: string }
  | { type: "operator"; value: string }
  | { type: "punctuation"; value: "(" | ")" | "," | "?" | ":" }
  | { type: "eof" };

const ALLOWED_FUNCTIONS: Record<string, (...args: number[]) => number> = {
  abs: Math.abs,
  ceil: Math.ceil,
  floor: Math.floor,
  round: Math.round,
  trunc: Math.trunc,
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  exp: Math.exp,
  log: Math.log,
  log10: Math.log10,
  log2: Math.log2,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  hypot: Math.hypot,
  min: Math.min,
  max: Math.max,
  pow: Math.pow,
};

const CONSTANTS: Record<string, number> = {
  PI: Math.PI,
  E: Math.E,
  "Math.PI": Math.PI,
  "Math.E": Math.E,
};

function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;

  while (index < expression.length) {
    const char = expression[index];

    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    if (/\d|\./.test(char)) {
      const match = expression.slice(index).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
      if (!match) throw new Error("Invalid number");
      const value = Number(match[0]);
      if (!Number.isFinite(value)) throw new Error("Non-finite number");
      tokens.push({ type: "number", value });
      index += match[0].length;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      const match = expression.slice(index).match(/^[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)*/);
      if (!match) throw new Error("Invalid identifier");
      tokens.push({ type: "identifier", value: match[0] });
      index += match[0].length;
      continue;
    }

    const three = expression.slice(index, index + 3);
    const two = expression.slice(index, index + 2);
    if (["===", "!=="].includes(three)) {
      tokens.push({ type: "operator", value: three });
      index += 3;
      continue;
    }
    if (["**", "<=", ">=", "==", "!=", "&&", "||"].includes(two)) {
      tokens.push({ type: "operator", value: two });
      index += 2;
      continue;
    }
    if (["+", "-", "*", "/", "%", "<", ">", "!"].includes(char)) {
      tokens.push({ type: "operator", value: char });
      index += 1;
      continue;
    }
    if (["(", ")", ",", "?", ":"].includes(char)) {
      tokens.push({ type: "punctuation", value: char as "(" | ")" | "," | "?" | ":" });
      index += 1;
      continue;
    }

    throw new Error(`Unsupported token: ${char}`);
  }

  tokens.push({ type: "eof" });
  return tokens;
}

class Parser {
  private index = 0;

  constructor(
    private readonly tokens: Token[],
    private readonly values: Record<string, number>,
  ) {}

  parse(): number {
    const value = this.parseConditional();
    if (this.current().type !== "eof") throw new Error("Unexpected trailing input");
    return value;
  }

  private current(): Token {
    return this.tokens[this.index];
  }

  private consume(): Token {
    const token = this.tokens[this.index];
    this.index += 1;
    return token;
  }

  private matchOperator(...operators: string[]): string | null {
    const token = this.current();
    if (token.type === "operator" && operators.includes(token.value)) {
      this.consume();
      return token.value;
    }
    return null;
  }

  private matchPunctuation(value: "(" | ")" | "," | "?" | ":"): boolean {
    const token = this.current();
    if (token.type === "punctuation" && token.value === value) {
      this.consume();
      return true;
    }
    return false;
  }

  private expectPunctuation(value: "(" | ")" | "," | "?" | ":") {
    if (!this.matchPunctuation(value)) throw new Error(`Expected ${value}`);
  }

  private parseConditional(): number {
    const condition = this.parseLogicalOr();
    if (!this.matchPunctuation("?")) return condition;
    const whenTrue = this.parseConditional();
    this.expectPunctuation(":");
    const whenFalse = this.parseConditional();
    return condition !== 0 ? whenTrue : whenFalse;
  }

  private parseLogicalOr(): number {
    let value = this.parseLogicalAnd();
    while (this.matchOperator("||")) value = value !== 0 || this.parseLogicalAnd() !== 0 ? 1 : 0;
    return value;
  }

  private parseLogicalAnd(): number {
    let value = this.parseEquality();
    while (this.matchOperator("&&")) value = value !== 0 && this.parseEquality() !== 0 ? 1 : 0;
    return value;
  }

  private parseEquality(): number {
    let value = this.parseComparison();
    while (true) {
      const operator = this.matchOperator("==", "===", "!=", "!==");
      if (!operator) return value;
      const right = this.parseComparison();
      const equal = value === right;
      value = operator === "==" || operator === "===" ? (equal ? 1 : 0) : (equal ? 0 : 1);
    }
  }

  private parseComparison(): number {
    let value = this.parseAdditive();
    while (true) {
      const operator = this.matchOperator("<", "<=", ">", ">=");
      if (!operator) return value;
      const right = this.parseAdditive();
      if (operator === "<") value = value < right ? 1 : 0;
      else if (operator === "<=") value = value <= right ? 1 : 0;
      else if (operator === ">") value = value > right ? 1 : 0;
      else value = value >= right ? 1 : 0;
    }
  }

  private parseAdditive(): number {
    let value = this.parseMultiplicative();
    while (true) {
      const operator = this.matchOperator("+", "-");
      if (!operator) return value;
      const right = this.parseMultiplicative();
      value = operator === "+" ? value + right : value - right;
    }
  }

  private parseMultiplicative(): number {
    let value = this.parsePower();
    while (true) {
      const operator = this.matchOperator("*", "/", "%");
      if (!operator) return value;
      const right = this.parsePower();
      if (operator === "*") value *= right;
      else if (operator === "/") value /= right;
      else value %= right;
    }
  }

  private parsePower(): number {
    const base = this.parseUnary();
    if (!this.matchOperator("**")) return base;
    const exponent = this.parsePower();
    return Math.pow(base, exponent);
  }

  private parseUnary(): number {
    const operator = this.matchOperator("+", "-", "!");
    if (!operator) return this.parsePrimary();
    const value = this.parseUnary();
    if (operator === "+") return value;
    if (operator === "-") return -value;
    return value === 0 ? 1 : 0;
  }

  private parsePrimary(): number {
    const token = this.current();

    if (token.type === "number") {
      this.consume();
      return token.value;
    }

    if (token.type === "identifier") {
      this.consume();
      const name = token.value;

      if (this.matchPunctuation("(")) {
        const functionName = name.startsWith("Math.") ? name.slice(5) : name;
        const fn = ALLOWED_FUNCTIONS[functionName];
        if (!fn || (name.includes(".") && !name.startsWith("Math."))) {
          throw new Error(`Function not allowed: ${name}`);
        }

        const args: number[] = [];
        if (!this.matchPunctuation(")")) {
          do {
            args.push(this.parseConditional());
          } while (this.matchPunctuation(","));
          this.expectPunctuation(")");
        }
        return fn(...args);
      }

      if (name in CONSTANTS) return CONSTANTS[name];
      if (name.includes(".")) throw new Error(`Property access not allowed: ${name}`);
      if (!(name in this.values)) throw new Error(`Unknown variable: ${name}`);
      return this.values[name];
    }

    if (this.matchPunctuation("(")) {
      const value = this.parseConditional();
      this.expectPunctuation(")");
      return value;
    }

    throw new Error("Expected a number, variable, function, or parenthesized expression");
  }
}

export function evaluateNumericExpression(expression: string, values: NumericValues): number {
  try {
    const numericValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => {
        const numberValue = Number(value ?? 0);
        return [key, Number.isFinite(numberValue) ? numberValue : 0];
      }),
    );
    const result = new Parser(tokenize(expression), numericValues).parse();
    return Number.isFinite(result) ? result : 0;
  } catch {
    return 0;
  }
}
