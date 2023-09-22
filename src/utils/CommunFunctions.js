const calculateExpression = (expression) => {
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    const isOperator = (token) => token in precedence;
  
    const applyOperator = (operators, operands) => {
      const operator = operators.pop();
      const rightOperand = operands.pop();
      const leftOperand = operands.pop();
      switch (operator) {
        case '+':
          operands.push(leftOperand + rightOperand);
          break;
        case '-':
          operands.push(leftOperand - rightOperand);
          break;
        case '*':
          operands.push(leftOperand * rightOperand);
          break;
        case '/':
          if (rightOperand === 0) {
            throw new Error('Division by zero');
          }
          operands.push(leftOperand / rightOperand);
          break;
        default:
          throw new Error('Invalid operator');
      }
    };
  
    const tokens = expression.split(' ');
  
    const result = tokens.reduce((acc, token) => {
      const { operators, operands } = acc;
  
      if (!isNaN(token)) {
        operands.push(parseFloat(token));
      } else if (isOperator(token)) {
        const currentPrecedence = precedence[token];
        while (
          operators.length > 0 &&
          isOperator(operators[operators.length - 1]) &&
          precedence[operators[operators.length - 1]] >= currentPrecedence
        ) {
          applyOperator(operators, operands);
        }
        operators.push(token);
      } else {
        throw new Error('Invalid token: ' + token);
      }
  
      return acc;
    }, { operators: [], operands: [] });
  
    while (result.operators.length > 0) {
      applyOperator(result.operators, result.operands);
    }
  
    if (result.operands.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return result.operands[0].toString();
  };
  
  module.exports = { calculateExpression };
  