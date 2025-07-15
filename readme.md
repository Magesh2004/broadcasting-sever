# Broadcasting Server (CLI-based)

A simple CLI-based broadcasting system using **Socket.IO** that allows multiple clients to connect to a server and exchange real-time messages. Great for understanding WebSocket fundamentals, message broadcasting, and real-time communication.

---

## 📦 Features

- Start a WebSocket server from CLI
- Connect multiple clients from CLI
- Broadcast messages to all connected clients (except sender)
- Graceful handling of client connections/disconnections

---

## 🚀 Installation

```bash
git clone https://github.com/Magesh2004/broadcasting-sever.git
cd broadcasting-sever
npm install
npm link  # Registers the CLI globally
```

---

## 🔧 CLI Commands

```bash
broadcast-server start      # Start the broadcasting server
broadcast-server connect    # Connect as a client
```

---

## 🧪 Usage Example

1. Start the server:

```bash
broadcast-server start
```

2. In another terminal, connect a client:

```bash
broadcast-server connect
```

3. Type a message and press Enter. All other connected clients will receive it.

---

## 🛠 Tech Stack

- Node.js
- Socket.IO
- Commander.js
- Readline

---

## 🙋 **Author & Contact**

**Author:** Magesh Balram

📧 **Email:** [mageshbalram4@gmail.com](mailto:mageshbalram4@gmail.com)

[Project link](https://roadmap.sh/projects/broadcast-server)

