<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/CV3hSbj.png" alt="EchoChat"></a>
</p>

<h3 align="center">EchoChat</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)

</div>

<!--tech stack icons-->
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,typescript,js,tailwind,git,postman,vscode,vercel&perline=14" />
  </a>
</p>

---

<p align="center">
    <br> 
  Welcome to EchoChat, where meaningful conversations come to life!
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
EchoChat is a versatile chatting platform designed to make your online interactions both engaging and effortless. Whether you're sending text messages, sharing videos, or participating in live video chats, EchoChat ensures you stay connected with your friends, family, and colleagues in a seamless and creative way.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Installing

```
git clone https://github.com/hv789/chatApp-IMBY-SE.git
cd chatApp-IMBY-SE
npm i
```

## 🔧 Additional Steps
Create a .env.local file and paste the following into it.

### .env.local file contents

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_STREAM_KEY=
STREAM_SECRET=
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=
WEB_PUSH_PRIVATE_KEY=
```

### Clerk configuration steps
- Make an account in [Clerk](https://clerk.com/)
- Copy the **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** and **CLERK_SECRET_KEY** and paste 
  in the **.env.local** file.
- Go into the **Webhooks** section and **Add Endpoint URL**.
```
<LINK>/api/clerk-webhook
```
- Under the **Message Filtering** section check ***session.ended, session.removed, session.revoked***.
- Svix play option can be used to generate unique endpoint. Later it can be replaced
  with your hosted site's link

### GetStream configuration steps
- Make an account in [GetStream](https://getstream.io/)
- Make an organization.
- Once in, copy the ***App access keys*** and paste them into **.env.local** file.
- Under the **Webhook events** clear all events and then add ***message.new*** event.
- Under the **Chat Overview -> Before Message Hooks -> paste the below content**
```
<LINK>/api/push-webhook
```
- Replace ***<LINK>*** with the Svix link generated previously.

### Web-Push keys
- Open a fresh terminal in chatApp-IMBY-SE directory and run below code
```
npx web-push generate-vapid-keys
```
- Paste the generated public and private keys into the **.env.local** file.

And you are done...👍

## 🎈 Usage <a name="usage"></a>
- The whole chat application is present in this directory.
- The video chat application is hosted on [videoChatApp-IMBY-SE](https://github.com/hv789/videoChatApp-IMBY-SE)

## 🚀 Deployment <a name = "deployment"></a>
Deployed on [Vercel](https://vercel.com/).
Don't forget to add the **environment variables**.

## ⛏️ Built Using <a name = "built_using"></a>
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Clerk Auth](https://clerk.com/)
- [GetStream](https://getstream.io/)
- [Web-Push](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)

## 📝 TODO <a name = "todo"></a>
- Add more real life features like -
  - Status
  - Stories
  - etc...
- Adding more AI features. 

## ✍️ Authors <a name = "authors"></a>
- [Harsha Vardhan](https://hv789.vercel.app/)
- [IIT Bhubaneswar](https://www.iitbbs.ac.in/)
- Electronics and Communication Engineering (Department)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Google 😄
- ChatGPT 🤖
- Inspiration from WhatsApp, Slack, etc...
