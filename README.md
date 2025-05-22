## Tech Stack

- Node.js
- Express.js
- Prisma ORM (MySQL)
- MySQL Database
- Dotenv
- RESTful API

---

## Installation & Setup

```bash
# 1. Install Dependencies

npm install

# 2. ดูไฟล์.env.example แล้วไปเซ็ต.env ของคุณ

# 3. ไป.env ไปเซ็ต DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" <= ตัวอย่าง แล้ว npm run seed
npm run seed

# 4. Generate Prisma Client
npx prisma generate

# 5. อัพขึ้น database
npx prisma db push || npx prisma migrate dev --name init

# 6. run project
npm run start || npm run dev

# 7. วิธีทดสอบใช้ postman เพื่อทดสอบapi
# 7.1 import postman ชื่อไฟล์ว่า bitcoin.postman_collection.json เปิด postman แล้วกด import ได้เลย

# สามารถ reset db ได้
npm run resetDB

```

## Test Credentials

| Role  | Email              | Password       |
| ----- | ------------------ | -------------- |
| Admin | admin1@example.com | password123456 |
| Admin | admin2@example.com | password123456 |
| User  | user1@example.com  | password123456 |
| User  | user2@example.com  | password123456 |
| User  | user3@example.com  | password123456 |
| User  | user4@example.com  | password123456 |
| User  | user5@example.com  | password123456 |
| User  | user6@example.com  | password123456 |
| User  | user7@example.com  | password123456 |
| User  | user8@example.com  | password123456 |
| User  | user9@example.com  | password123456 |
| User  | user10@example.com | password123456 |

---

### Service (API Summary)

| Path                       | Method | Authen     | Params    | Query | Body                                                         |
| -------------------------- | ------ | ---------- | --------- | ----- | ------------------------------------------------------------ |
| **Auth**                   |
| /auth/register             | POST   | ❌         | -         | -     | { identity, firstName, lastName, password, confirmPassword } |
| /auth/login                | POST   | ❌         | -         | -     | { identity, password }                                       |
| **User**                   |
| /user/me                   | GET    | ✅         | -         | -     | -                                                            |
| /user/me                   | PATCH  | ✅         | -         | -     | { userName?, firstName?, lastName?, etc. }                   |
| /user/:id                  | GET    | ✅         | :id       | -     | -                                                            |
| **Admin**                  |
| /admin/users               | GET    | ✅ (Admin) | -         | -     | -                                                            |
| /admin/:id                 | GET    | ✅ (Admin) | :id       | -     | -                                                            |
| /admin/fiat-transactions   | GET    | ✅ (Admin) | -         | -     | -                                                            |
| /admin/crypto-transactions | GET    | ✅ (Admin) | -         | -     | -                                                            |
| /admin/orders              | GET    | ✅ (Admin) | -         | -     | -                                                            |
| /admin/trades              | GET    | ✅ (Admin) | -         | -     | -                                                            |
| **Fiat**                   |
| /fiat/deposit              | POST   | ✅         | -         | -     | { amount, currency }                                         |
| /fiat/withdraw             | POST   | ✅         | -         | -     | { amount, currency }                                         |
| /fiat/transactions         | GET    | ✅         | -         | -     | -                                                            |
| /fiat/balance              | GET    | ✅         | -         | -     | -                                                            |
| /fiat/balance/:currency    | GET    | ✅         | :currency | -     | -                                                            |
| **Crypto**                 |
| /crypto/wallets            | GET    | ✅         | -         | -     | -                                                            |
| /crypto/wallets            | POST   | ✅         | -         | -     | { currency }                                                 |
| /crypto/transfer/internal  | POST   | ✅         | -         | -     | { receiverWalletId, amount, crypto_type }                    |
| /crypto/transfer/external  | POST   | ✅         | -         | -     | { targetAddress, amount, crypto_type }                       |
| /crypto/transactions       | GET    | ✅         | -         | -     | -                                                            |
| **Orders**                 |
| /orders/orders             | GET    | ✅         | -         | -     | -                                                            |
| /orders/orders/:id         | GET    | ✅         | :id       | -     | -                                                            |
| /orders/orders             | POST   | ✅         | -         | -     | { type, crypto_type, amount, price_per_unit }                |
| /orders/orders/:id         | DELETE | ✅         | :id       | -     | -                                                            |
| **Trades**                 |
| /trades/                   | GET    | ✅         | -         | -     | -                                                            |
| /trades/:id                | GET    | ✅         | :id       | -     | -                                                            |
| **Wallets**                |
| /wallet/mywallets          | GET    | ✅         | -         | -     | -                                                            |
| /wallet/                   | POST   | ✅         | -         | -     | { currency }                                                 |
| /wallet/:currency          | GET    | ✅         | :currency | -     | -                                                            |
| /wallet/:currency          | DELETE | ✅         | :currency | -     | -                                                            |

---

✅ = Requires Authentication  
✅ (Admin) = Requires Admin Authentication  
❌ = Public

---

```text
path ที่มี error
/admin/fiat-transactions
/admin/crypto-transactions
/admin/orders
/admin/trades
```

---
