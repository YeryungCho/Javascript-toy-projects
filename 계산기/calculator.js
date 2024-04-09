function calculate(previous, operate, next) {
  a = Number(previous);
  b = Number(next);
  if (operate == "+") {
    return a + b;
  } else if (operate == "-") {
    return a - b;
  } else if (operate == "*") {
    return a * b;
  } else if (operate == "/") {
    if (b == 0) {
      return "0으로 나눌 수 없음";
    }
    return a / b;
  }
}

let previous = "";
let operate = "";
let next = "";

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operate");

const result = document.querySelector(".result");

numbers.forEach((n) => {
  n.addEventListener("click", () => {
    next += n.id;
    result.textContent = next;
  });
});

operators.forEach((o) => {
  o.addEventListener("click", () => {
    operate = o.id;
    previous = next;
    next = "";
  });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  result.textContent = calculate(previous, operate, next);
  previous = "";
  operate = "";
  next = "";
});

const remove = document.querySelector(".delete");
remove.addEventListener("click", () => {
  result.textContent = "";
  previous = "";
  operate = "";
  next = "";
});
