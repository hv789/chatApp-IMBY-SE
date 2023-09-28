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

---

## 🎥 Video
[![Watch the video](https://img.youtube.com/vi/n9FDwmbuPME/maxresdefault.jpg)](https://youtu.be/n9FDwmbuPME)https://youtu.be/n9FDwmbuPME

## 📝 Table of Contents
- [About](#about)
- [System Design Document](#system_design_document)
- [Getting Started](#getting_started)
- [Dependencies](#dependencies)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
EchoChat is a versatile chatting platform designed to make your online interactions both engaging and effortless. Whether you're sending text messages, sharing videos, or participating in live video chats, EchoChat ensures you stay connected with your friends, family, and colleagues in a seamless and creative way.

## 📄 System Design Document <a name = "system_design_document"></a>
Check out the System Design Document present in the repo...☝️
Or check out [here](https://docs.google.com/document/d/10dEFTbALtCkre_24ai60bi_95VST1Sta9dSchb7Bl5w/edit?usp=sharing)

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

## ⚓ Dependencies <a name="dependencies"></a>

- Project Basics
  - [@t3-oss/env-nextjs](https://www.npmjs.com/package/@t3-oss/env-nextjs)
  - [@types/node](https://www.npmjs.com/package/@types/node) -> Node with TS
  - [@types/react](https://www.npmjs.com/package/@types/react) -> React with TS
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) -> Reac DOM with TS
  - [@types/web-push](https://www.npmjs.com/package/@types/web-push) -> Web-Push with TS
  - [autoprefixer](https://www.npmjs.com/package/autoprefixer)
  - [eslint](https://www.npmjs.com/package/eslint) -> ESLint
  - [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) -> ESLint with Next.js
  - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) -> Prettier config
  - [lucide-react](https://www.npmjs.com/package/lucide-react) -> React Icons
  - [next](https://www.npmjs.com/package/next) -> Next.js
  - [postcss](https://www.npmjs.com/package/postcss) -> Styling with JS plugins
  - [prettier](https://www.npmjs.com/package/prettier) -> Formatting
  - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) -> Prettier with TS
  - [react](https://www.npmjs.com/package/react) -> React integration
  - [react-dom](https://www.npmjs.com/package/react-dom) -> React for DOM
  - [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) -> Merge style with classes
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss) -> Tailwind styling
  - [typescript](https://www.npmjs.com/package/typescript) -> TS integration
  - [svix](https://www.npmjs.com/package/svix) -> Web-Hook signatures
  - [web-push](https://www.npmjs.com/package/web-push) -> Web-Push functions for Notifs
  - [zod](https://www.npmjs.com/package/zod) -> Handling env for TS
    
  ***Thses dependencies are needed for basic project structure for using next.js, typescript, DOM elements, Web-Push functions, styling, formatting, etc...***

- Clerk Auth
  - [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs)
  - [@clerk/themes](https://www.npmjs.com/package/@clerk/themes)
    
  ***These dependencies allow the integration of Clerk Auth into the project along with providing the themes necessary***
  [Clerk Docs](https://clerk.com/docs)
  
- GetStream
  - [stream-chat](https://www.npmjs.com/package/stream-chat) -> SDK for chat applications
  - [stream-chat-react](https://www.npmjs.com/package/stream-chat-react) -> React components for Stream Chat

  ***These dependencies allow the integration of GetStream Chat SDK into the project along with providing the necessary UI Kits and functionalies***
  [GetStream Chat Docs](https://getstream.io/chat/docs/)

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
