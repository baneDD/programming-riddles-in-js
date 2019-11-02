exports.infixToPostfix = infix => {
  let tokens = [...infix];
  let output = "";
  let operatorStack = [];

  while (tokens.length > 0) {
    let token = tokens.shift();

    if (isLeftBracket(token)) {
      operatorStack.push(token);
    } else if (isRightBracket(token)) {
      output = handleRightBracket(operatorStack, output);
    } else if (isOperator(token)) {
      output = handleOperator(token, operatorStack, output);
    } else {
      // Token is a number if it's not a bracket or operator
      output += token;
    }
  }

  while (operatorStack.length > 0) {
    output += operatorStack.pop();
  }

  return output;
};

const hasGreaterPrecedence = operator => !"+-".includes(operator);

const hasEqualPrecedence = (operator1, operator2) =>
  ("+-".includes(operator1) && "+-".includes(operator2)) || ("*/".includes(operator1) && "*/".includes(operator2));

const isLeftBracket = str => str === "(";

const isRightBracket = str => str === ")";

const isOperator = str => "+-*/^".includes(str);

const lastItem = arr => arr[arr.length - 1];

const handleRightBracket = (operatorStack, output) => {
  // Pop everything off operator stack up to the left bracket
  // and add it to the output string
  while (operatorStack.length > 0) {
    let temp = operatorStack.pop();
    if (isLeftBracket(temp)) break;
    else output += temp;
  }

  return output;
};

const handleOperator = (token, operatorStack, output) => {
  // If we have any operators with equal or greater precedence on the stack
  // we pop them and add them to the output before pushing the token onto the stack
  while (
    operatorStack.length > 0 &&
    !isLeftBracket(lastItem(operatorStack)) &&
    (hasGreaterPrecedence(lastItem(operatorStack)) || hasEqualPrecedence(lastItem(operatorStack), token))
  ) {
    output += operatorStack.pop();
  }
  operatorStack.push(token);

  return output;
};
