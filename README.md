Quyida 250 ta demo interyu savollari 8 oylik reja bo'yicha: Ogohlantirish real intervyuda bu yerda bo'lmagan savollar ham bo'lishi mumkin. Shuning uchun tashlab berilgan barcha intervyu savollariga jiddiy qarang faqat bu yerdagi 250 ta emas. Shuningdek Bazi Advanced(Qiyin) darajadagi savollarni bilishingiz shart emas(ammo bilsangiz "competition"da yaxshiroq), Junior postion uchun Oson va o'rtacha darajadagi savollar priritetda bo'lishi lozim.

🔹 1. JavaScript Savollari
🟢 Oson (3 ta)
Quyidagi kodni bajarganda console.log nima chiqadi?

var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();
❓ Nimaga shunday chiqadi?

== va === farqi nimada?

let, const, va var o‘rtasidagi farqlarni tushuntirib bering.

🟡 O‘rtacha (4 ta)
Quyidagi kodda nima chiqadi va nega?

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
❓ Bu kod event loop ni qanday tushuntiradi?

Closure nima? Quyidagi kod qanday ishlaydi?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn(); fn();
Spread (...) va rest operatorlari o‘rtasidagi farq?

this konteksti arrow function va oddiy functionda qanday farq qiladi?

🔴 Qiyin (3 ta)
Quyidagi kodni tahlil qiling, nima chiqadi?

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
}
a();
❓ Qanday qilib bu kodni 0 1 2 chiqadigan qilib tuzish mumkin?

Deep vs Shallow copy – farqi nima? structuredClone, JSON.parse(JSON.stringify(...)) haqida nima deya olasiz?

Function.prototype.bind qanday ishlaydi? Ichki mexanizmini tushuntirib bering (mini kod yozing).

🔹 2. Node.js Savollari
🟢 Oson (3 ta)
require va import o‘rtasidagi farq nima?

fs.readFile() va fs.readFileSync() farqi?

Event loop Node.js’da qanday ishlaydi?

🟡 O‘rtacha (4 ta)
Quyidagi kod qanday ishlaydi va chiqadi?

const fs = require('fs');

fs.readFile('file.txt', () => {
  console.log('File read');
});

setImmediate(() => console.log('Immediate'));
process.nextTick(() => console.log('NextTick'));
console.log('End');
Express.js’da middleware nima? O‘z misolingizni keltiring.

Node.js’da cluster moduli nima vazifani bajaradi?

EventEmitter dan foydalanib custom event yaratish misolini yozing.

🔴 Qiyin (3 ta)
Node.js’da stream nima? Readable va Writable streamni misol bilan tushuntiring.

Quyidagi kodda uncaughtException qanday ishlaydi?

process.on('uncaughtException', (err) => {
  console.error('Caught exception:', err);
});

throw new Error('Oops!');
Async/await va promise chaining – qaysi holatlarda biri ikkinchisidan afzal?

🔹 3. TypeScript Savollari
🟢 Oson (3 ta)
TypeScriptda interface va type o‘rtasidagi farq nima?

Quyidagi kodda qanday xatolik bo‘ladi?

let x: string = 5;
TypeScript transpilyatsiya (compile) jarayonini tushuntiring.

🟡 O‘rtacha (4 ta)
Quyidagi kod qanday xatolik beradi va nega?

interface User {
  name: string;
  age?: number;
}

const getUserInfo = (user: User) => {
  return user.age.toFixed(2);
};
Union va Intersection turlarni farqlang va misol keltiring.

Generic funksiyaga misol yozing:

function identity<T>(arg: T): T;
Partial<T>, Readonly<T>, Record<K, T> kabi utility typelarga misol bering.

🔴 Qiyin (3 ta)
TypeScriptda never turi qachon ishlatiladi?

Advanced conditional type misolini yozing:

type IsString<T> = T extends string ? true : false;
keyof, infer, va extends kalit so‘zlari yordamida Mapped Type yarating:

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
Albatta! Quyida siz so‘ragan texnologiyalar bo‘yicha 6 ta mavzu bo‘yicha 10 tadan intervyu savollari berilgan. Har bir bo‘lim o‘z ichiga oson, o‘rtacha va qiyin savollarni oladi (3 oson, 4 o‘rtacha, 3 qiyin). Ba’zilarida kodlash topshiriqlari va tushunishni tekshiruvchi savollar ham mavjud.

🔹 1. Docker (10 ta savol)
🟢 Oson (3 ta)
Docker nima va nima uchun ishlatiladi?
Dockerfile nima?
docker build va docker run o‘rtasidagi farq?
🟡 O‘rtacha (4 ta)
Quyidagi Dockerfile nima qiladi?

FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
docker-compose.yml fayli nima uchun ishlatiladi?

Volumes nima va ular qanday yaratiladi?

Docker container va image o‘rtasidagi farq?

🔴 Qiyin (3 ta)
multi-stage build nima va qachon ishlatiladi?

Docker network turlari (bridge, host, overlay) farqi?

Docker security (isolation, user permissions) haqida qisqacha tushuntiring.

🔹 2. NestJS (10 ta savol)
🟢 Oson (3 ta)
NestJS nima? U qaysi frameworkga asoslangan?

NestJS’da controller va service farqi?

@Injectable() va @Controller() dekoretorlari nimani bildiradi?

🟡 O‘rtacha (4 ta)
Quyidagi controller nima qiladi?

@Controller('users')
export class UserController {
  @Get()
  findAll() {
    return 'All users';
  }
}
Module va Dependency Injection qanday ishlaydi?

NestJS’da middleware qanday ishlaydi?

DTO (Data Transfer Object) nima? Misol bilan tushuntiring.

🔴 Qiyin (3 ta)
Guardlar (@UseGuards) qanday ishlaydi? AuthGuard misolini yozing.

NestJS’da Interceptor va Pipe farqi?

Custom Decorator yaratish usuli qanday?

🔹 3. JWT – JSON Web Token (10 ta savol)
🟢 Oson (3 ta)
JWT nima?

JWT tarkibi qanday 3 qismdan iborat?

JWT va Cookie bilan auth o‘rtasidagi farq?

🟡 O‘rtacha (4 ta)
JWT qanday yaratiladi? jsonwebtoken kutubxonasidan foydalanib misol yozing.

Token refresh mexanizmi qanday ishlaydi?

JWT ni qanday qilib HTTP so‘roviga qo‘shish mumkin?

JWT’ni qanday qilib himoya qilish mumkin? (masalan, expiration, signature)

🔴 Qiyin (3 ta)
JWT replay attack nima va unga qanday qarshi kurashiladi?

Stateless authentication JWT yordamida qanday amalga oshiriladi?

JWT blacklist (revocation) qilish usullari qanday?

🔹 4. HTTP (10 ta savol)
🟢 Oson (3 ta)
HTTP va HTTPS farqi?

GET va POST farqi?

HTTP status code 200, 404, 500 nimani bildiradi?

🟡 O‘rtacha (4 ta)
HTTP headers nima? Misollar keltiring.

Idempotent metodlar nima? (GET, PUT...)

Cookie va Session o‘rtasidagi farq?

CORS nima va qachon muammo bo‘ladi?

🔴 Qiyin (3 ta)
HTTP/1.1 va HTTP/2 farqlari?

REST API va GraphQL o‘rtasidagi farq?

Chunked transfer encoding nima?

🔹 5. OSI Model (10 ta savol)
🟢 Oson (3 ta)
OSI modeli nima?

OSI modelining nechta qavati bor?

Application layer vazifasi nima?

🟡 O‘rtacha (4 ta)
OSI modelining har bir qatlamini nomlab chiqing.

Transport layerda TCP va UDP o‘rtasidagi farq?

Data Link vs Network layer farqi?

OSI modelining qaysi qatlamida IP ishlaydi?

🔴 Qiyin (3 ta)
Encapsulation va de-encapsulation nima?

Layer 3 routing qanday ishlaydi?

OSI modelini HTTP va TCP/IP modeliga qanday moslashtirish mumkin?

🔹 6. HTTP + OSI kombinatsiyasi (amaliy savollar)
HTTP POST so‘rovi OSI modelining qaysi qatlamlaridan o‘tadi?

Quyidagi so‘rovda Content-Type: application/json header nima vazifa bajaradi?

Browser serverga so‘rov yuborayotganda qanday qatlamlar ishtirok etadi?

TCP handshake jarayoni qanday kechadi?

SSL/TLS qanday qatlamda ishlaydi?

DNS so‘rovi OSI modelining qaysi qatlamida amalga oshadi?

IP fragmentation qaysi qatlamda sodir bo‘ladi?

Serverdan javobda Set-Cookie header nima qiladi?

TCP va UDP portlar OSI modelining qaysi qatlamida?

HTTP persistent connections nima?

Ajoyib! Quyida Node.js bo‘yicha 10 ta amaliy topshiriq keltirildi. Ular avvalgi formatga muvofiq oson, o‘rtacha, va qiyin darajalarda taqsimlangan. Har bir topshiriq qisqa, lekin biliming chuqurligini aniqlashga mo‘ljallangan — masalan, stream, async, file, CRUD, module, event, va boshqalar bilan ishlash.

🟢 Oson darajadagi Node.js topshiriqlari (3 ta)
1. Fayldan matn o‘qish (fs)
data.txt nomli fayl mavjud. Shu fayldagi matnni o‘qib, console.logda chiqaring.

📌 Talablar:

fs.readFile() yoki fs.promises.readFile ishlatilishi kerak.
2. Oddiy modul yaratish
math.js degan modul yarating, u quyidagi funksiyalarni eksport qilsin:

add(a, b)
multiply(a, b)
Asosiy faylda shu modulni chaqirib, hisob-kitob qiling.

3. Simple server yaratish
http modulidan foydalangan holda quyidagicha javob beradigan server yarating:

/ ga so‘rov yuborilsa: Hello World
/about ga so‘rov yuborilsa: About Page
🟡 O‘rtacha darajadagi Node.js topshiriqlari (4 ta)
4. Stream orqali fayl nusxalash
Katta hajmdagi bigfile.txt faylni copy.txt faylga stream yordamida nusxalang.

📌 Talablar:

fs.createReadStream() va fs.createWriteStream() ishlatilishi kerak.
5. EventEmitter dan foydalanish
Oddiy TaskManager klass yarating. U:

addTask(name) metodida task-added event emit qiladi.
on('task-added') orqali yangi task nomi konsolga chiqariladi.
6. JSON faylga yozish
todos.json nomli faylga yangi todo qo‘shadigan funksiya yozing:

addTodo({ id: 1, title: "Buy milk", done: false });
📌 Fayldan o‘qilsin, obyekt qo‘shilsin, qaytadan faylga yozilsin.

7. POST orqali ma’lumot qabul qilish
Express.js server yarating, u:

/todo endpointida POST orqali yuborilgan JSON obyektni qabul qiladi.
Konsolga chiqaradi.
🔴 Qiyin darajadagi Node.js topshiriqlari (3 ta)
8. To‘liq TODO CRUD (Express + FS)
RESTful API yarating (/todos endpoint), u:

GET /todos – hamma todolarni ko‘rsatadi
POST /todos – yangi todo qo‘shadi
PUT /todos/:id – mavjud todo’ni yangilaydi
DELETE /todos/:id – todo’ni o‘chiradi
📌 Barcha ma’lumot todos.json faylida saqlansin.

9. Middleware yozing (Express)
Custom middleware yozing, u:

Har bir so‘rovni log qiladi (method, url, timestamp)
Keyingi handlerga next() bilan o‘tkazadi
📌 Mustaqil modul sifatida yozilsin va app.js’ga ulangan bo‘lsin.

10. Stream + Compression (gzip)
Katta fayl (large.txt) ni:

gzip orqali siqib
large.txt.gz sifatida saqlang
📌 zlib.createGzip(), fs.createReadStream(), fs.createWriteStream() dan foydalaning.

✅ SQL TOPSHIRIQLARI
🧩 Jadvallar: users, orders, products
📄 1. USERS
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

INSERT INTO users (id, name, age, country) VALUES
(1, 'Ali', 25, 'Uzbekistan'),
(2, 'Vali', 30, 'Kazakhstan'),
(3, 'Gulbahor', 22, 'Uzbekistan'),
(4, 'John', 40, 'USA'),
(5, 'Sara', 35, 'UK'),
(6, 'Akmal', 28, 'Uzbekistan'),
(7, 'Tom', 31, 'USA'),
(8, 'Jane', 26, 'Canada'),
(9, 'Bobur', 24, 'Uzbekistan'),
(10, 'Linda', 29, 'Germany');
📄 2. PRODUCTS
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2)
);

INSERT INTO products (id, name, category, price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Phone', 'Electronics', 800.00),
(3, 'Mouse', 'Accessories', 25.00),
(4, 'Keyboard', 'Accessories', 50.00),
(5, 'Monitor', 'Electronics', 300.00),
(6, 'Charger', 'Accessories', 20.00),
(7, 'Camera', 'Electronics', 500.00),
(8, 'Desk', 'Furniture', 150.00),
(9, 'Chair', 'Furniture', 100.00),
(10, 'USB Cable', 'Accessories', 10.00);
📄 3. ORDERS
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    product_id INT,
    amount DECIMAL(10,2),
    quantity INT,
    created_at DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO orders (id, user_id, product_id, amount, quantity, created_at) VALUES
(1, 1, 1, 1200.00, 1, '2025-08-01'),
(2, 2, 2, 800.00, 1, '2025-08-02'),
(3, 1, 3, 25.00, 1, '2025-08-03'),
(4, 3, 4, 50.00, 1, '2025-08-03'),
(5, 4, 5, 300.00, 1, '2025-08-04'),
(6, 5, 6, 20.00, 2, '2025-08-04'),
(7, 6, 7, 500.00, 1, '2025-08-05'),
(8, 7, 1, 1200.00, 1, '2025-08-06'),
(9, 8, 2, 800.00, 1, '2025-08-07'),
(10, 9, 3, 25.00, 1, '2025-08-07'),
(11, 10, 8, 150.00, 1, '2025-08-08'),
(12, 1, 9, 100.00, 2, '2025-08-08'),
(13, 3, 10, 10.00, 5, '2025-08-09'),
(14, 2, 3, 25.00, 3, '2025-08-09'),
(15, 7, 5, 300.00, 1, '2025-08-10'),
(16, 5, 4, 50.00, 2, '2025-08-11'),
(17, 6, 1, 1200.00, 1, '2025-08-11'),
(18, 8, 7, 500.00, 1, '2025-08-11'),
(19, 4, 6, 20.00, 3, '2025-08-12'),
(20, 9, 10, 10.00, 4, '2025-08-12');
🟢 Oson daraja (5 ta)
Barcha foydalanuvchilarni tanlang.
Yoshi 30 dan katta bo‘lgan foydalanuvchilarning ismi va yoshini ko‘rsating.
Orders jadvalidan eng katta miqdorni toping.
Har bir foydalanuvchi nechta buyurtma qilganini ko‘rsating.
Faqat "Uzbekistan" mamlakatidan bo‘lgan foydalanuvchilarning ismini ko‘rsating.
🟡 O‘rtacha daraja (5 ta)
Har bir foydalanuvchi jami qancha pul sarflaganini chiqaring.
Narxi eng arzon mahsulotni toping.
Hech qachon buyurtma qilmagan foydalanuvchilarni ko‘rsating.
Faqat 2025-08-03 sanasida qilingan buyurtmalarni toping.
Buyurtmalar bo‘yicha umumiy tushum (amount) qancha bo‘lganini chiqaring.
🔴 Qiyin daraja (5 ta)
Eng ko‘p buyurtma qilgan foydalanuvchini toping.
Har bir foydalanuvchining eng so‘nggi (oxirgi) buyurtmasini ko‘rsating.
Har bir mamlakatdan nechta foydalanuvchi buyurtma qilganini hisoblang.
Foydalanuvchilarni buyurtma soni bo‘yicha kamayish tartibida chiqaring.
Har bir foydalanuvchining har bir sanada nechta buyurtma qilganini chiqaring.
Albatta, oxirgi ikkita savol o‘rniga yangi 3 ta backendga oid universal bonus savollar qo‘shaman:

Yangi 3 ta bonus backend savollar:
REST va GraphQL o‘rtasidagi asosiy farqlar va qaysi holatda qaysi biri yaxshiroq?

Node.js dagi event loop qanday ishlaydi va u backendda samaradorlikni qanday oshiradi?

Mikroxizmatlar (Microservices) arxitekturasi nima va monolit arxitekturadan qanday farq qiladi?

REST API dizayni va uning asosiy prinsiplari nima?
Middleware nima va Node.js da qanday ishlaydi? Misol keltiring.
JWT (JSON Web Token) va Session o‘rtasidagi farq nima? Qachon qaysi birini tanlash ma'qul?
REST va GraphQL o‘rtasidagi asosiy farqlar va qaysi holatda qaysi biri yaxshiroq?
Node.js dagi event loop qanday ishlaydi va u backendda samaradorlikni qanday oshiradi?
Mikroxizmatlar (Microservices) arxitekturasi nima va monolit arxitekturadan qanday farq qiladi?
1. NodeJS uchun Security Best Practices
XSS (Cross-Site Scripting) hujumi nima va undan qanday himoyalanish mumkin?
CSRF (Cross-Site Request Forgery) hujumi qanday ishlaydi?
Helmet kutubxonasi nima va NodeJS da qanday ishlatiladi?
Rate limiting nima va uni Express.js da qanday amalga oshirish mumkin?
Input validation nima uchun zarur?
Environment variables xavfsizligini qanday ta’minlash mumkin?
SQL injection hujumidan qanday himoyalanish mumkin?
Secure headers nima va qaysilari eng muhim hisoblanadi?
HTTPS va SSL sertifikatlarini NodeJS da qanday o‘rnatish mumkin?
Password hashing uchun qaysi usullar va kutubxonalar tavsiya etiladi?
2. Advanced Event Loop Understanding
NodeJS event loop nima va qanday ishlaydi?
Event loopning asosiy bosqichlari qaysilar?
libuv kutubxonasi nima va uning vazifasi nima?
Macro task va Micro task farqi nimada?
setTimeout va process.nextTick o‘rtasidagi farq nima?
Event loopda “starvation” nima?
Promise nima va event loopga qanday ta’sir qiladi?
I/O operatsiyalar event loopda qanday bajariladi?
Blocking code event loopga qanday ta’sir qiladi?
NodeJS event loopni monitoring qilish uchun qanday vositalar mavjud?
3. Streams bo‘yicha Deep Dive
NodeJS streams qanday turlari mavjud?
Readable va Writable streamlar farqi nima?
Duplex va Transform streamlar nima uchun kerak?
Pipe metodi qanday ishlaydi?
Backpressure muammosi nima?
Backpressure qanday hal qilinadi?
Streamni qayerda ishlatish samaraliroq?
Streamlar bilan fayl o‘qish va yozishni qanday amalga oshirish mumkin?
Stream eventlari qanday va ularning vazifalari nimada?
Streamni qanday to‘xtatish yoki bekor qilish mumkin?
4. Cluster Module va Load Balancing
NodeJS cluster module nima?
Cluster qanday ishlaydi?
Cluster va PM2 o‘rtasidagi farq nima?
Nega ko‘p yadroli ishlov berish kerak?
Master va Worker jarayonlari nima?
Cluster da jarayonlar o‘rtasida qanday muloqot bo‘ladi?
Load balancing qanday amalga oshiriladi?
Cluster da xatolik yuz berganda nima sodir bo‘ladi?
PM2 nima va uni qanday ishlatish mumkin?
PM2 bilan jarayonlarni monitoring qilish usullari qanday?
5. Memory Leak va Performance Tuning
Memory leak nima va NodeJS da qanday yuzaga keladi?
Heap snapshot nima va uni qanday olish mumkin?
Garbage collection NodeJS da qanday ishlaydi?
CPU profiling nima va qachon kerak bo‘ladi?
Performance monitoring uchun qaysi vositalar mavjud?
Memory leakni qanday aniqlash mumkin?
Event listenerlar bilan bog‘liq memory leak qanday yuzaga keladi?
Asinxron kodda memory leak paydo bo‘lishi mumkinmi?
Code profiling jarayoni qanday amalga oshiriladi?
NodeJS ilovasini optimallashtirish uchun qanday amaliy tavsiyalar mavjud?
6. Advanced Error Handling and Logging
Centralized logging nima va nima uchun kerak?
Winston kutubxonasi qanday ishlaydi?
Logger darajalari (levels) nimalar?
Error handlingda try-catch bloklarining o‘rni qanday?
Async funksiyalarda xatolarni qanday tutish mumkin?
Express.js da global error handler qanday yoziladi?
Monitoring vositalari (NewRelic, Datadog) nima uchun ishlatiladi?
Loglarda sensitive ma’lumotlarni qanday yashirish mumkin?
Log formatlari qanday bo‘lishi mumkin?
Error tracking va alerting qanday amalga oshiriladi?
7. API Rate Limiting and Throttling
API rate limiting nima?
Throttling va debouncing o‘rtasidagi farq nima?
Express.js da rate limitingni qanday joriy qilish mumkin?
Token bucket algoritmi qanday ishlaydi?
Leaky bucket algoritmi haqida qisqacha tushuncha bering.
Rate limiting uchun Redis qanday ishlatiladi?
API Gateway nima va uning vazifasi qanday?
Rate limiting bilan birga authentication qanday amalga oshiriladi?
IP manzillar bo‘yicha limit o‘rnatish mumkinmi?
Rate limiting foydalanuvchi tajribasiga qanday ta’sir qiladi?
8. GraphQL Advanced Topics
GraphQL subscriptions nima?
DataLoader kutubxonasi nima va nima uchun kerak?
Schema stitching nima?
GraphQL federation konsepti haqida tushuntiring.
Query va Mutation o‘rtasidagi farq nima?
Nima uchun GraphQL’da n+1 muammosi yuzaga keladi?
Subscriptions qanday ishlaydi?
GraphQL serverni qanday himoya qilish mumkin?
GraphQL da error handling qanday amalga oshiriladi?
REST va GraphQL o‘rtasidagi asosiy farqlar nimalar?
9. Real-time Data Handling
WebSocket nima?
Socket.io nima va qanday ishlaydi?
WebRTC texnologiyasi nima uchun ishlatiladi?
WebSocket fallback metodlari qaysilar?
Socket.io da room va namespace tushunchalari nima?
Real-time data handlingda scalabilitiy qanday ta’minlanadi?
Message brokerlar (RabbitMQ, Kafka) roli nima?
WebSocket bilan REST API farqi nimada?
Socket.io da authentication qanday amalga oshiriladi?
Real-time monitoring uchun qanday vositalar mavjud?
10. Testing (batafsil)
Unit test nima?
Integration test nima?
End-to-End (E2E) test nima?
Sinon.js nima uchun ishlatiladi?
Mocking va Stubbing o‘rtasidagi farq nima?
Jest da snapshot testing nima?
Test coverage nima va qanday o‘lchanadi?
Test driven development (TDD) nimadan iborat?
Continuous Integration (CI) da testlarning o‘rni qanday?
Testlarni avtomatlashtirish uchun qanday vositalar mavjud?
11. DevOps va CI/CD Detallari
Infrastructure as Code nima?
Terraform va Ansible o‘rtasidagi asosiy farq nima?
Kubernetes nima va qanday ishlaydi?
CI/CD jarayoni qanday tashkil qilinadi?
GitHub Actions nima va qanday ishlatiladi?
Docker imajlarini qanday yaratish mumkin?
Blue-Green deployment nima?
Canary deployment nima?
Monitoring va alerting jarayonlarini qanday tashkil qilish mumkin?
DevOpsda avtomatlashtirishning afzalliklari nimada?
12. Microservices Architecture
Microservices arxitekturasi nima?
Service Discovery nima va qanday ishlaydi?
API Gateway nima vazifani bajaradi?
Circuit Breaker pattern nima?
Event-driven microservices qanday ishlaydi?
Microservicesda data consistency qanday ta’minlanadi?
Saga pattern nima?
Microservices arxitekturasida loglarni qanday boshqarish mumkin?
Microservicesni test qilishda qanday qiyinchiliklar bo‘ladi?
Monolith va microservices arxitekturasi o‘rtasidagi farqlar nimalar?
