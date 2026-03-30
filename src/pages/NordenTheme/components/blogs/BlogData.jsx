export const BLOGS = [
  {
    id: 1,
    image: "/assets/images/bg-1.jpg",
    title: "Why Side Projects Shape Better Developers",
    slug: "side-projects-shape-developers",
    date: "2025-12-27",
    content: `
         Side projects have always been my secret training ground. They’re not about deadlines or client expectations,
         they’re about curiosity and freedom. When I sit down to build something just for myself, I get to experiment
         without fear — whether it’s trying out a new framework, designing a playful UI, or debugging a backend model
         until it feels right. That freedom has shaped me more than any tutorial ever could.

         What I’ve learned is that building end-to-end teaches you things no course can. You don’t just write a function,
         you think about authentication, deployment, performance, and how a user will actually feel when they interact
         with it. Every side project I’ve done has been a crash course in connecting technology with empathy.

         Of course, side projects aren’t smooth. I’ve hit bugs that made me want to quit, and I’ve had nights where nothing
         worked. But pushing through those moments built resilience. It gave me confidence that I can handle complexity
         anywhere, and that persistence is just as important as skill.

         The best part? Side projects speak louder than resumes. When someone asks what I can do, I don’t just list skills,
         I show them the things I’ve built. They prove initiative, creativity, and the ability to deliver. More than that,
         they remind me why I love being a developer: the joy of turning ideas into reality.
      `,
    images: [
      {
        url: "/assets/images/bg-3.jpg", // leave space for image URL
        caption: "Late-night coding sessions often spark the best ideas.",
      },
      {
        url: "", // leave space for image URL
        caption: "Sketching out side project flows before diving into code.",
      },
      {
        url: "", // leave space for image URL
        caption: "A simple UI mockup that turned into a full project.",
      },
      {
        url: "", // leave space for image URL
        caption: "Celebrating the launch of a side project with friends.",
      },
    ],
    conclusion: `
         Side projects aren’t just hobby code — they’re a mindset. They help you grow faster, stand out,
         and enjoy the craft of building. If you haven’t started one yet, today is the best time.
      `,
  },
  {
    id: 2,
    title: "The Joy of Debugging",
    slug: "joy-of-debugging",
    date: "2025-12-27",
    image: "/assets/images/bg-2.jpg",
    content: `
         Debugging is often seen as the frustrating part of coding, but for me it’s where the real magic happens.
         It’s the moment when you stop being just a coder and start being a detective. Every bug is a mystery,
         every console log is a clue, and every fix feels like solving a puzzle.

         Over time, I’ve realized debugging isn’t just about fixing errors — it’s about understanding systems deeply.
         When something breaks, it forces you to slow down, trace the flow, and see how all the pieces connect.
         That process has taught me more about architecture, performance, and user experience than any tutorial ever could.

         Debugging also builds patience. There are nights when nothing works, when the bug hides in plain sight,
         and when you feel like giving up. But pushing through those moments teaches resilience. And the rush you feel
         when the issue finally resolves? That’s pure joy. It’s proof that persistence pays off.

         For me, debugging has become less of a chore and more of a mindset. It’s about curiosity, persistence,
         and the satisfaction of making something whole again. And honestly, it’s one of the reasons I love being a developer.
      `,
    images: [
      {
        url: "", // add image URL later
        caption: "Tracing through logs like a detective following clues.",
      },
      {
        url: "", // add image URL later
        caption: "The moment of relief when the bug finally disappears.",
      },
      {
        url: "", // add image URL later
        caption:
          "Whiteboard sketches of complex flows during debugging sessions.",
      },
      {
        url: "", // add image URL later
        caption: "Celebrating a solved bug with a fresh commit.",
      },
    ],
    conclusion: `
         Debugging isn’t just fixing code — it’s a journey of discovery. It teaches patience, sharpens problem-solving,
         and reminds us that every challenge has a solution waiting to be found. The joy of debugging is the joy of growth.
      `,
  },
  {
    id: 3,
    image: "https://i.ibb.co/ZzXrjBR4/63a3d17931fdb2749608099db35a8bdd.jpg",
    title: "The Architecture of 'Medical-Grade' UI",
    slug: "medical-grade-ui-architecture",
    date: "2026-03-31",
    content: `
        When I talk about 'medical-grade' UI, I’m not just talking about whitespace; I’m talking about precision. 
        In my recent work with Next.js and Tailwind, I’ve moved away from heavy external libraries. I’ve found 
        that there is a certain rigors in building transitions with pure CSS. It forces you to understand 
        the browser’s rendering pipeline rather than just dropping in a motion div and hoping for the best.

        Building systems like the pharmaceutical ecosystem for Pamed Pharma taught me that clarity is a 
        functional requirement. When a user is managing inventory or data, the interface shouldn't just 
        look 'nice'—it should feel sterile, reliable, and incredibly fast. Using Phosphor Icons and a 
        refined color palette isn't an afterthought; it’s the foundation of user trust.

        Moving into the backend with Go and PostgreSQL has further sharpened this perspective. When your 
        data layer is robust and typed, your frontend can afford to be minimalist. You aren't hiding 
        latency behind flashy loaders; you're delivering data through a clean, intentional pipe. 
        It’s about creating a cohesive experience from the database schema all the way to the 
        last pixel of a CSS transition.
    `,
    images: [
      {
        url: "",
        caption:
          "Fine-tuning CSS transitions to achieve that clinical, snappy feel.",
      },
      {
        url: "",
        caption:
          "Mapping out the Next.js and Go architecture for maximum performance.",
      },
      {
        url: "",
        caption:
          "Selecting the perfect Phosphor Icon set for a minimalist dashboard.",
      },
      {
        url: "",
        caption:
          "Reviewing the UI flow to ensure every interaction feels intentional.",
      },
    ],
    conclusion: `
        Clean code and clean UI aren't separate tasks—they are the same discipline. By stripping 
        away the noise and focusing on pure implementation, we build tools that don't just 
        work, but endure.
    `,
  },
];
