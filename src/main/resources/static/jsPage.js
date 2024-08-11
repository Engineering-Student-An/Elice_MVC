
alert("이것은 자바스크립트 파일에서 로딩한 공지입니다.");
console.log("이것은 자바스크립트 파일에서 로딩한 출력입니다.");  // System.out.println 과 동일한 역할!

document.write("<h1>hello world!</h1>");
document.write("<h2>hello world!</h2>");

var newButton = document.createElement("button");
newButton.innerHTML = "새로운 버튼!!";
console.log(newButton);

var forE1 = document.querySelector("body");
forE1.appendChild(newButton);