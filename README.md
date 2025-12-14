<<<<<<< HEAD

# DevOps Projects 🚀

Welcome to the ultimate resource for learning DevOps through hands-on, real-world projects.  
This repository is designed for aspiring DevOps engineers of all skill levels — from beginners starting their journey to advanced practitioners looking to deepen their expertise.
=======
![YOUR_BANNER](https://github.com/user-attachments/assets/29b89ea8-acf0-4b58-a33c-2e021328bcef)

Filesystem Architecture Diagram

![YOUR_DIAGRAM](https://github.com/user-attachments/assets/f619c450-2c27-4900-925e-373da69798bf)
>>>>>>> c6ec110 (New Diagram Uploaded)

---

## 🧠 Purpose of the Repository

This repository serves as a comprehensive learning resource for DevOps engineers to design, implement, and operate real-world systems.

It includes guides and solutions for:
- Deploying scalable and secure systems on the cloud
- Implementing CI/CD pipelines for real applications
- Automating infrastructure using Infrastructure as Code (IaC)
- Monitoring, securing, and scaling production workloads

Example projects include:
- Deploying a Java application on AWS using a 3-tier architecture
- Designing scalable VPC architectures in the cloud
- Building automated CI/CD pipelines for enterprise workloads

---

## 📂 Repository Structure
```
DevOps-Projects/
├── DevOps-Project-001/
├── DevOps-Project-002/
├── DevOps-Project-003/
└── README.md
```

## 📂 What Each Project Contains

Each project directory includes:

- A detailed `README.md` with step-by-step implementation
- Architecture and design explanation
- Prerequisites and validation steps
- Key learnings and future improvements

---

## 🔍 Features & Technologies

This repository demonstrates extensive usage of DevOps concepts and modern cloud technologies.

---

## ☁️ Cloud & Infrastructure

- AWS EC2, RDS, VPC, IAM, Auto Scaling
- Infrastructure as Code (IaC) using Terraform and CloudFormation
- Custom AMIs and automation scripts

---

## 🔁 CI/CD & Build Tools

- Git & GitHub
- GitHub Actions
- Maven
- SonarQube / SonarCloud
- JFrog Artifactory

---

## 📦 Containers & Orchestration

- Docker
- Kubernetes

---

## 📊 Monitoring & Operations

- AWS CloudWatch
- Logging and monitoring best practices

---

## 🧩 Project Levels

Projects are categorized to support progressive learning:

### Beginner Projects
- Introduction to DevOps tools
- Cloud fundamentals
- Basic automation concepts

### Intermediate Projects
- Multi-service deployments
- CI/CD pipelines
- Infrastructure automation

### Advanced Projects
- Highly scalable architectures
- Security best practices
- Observability and performance optimization

---

## 🔄 DevOps Integration with Other Technologies

Modern DevOps does not exist in isolation.  
This repository includes projects that integrate DevOps with:

- Version control using Git & GitHub
- CI/CD pipelines for automated testing and deployment
- Cloud platforms: AWS
- Containerization using Docker and Kubernetes

---

## 🎯 Project Scope

The projects in this repository cover a wide range of DevOps domains:

- Automated application deployments
- Continuous Integration & Continuous Deployment (CI/CD)
- Infrastructure as Code (IaC)
- Monitoring and logging solutions
- Security and compliance practices
- Scalability and performance optimization

---

## ⭐ Why Explore This Repository?

- Hands-on, real-world DevOps experience
- Structured learning path from beginner to advanced
- Industry-relevant tools and best practices
- Portfolio-ready projects for resumes and interviews
- Community-driven and continuously improving content

---

## 🚀 Continuous Improvement

This repository is continuously updated with new projects, enhancements, and optimizations as part of ongoing DevOps learning and practice.

Feel free to explore, fork, and build along 🚀
=======
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#2496ed', 'edgeLabelBackground':'#ffffff', 'tertiaryColor': '#f4f4f4'}}}%%
graph LR
    subgraph "External World"
        AdminUser[👤 System Administrator<br/>(You)]
        BackupDest[(📦 External Backup<br/>Destination)]
    end
=======
![LinuxOps – DevOps Project](./unnamed.jpg)
>>>>>>> 1bdc371 (Update README.md)

# **LinuxOps – DevOps Project**

### *Server Automation & Security | Hands-on Linux Lab*

This repository contains a **practical LinuxOps / DevOps lab** focused on **real Linux fundamentals**:

* User & group management
* Permissions & ownership
* Directory and file operations
* Text processing (`sed`, `vi`)
* System inspection commands
* Cleanup & hygiene

> 🎯 **Goal**: Learn Linux by *doing*, not copy‑pasting.

---

## 📌 Architecture & File Structure Diagram

* **Reference Diagram (PDF)**: [Blank diagram.pdf](./Blank%20diagram.pdf)

> Use this diagram as the **source of truth** for directory structure.

---

## 🚀 Quick Start (Run This First)

### **Run Ubuntu Linux Container (Persistent & Long‑Term)**

```bash
docker run -dit \
--name ubuntu-container \
--hostname ubuntu-dev \
--restart unless-stopped \
--cpus="2" \
--memory="4g" \
--mount type=bind,source=/tmp/ubuntu-data,target=/data \
-v /var/run/docker.sock:/var/run/docker.sock \
-p 2222:22 \
-p 8080:80 \
--env TZ=Asia/Kolkata \
--env LANG=en_US.UTF-8 \
ubuntu:latest /bin/bash
```

Enter the container:

```bash
docker exec -it ubuntu-container bash
```

---

## 🧠 Docker Parameters Explained

| Parameter                                                | Description                               |
| -------------------------------------------------------- | ----------------------------------------- |
| `-dit`                                                   | Detached + interactive terminal           |
| `--name ubuntu-container`                                | Container name                            |
| `--hostname ubuntu-dev`                                  | Hostname inside container                 |
| `--restart unless-stopped`                               | Auto‑restart policy                       |
| `--cpus="2"`                                             | CPU limit                                 |
| `--memory="4g"`                                          | Memory limit                              |
| `--mount type=bind,source=/tmp/ubuntu-data,target=/data` | Persistent storage                        |
| `-v /var/run/docker.sock:/var/run/docker.sock`           | Docker access inside container (optional) |
| `-p 2222:22`                                             | SSH port mapping                          |
| `-p 8080:80`                                             | Web service port                          |
| `--env TZ=Asia/Kolkata`                                  | Timezone                                  |
| `--env LANG=en_US.UTF-8`                                 | Locale                                    |
| `ubuntu:latest /bin/bash`                                | Ubuntu image + Bash                       |

---

## 🧪 Deployment Steps

### **Step 1 – Initial Setup (root)**

1. Create users: `Dev1`, `Dev2`, `Dev3`
2. Create groups: `devops`, `aws`, `management`, `sales`
3. Change primary group of `Dev2`, `Dev3` → `devops`
4. Add `aws` as secondary group to `Dev1`
5. Create directory & file structure (as per diagram)
6. Change group of `/dir1`, `/dir8/dir9`, `/f2` → `devops`
7. Change ownership of `/dir1`, `/dir8/dir9`, `/f2` → `Dev1`

---

### **Step 2 – Additional Users & Groups (root)**

1. Create users: `Dev4`, `Dev5`
2. Create groups: `app`, `database`

---

### **Step 3 – File Operations**

1. **root**: Create file `/f3`
2. **root**: Rename `/f2` → `/f4`
3. **Dev4**: Move `/dir1/f1` → `/dir2/dir1/dir2`

---

### **Step 4 – Advanced Filesystem Tasks**

1. **root**: Create `/home/Dev2/dir1`
2. **root**: From `/dir2/dir1/dir2/dir10`, create `/opt/dir12/dir10/f1` using *relative path*
3. **root**: Delete `/dir4` recursively
4. **root**: Delete all child items under `/opt/dir12`
5. **Dev1**: Move `/opt/dir12/dir10/f1` → `/home/Dev1`
6. **root**: Write text to `/f3`

---

### **Step 5 – Text Processing & Cleanup**

1. **root**: Create `/dir1/f2`
2. **root**: Delete `/dir6`
3. **root**: Delete `/dir8`
4. **root**: Replace `DevOps` → `devops` in `/f3`
5. **root**: Using `vi`, copy line 1 and paste it 10 times
6. **root**: Replace `Engineer` → `engineer`
7. **root**: Delete `/f3`

---

### **Step 6 – System Inspection (root)**

1. Search file `f3` (absolute paths)
2. Count files in `/`
3. Print last line of `/etc/passwd`

---

### **Step 7 – Filesystem Verification**

1. Verify filesystem usage using `df -h`
2. Create `/data/f1`

> ⚠️ **Docker Note**: `mount` / `umount` are restricted in standard Docker containers.

---

### **Step 8 – Final Cleanup (root)**

1. Delete `/dir1`, `/dir2`, `/dir3`, `/dir5`, `/dir7`
2. Delete `/f1`, `/f4`
3. Delete `/opt/dir12`

---

### **Step 9 – User & Group Cleanup (root)**

1. Delete users: `Dev1`, `Dev2`, `Dev3`, `Dev4`, `Dev5`
2. Delete groups: `app`, `aws`, `database`, `devops`, `management`, `sales`
3. Remove remaining home directories (if any)

---

## 🐳 Docker vs VM Compatibility

| Feature             | Docker | VM / EC2 |
| ------------------- | ------ | -------- |
| Users & groups      | ✅      | ✅        |
| Files & permissions | ✅      | ✅        |
| Text processing     | ✅      | ✅        |
| mount / umount      | ❌      | ✅        |

---

## 🔗 Connect with Me

* **GitHub**: [https://github.com/piyush-pooh](https://github.com/piyush-pooh)
* **LinkedIn**: [https://www.linkedin.com/in/piyush-sharma-5250a0291/](https://www.linkedin.com/in/piyush-sharma-5250a0291/)
* **Twitter (X)**: [https://x.com/Piyush_poooh](https://x.com/Piyush_poooh)

---

## ⭐ Support the Project

If this lab helped you **understand Linux the right way**, please ⭐ **star the repository** and share it 🚀

> *LinuxOps mindset: Don’t fight Linux. Understand it.*

    class AdminUser,BackupDest external;
    class SSH,Firewall security;
    class RBAC,Systemd,Logs core;
    class Cron,BashScripts automation;
    class LinuxOps Lab - Production Server (Ubuntu) container:
