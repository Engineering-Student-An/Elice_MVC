
// console.log("안녕하세요, 콘솔에 표현됩니다.");

// 변수
var 동물 = "animal";
console.log("동물은 영어로 " + 동물);

// 상수 : final 과 동일
const car = "자동차";
console.log("상수: " + car);
console.log();
//
// 동적 타이핑 : 타입이 동적으로 변경됨!
var fruit = "string Fruit"; // 스트링(string) 타입
console.log(fruit);
console.log(typeof fruit);

fruit = 2;                  // 숫자(number) 타입
console.log(fruit);
console.log(typeof fruit);

fruit = 3.14;               // 숫자(number) 타입
console.log(fruit);
console.log(typeof fruit);

fruit = -2;                 // 숫자(number) 타입
console.log(fruit);
console.log(typeof fruit);

fruit = 'c';                // 스트링(string) 타입
console.log(fruit);
console.log(typeof fruit);
console.log();

// 리스트 변수
var fruitList = ["사과", "바나나", "포도"];
console.log(fruitList);
console.log(fruitList[0]);
console.log(fruitList[1]);
console.log(fruitList[2]);
console.log();

// 리스트에 요소 추가 => 내장함수 push()
fruitList.push("딸기");
console.log(fruitList);
// 리스트의 맨 앞에 요소 추가 => unshift()
fruitList.unshift("레몬");
console.log(fruitList);
// 리스트의 맨 앞 요소 제거 => shift()
fruitList.shift();
console.log(fruitList);
// 리스트의 맨 뒤 요소 제거 => pop()
fruitList.pop();
console.log(fruitList);
// 리스트의 요소 인덱스 반환 => indexOf()
console.log(fruitList.indexOf("사과"));
console.log();

// 함수 선언
function add(a, b) {
    return a+b;
}
// 함수 호출
var sum = add(1,2);
console.log(sum);
console.log(add("2","3")); // string 타입 더함
console.log(add(-2.4,3));
console.log();

// 함수를 변수로 선언
var func1 = function(a,b) {
    return a+b;
}
console.log(func1(1,2));
console.log();

// 객체 선언
var racer = {
    name: "홍길동",
    age: 20,
    skills: ["JS", "JAVA", "SQL"],

    sum: function(num1, num2) {
        return num1 + num2;
    }
}
console.log(racer);
console.log(racer.skills);  // racer.skills 출력 : 리스트 형태
console.log(racer['skills']);
console.log(racer.name + "은 " + racer.age + "살이고 기술은 " + racer.skills + "입니다."); // racer.skills 출력 : 요소 하나씩 (,) 로 구분되어서 출력됨
console.log();

// 값 초기화 x : undefined
// 의도적으로 데이터가 없음을 표시 : null
var undef;
var empty = null;

console.log(undef);
console.log(empty);
console.log();

// boolean
isFruit = false;
console.log(isFruit);
console.log(typeof isFruit);
console.log();

console.log("10" == 10);    // == : 타입비교 x, 값만 비교
console.log("10" === 10);   // === : 타입비교 o, 값도 비교
console.log();

//if문
if(isFruit) {
    console.log("과일이 맞습니다.");
} else {
    console.log("과일이 아닙니다.");
}
console.log();

// 전위, 후위 증감자
var a = 1;
console.log(++a);
console.log(a++);
console.log(a);
console.log();

// 반복문
for (i = 1; i <= 10; i++) {
    console.log(i);
}