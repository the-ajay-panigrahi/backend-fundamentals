# 🌐 Programmer’s Guide to the Internet (Simplified)

## 1. User, Client and Frontend
- **User**: The person (you) using the internet
- **Client**: The browser or app used to access the internet (e.g. Chrome)
- **Frontend**: The visible website or interface shown in the browser

## 2. The Network and Internet
- The internet is a global **network** of connected devices
- Data moves via **signals** (WiFi, 4G/5G) and fiber cables
- Devices are identified by **IP addresses**
- A **URL** is a user-friendly web address mapped to an IP using **DNS**

## 3. Network Requests
- Typing a URL sends a **network request** from client to server
- Requests use **HTTP methods**: GET, POST, PUT, DELETE
- Requests include destination (URL/IP), path and intent

## 4. Servers and Backend
- A **server** is a machine that receives and processes network requests
- It returns HTML or data to the client based on the request
- The **backend** handles:
  - Logic and business rules
  - Authentication
  - Database interactions
  - Response generation

## 5. Full Stack
- **Frontend**: What the user sees (UI)
- **Backend**: Behind-the-scenes code and database logic
- Together, they form the **Full Stack**

## 6. Login Example
- Client sends login data → Server processes it → Server talks to database → Result returned to client
- Each step is a network request between systems

## 7. Types of Servers
- Self-hosted servers (e.g. Raspberry Pi)
- Cloud servers (e.g. AWS)
- Serverless and microservices — all are just server configurations running backend code

User uses a browser → Sends request to a server → Server sends back HTML/data → Browser shows it → You see a website
