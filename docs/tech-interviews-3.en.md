# The Meta Changed — Part 3

**What they might ask you in a Cloud/DevOps/Infrastructure interview.**

This is Part 3 and the final part of the series. If you haven't read the previous parts, I recommend doing that. The preparation and interview phases give you context for when and how these questions will appear.

- **Part 1:** Preparation, mindset, and what you should know before the interview.
- **Part 2:** The interview phases.
- **Part 3 (this post):** Technical question reference.

---

## Before we start

This pool is only a reference. It always depends on what you're applying for. Is it a leadership role? Just support? Adapt these questions to start studying or to build your highlights when explaining your profile.

I'm not going to cover everything. If I covered everything, this wouldn't be a post, it would be a book. The goal is to give you a map of the areas that might come up so you can identify where your gaps are.

---

## The classic questions — they're always there

### "Tell me about your experience"

The interviewer wants to know about your experience. Lol.

Briefly mention the technologies and projects you've worked on. You should spend the right amount of time here. Not too much, not too little.

Prepare it in advance, pointing toward what they want to hear, plus your highlights to use the time intelligently.

### "What's your level with X technology?"

Depending on your experience, this sets the difficulty of the questions. If you're not sure, a safe answer is "intermediate," so both you and the interviewer can start to gauge things.

Advanced or expert are good options when you have a lot of experience with a technology and multiple use case scenarios.

### "In this hypothetical scenario, how would you accomplish it?"

This can vary, and its purpose is to get a sense of your mental map around architectures, workflows, and technologies.

There may be multiple valid answers. They're generally open about that. They'll use this as an opportunity to push back on you and see how you react and adapt when someone challenges your approach.

### "What are the projects that you have worked on?"

The interviewer uses this to have you explain details that only someone actually involved would know.

The "most challenging project" variant is to see how you perform and approach problems. It's worth having an answer prepared. Ideally something involving popular technology.

---

## Architecture — the big picture

Architecture questions can come from multiple angles. Migration work gives you a lot of experience here.

At this level you should know the main types:

- **Microservices:** when to use them, their dependencies, best practices.
- **Monoliths:** when they're actually the best option (yes, sometimes they are).
- **Event-driven:** when it applies and how it's implemented.
- **Hybrid:** the reality is most projects are a mix.

Something like "what challenges would you need to solve if you want to use a microservices architecture from scratch" is a fairly typical question. Setting up dependencies, best practices, observability, etc.

From there come derivative questions like "what load balancer would you use if I have an application that requires specific paths or does redirects."

---

## Cloud Provider — the logic is standard

Doesn't matter if it's AWS, GCP, or Azure. The underlying logic is standard. I'll use AWS terminology because it's the most common, but the concepts apply everywhere.

### Networking

- How to configure VPCs. Insert peering and necessary subnetting.
- Difference between Load Balancers and when to use each (ALB vs NLB vs Classic).

### Security and access

- Types of policies and scopes, best practices, security questions.
- Service Account vs IAM role for a service.
- Options for accessing instances via SSH (there are at least two common ones).

### CDN and WAF

- When and how to use CloudFront. Cache rules, behaviors, etc.
- WAF functionality. Troubleshooting and advantages.

### Messaging and events

- SQS/SNS configuration and use cases.
- When to use each and how they integrate.

### Monitoring and logs

- Alarm setup and configuration. What can we monitor by default?
- Log groups, permissions, and related topics.
- Cluster configuration and observability.

---

## Infrastructure as Code — the classic

### CloudFormation

- Nested stacks vs cross-reference stacks.
- When to use each approach.

On a scale of 1 to 10, how much do you hate it when CloudFormation stacks explode and end up in a non-recoverable state because of some dev? I'm at a constant 8.

### Serverless

Lambda questions are rarely trivial. More likely you'll be asked:

- How would you trigger a Lambda from S3?
- How would you send a notification from AWS Personal Health Dashboard to Slack or email?
- Variants related to event-driven app integrations with other AWS services.
- Step Functions, concurrency limitations.

---

## Containers — the daily bread

### Commands and concepts

- Common Docker commands.
- In the context of a Dockerfile: what each instruction does, best practices.
- Building and running containers.

### Image Registry

- Image push, tag management.
- Custom registries.
- Cleanup and retention policies.

### Cluster administration

- Types of services in Kubernetes (or ECS, depending on the case).
- Architectural concepts and requirements.
- Troubleshooting pods, services, networking.

### Additional tools

- **Helm:** what it's for, how to use it, charts, values.
- **Service mesh:** Istio, Linkerd, general concepts.

---

## Pipelines — CI/CD

- How to automate common tasks. Explain your approach.
- Types of releases (blue-green, canary, rolling update).
- How to manage dependencies in the pipeline.
- How to speed up jobs like builds (caching, parallelism, artifacts).
- How do you reuse code across pipelines?
- Best practices: branching strategy, approval gates, rollback.

---

## IaC Automation — the details

### Terraform

Questions like:

- Why can't you use a provider inside a module when calling it with a `for_each` at the consumer level?
- I need to merge maps. What method do I use? Which element takes precedence?
- When do you need to lock states? Is it always necessary?

If you can answer these without googling, you're in good shape.

### CloudFormation and SAM

- What is SAM? Have you used Serverless Framework?
- This is still popular for legacy deployments and serverless applications.

### Configuration Management

- Knowledge of Packer and the AMI building process.
- Chef, Ansible: differences, advantages, and disadvantages.
- When to use each and why.

---

## Security — the add-on to everything above

This isn't a separate category in the sense that they'll give you a dedicated security block of questions. It's more of a:

> Add "do it with security in mind" to all the points above.

Every answer you give about architecture, cloud, containers, or pipelines should have an implicit security component. If the interviewer asks how you'd configure a VPC and you don't mention security groups, NACLs, or some security approach, you're leaving free points on the table.

---

## How to use this pool

Don't try to memorize all of this. That's not the point.

1. **Identify your gaps:** read the list and note where you couldn't give a decent answer.
2. **Prioritize:** focus on the areas most relevant to the roles you're applying for.
3. **Practice out loud:** in English. Knowing something and being able to explain it in another language are not the same.
4. **Have real examples:** for every area where you have experience, have a concrete example from a real project or situation.

---

## Closing the series

That's it. Three parts: preparation, interview phases, and the question pool.

These notes aren't gospel. They're what worked for me and what I prepared for people I worked with. Some things will age badly (technology changes). Others will stay relevant for a long time (the preparation and interview handling don't change that much).

The meta will keep changing. But the foundation is the same: prepare, know your story, and show how you think. English is just another tool, not the main obstacle.

✌️
