# What Do You Even Do?

**Tech jobs explained with gaming examples.**

*If you've ever tried to explain your job to a family member and got "oh, so you fix computers" in response, this post is for them. And also for you, if you're still figuring out where you want to end up in tech.*

Every business today — the bank, the airline, the coffee shop app on your phone — runs on digital platforms. Those platforms don't build themselves: they're built and maintained by people, in different roles, with different skills.

Until the clankers take our jobs, someone has to do it. And that someone could be you.

This isn't a programming manual. It's a guide to understanding what each person on a tech team actually does, using examples from something you probably already know: video games.

---

## A word before you pick a role

![](/docs/images/tech-roles-1.png)

Before you get attached to a role because it sounds exciting: the more appealing a job sounds, the more people are already fighting for it. That's not a warning to scare you off, that's supply and demand.

There's an idea worth carrying with you. To make real money, you either do something most people can't do, do something most people won't do (which is also hard, there's a reason nobody wants it), or you're someone people genuinely want around. In practice, it's usually some mix of all three.

If you're none of those yet, that's fine. Being a try-hard isn't a bad thing if you're working to get better and not stepping on anyone to get there. The problem isn't putting in effort. The problem is putting in effort in the wrong direction and expecting that alone to be enough. Not all effort is rewarded. Some things you do right, even perfectly, still won't work out. That's not a flaw in the system. That's the system.

Work smart. Be honest about where you actually stand. And keep going, without the drama.

---

## On where to start

Most people begin as developers. Not because it's the only valid path, but because it's the most flexible entry point. You can go straight into infra or cloud if you already know that's your direction, but if you're still figuring things out, starting on the dev side keeps more doors open.

There's a real difference in what each feels like. Developers are closer to toy makers: you build things that other people actually use and interact with. You see the result. If that idea appeals to you, pay attention to that instinct. Infra and cloud work is different. It's less about building from scratch and more about connecting what exists and keeping it running.

A building is a decent way to picture the whole thing. At the top, a Cloud or Dev Architect is like the architect who designs the structure — how many floors, how the space is organized, what the platform can actually support. The stores and offices inside are built by developers. Someone in mid-level infra works on specific parts of the construction: the wiring for one floor, a particular system, a defined scope. And at the lower levels, the job is keeping the building standing. Lights on, systems up, nothing failing quietly overnight. That role doesn't get talked about much, but it's the reason everything else can exist.

Except none of it is a real building. It all happens virtually. You close your laptop and the thing you spent the day building is just running somewhere, on a server you've never seen, in a datacenter on another continent. At some point every person in this field stares at a screen and wonders if any of it is real. That's the existential crisis. It comes with the job. Welcome.

None of this is a weekend project. Every role on this list takes years to actually know. Think of it less like a career ladder and more like a Lego set where the box is enormous and nobody showed you the full picture. Each thing you learn lets you connect more pieces. Some people spend twenty years building and still find sections they haven't touched.

And about the *clankers*: they are not going to free anyone from babysitting large systems. If anything, the opposite. The more automated and complex things get, the more they need people who actually understand what's going on. There will be work. The question is just which part of the building you want to be responsible for.

---

## The team behind a game

When a game ships, there are hundreds of people behind it. Nobody says "they all make video games." There are artists, level designers, physics programmers, audio teams, community managers. Tech works the same way. Every role has a purpose, and all of them are needed for something to actually work.

---

## Frontend Developer — The art and UI team

In a game, the frontend is everything you see: the menus, the icons, the level-up animations, the HUD with your health and mana bars. If it looks good or bad, if the button responds or lags, if the loading screen looks professional: that was the frontend's call.

In the real world: they build the websites and apps you use. If a button is where it should be, if an animation feels smooth, if the app looks good on your phone, a frontend developer built that.

**Common tools:** HTML, CSS, JavaScript, React, Vue, TypeScript.

**The profile:** they care a lot about user experience. Half programmer, half UX designer.

**Career paths:** UI Engineer, Design Engineer, Product Tech Lead, or specializing in accessibility and performance.

---

## Backend Developer — The game engine

The backend is what you don't see. In a game, it's the engine calculating physics, combat rules, the experience points you get from killing a mob. When you press "attack" and the game figures out if you missed or landed a crit, that's the backend.

In the real world: they build the logic behind apps. When you create an account, buy something online, or search for a flight and prices appear: all of that is processed by the backend.

**Common tools:** Python, Node.js, Go, Java, databases, APIs.

**The profile:** they think in logic, efficiency, and security. They like understanding how things work on the inside.

**Career paths:** Software Architect, Tech Lead, or specializing in distributed systems or a specific stack.

---

## DevOps / Platform Engineer — The MMO ops team

In an MMO, someone has to keep the servers running 24/7. When there's massive lag or a server goes down, there are people who detect it and fix it, ideally before you even notice. They also make sure that deploying an update doesn't take the game down.

In the real world: they automate and maintain the infrastructure that keeps apps running. If a deploy breaks something, if a server dies at 3 AM, if everything needs to move to a different region: that's the DevOps problem.

**Common tools:** Docker, Kubernetes, AWS/GCP/Azure, Terraform, CI/CD pipelines.

**The profile:** they love automation and hate doing the same thing twice. If a task is repetitive, they'll script it.

**Career paths:** Platform Engineer, SRE (Site Reliability Engineer), Infrastructure Architect, or cloud specialization.

---

## Cloud / Infrastructure Engineer — The game's datacenter

Similar to DevOps but more focused on designing the infrastructure itself. If DevOps keeps the servers running, the Cloud Engineer decides how they should be configured, in how many regions, at what cost, and with what level of security.

**Common tools:** AWS, GCP, Azure, networking, security, IaC (Terraform, CloudFormation).

**The profile:** very detail-oriented about architecture. They think at scale and about how things will grow.

**Career paths:** Cloud Architect, FinOps Engineer, or provider specialization (AWS/GCP/Azure certifications).

---

## QA Engineer — The professional playtester

Game studios have entire teams playing a game before launch, looking for bugs. It's not just "playing for free": documenting exactly what steps reproduce each bug, under what conditions it fails, and verifying that the dev's fix actually worked.

In the real world: same thing but for software. They test features, find edge cases, write automated tests, and are the first ones to tell you your code doesn't work the way you thought.

**Common tools:** Selenium, Playwright, Cypress, Postman, testing methodologies.

**The profile:** methodical and naturally skeptical. The job is to assume something is broken until proven otherwise.

**Career paths:** QA Lead, Test Architect, SDET (Software Development Engineer in Test), or specializing in automation.

---

## Security Engineer — The anti-cheat team

In online games, the anti-cheat team finds exploits before players do. And when players find them anyway, they work to patch them. They also have to make sure the anti-cheat isn't so aggressive it bans legitimate players.

In the real world: they find vulnerabilities in systems and apps before hackers do. They do pen testing, review code for security issues, configure firewalls, and define access policies.

**Common tools:** Burp Suite, Metasploit, code analysis, networking, cryptography.

**The profile:** they think like attackers to defend better. They like understanding how systems work at a deep level to find the cracks.

**Career paths:** Security Architect, pentesting or cloud security specialization, or aiming for CISO long-term.

---

## Data Engineer / Data Analyst — The balance team

In competitive games, teams constantly watch statistics: which character has the highest win rate, which weapon is being over-used, where on the map most players die. That's how they balance the game.

In the real world: same thing but with business data. How many users drop off at step 3 of checkout, which feature nobody uses, which type of user converts best. The data engineer builds the systems to collect that data. The analyst interprets it.

**Common tools:** Python, SQL, Spark, Airflow, BigQuery, dashboards.

**The profile:** mix of programming and statistics. They like finding patterns and answering questions with numbers.

**Career paths:** Data Architect, Analytics Engineer, Head of Data, or transitioning into Machine Learning.

---

## Machine Learning / AI Engineer — The NPC programmer

NPCs with "intelligent" behavior are programmed. The StarCraft 2 bots that play better than humans, the pathfinding enemies that flank you, the recommendation systems that suggest your next game: all of that is ML/AI.

In the real world: they build systems that learn from data. Spotify and Netflix recommendation algorithms, fraud detection models, LLMs like the one that helped write this.

**Common tools:** Python, TensorFlow, PyTorch, scikit-learn, math.

**The profile:** requires more mathematical background than average. Mix of engineer and scientist.

**Career paths:** ML Research Scientist, AI Product Manager, LLM specialization, computer vision, or MLOps.

---

## Product Manager — The game designer

The game designer doesn't program the game, but decides what goes in it. What mechanics it has, how the resource economy works, what order tutorials are presented. They work with all teams and hold the complete product vision.

In the real world: the PM decides which features get built, in what order, for whom, and why. They don't write code, but work with everyone: with devs to define what's possible, with design to make it usable, with business to make it make sense commercially.

**Common tools:** Jira, Notion, Figma (for review), user data, constant communication.

**The profile:** communicators, not necessarily deep technical experts, but they need to understand enough technology to have realistic conversations with teams.

**Career paths:** Head of Product, CPO, or building something of your own. Also a solid entry point into venture capital if the startup world interests you.

---

## Tech Lead / Staff Engineer — The raid captain

In many RPGs there's a tank, a healer, a DPS. The Tech Lead is the one who coordinates the group, decides the raid strategy, and when things go wrong is the one who brings order.

Not necessarily the one who codes the most, but the one who makes important technical decisions: how code is organized, which technologies to use, how to solve the hard problems. Also does code reviews, mentoring, and protects the team from bad decisions.

**The profile:** solid experience, technical judgment, and communication skills. The hardest role to get because it requires both sides.

**Career paths:** Engineering Manager (if you like the people side), Principal/Staff Engineer (if you want to stay technical), or CTO at a startup.

---

## Mobile Developer — The console port

When a popular game gets ported to a new platform, it's not just "recompile." There are UX decisions, hardware constraints, different controls, and app stores with their own rules.

In the real world: they build apps for iOS and Android. Can be native (Swift for iOS, Kotlin for Android) or cross-platform (React Native, Flutter). They work with each platform's specific constraints.

**The profile:** patience with Apple and Google's publishing processes. Attention to tactile experience details.

**Career paths:** iOS or Android specialization, Mobile Chapter lead, or cross-platform with React Native/Flutter.

---

## So what now?

![](/docs/images/tech-roles-2.png)

If something caught your attention, that's your signal. You don't need to know everything upfront. Nobody knew at the start which way they wanted to specialize — and if they tell you they did, they're probably lying. The specialization they ended up in likely didn't even exist when they started.

One thing you should expect regardless of which path you choose: you will never stop studying. The tools change, the frameworks change, the cloud providers add seventeen new services every quarter. That's not a warning, it's just the job description. The people who do well aren't the ones who already know everything — they're the ones who got comfortable not knowing things yet.

What does help: start doing something, anything, related to what interests you. A course, a small project, following people who work in that role. Clarity comes from doing, not from thinking.

---

## Before you go

![](/docs/images/tech-roles-3.png)

Once you have a direction and you're getting closer to actually applying for jobs, the interview process is its own game. It has different rules, different pressure, and most people are completely unprepared the first time.

If that's where you're headed, the next thing worth reading is the interview prep series — it covers how to structure your answers, what to expect in technical rounds, and how to not completely blank when someone asks you to explain your experience in English.

✌️
