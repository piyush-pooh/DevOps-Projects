# 🚀 DevOps Project 002 – Serverless AWS E-Commerce Platform

## 📌 Overview

This project demonstrates a **production-style, serverless e-commerce application** built entirely on AWS using **cloud-native and DevOps best practices**.

The system delivers a static frontend globally via **CloudFront**, exposes backend APIs through **API Gateway and AWS Lambda**, persists data in **DynamoDB**, and processes orders asynchronously using **SQS**.

The goal of this project is to showcase **real-world AWS architecture design, automation, scalability, and cost optimization**, not just application code.

---

## 🏗 Architecture

### High-Level Request Flow

User

      ↓

CloudFront (HTTPS)

      ↓

S3 Static Website (Frontend)

      ↓

API Gateway (HTTP API)

      ↓

Lambda (Backend Services)

      ↓

DynamoDB (Products & Orders)


### Asynchronous Order Processing



Lambda (placeOrder)
↓
SQS Queue
↓
Lambda (orderWorker)
↓
DynamoDB (Orders)


### Key Architectural Principles

- Fully serverless (no EC2 or servers)
- Auto-scaling and highly available
- Pay-per-use cost model
- Minimal operational overhead
- Secure by default

---

## 🛠 Technology Stack

### Cloud Services

- **Amazon S3** – Static frontend hosting
- **Amazon CloudFront** – CDN and HTTPS
- **Amazon API Gateway (HTTP API)** – API routing
- **AWS Lambda** – Serverless compute
- **Amazon DynamoDB** – NoSQL data storage
- **Amazon SQS** – Message queue for async processing
- **AWS IAM** – Access control
- **Amazon CloudWatch** – Logs and monitoring

### DevOps & Automation

- **Terraform** – Infrastructure as Code
- **AWS CodeBuild** – CI/CD pipeline (`buildspec.yaml`)
- **GitHub** – Version control

### Application

- **HTML, CSS, JavaScript** – Frontend
- **Python** – Backend Lambda functions

---

## 📁 Project Structure


---

## ⚙️ Key Features

- Global content delivery using **CloudFront**
- Static frontend hosted on **S3**
- REST APIs powered by **API Gateway + Lambda**
- Serverless backend with zero server management
- High-performance data storage using **DynamoDB**
- Asynchronous order handling via **SQS**
- CI/CD pipeline using **CodeBuild**
- Infrastructure managed using **Terraform**
- Centralized logging with **CloudWatch**

---

## 🔄 CI/CD Workflow

1. Code pushed to GitHub  
2. CodeBuild triggered using `buildspec.yaml`  
3. Frontend assets deployed to S3  
4. Lambda artifacts packaged  
5. Infrastructure updated using Terraform  
6. CloudFront serves updated content globally  

---

## 🔐 Security Best Practices

- IAM roles follow **least-privilege access**
- No secrets or credentials stored in code
- HTTPS enforced via CloudFront
- Serverless design minimizes attack surface
- DynamoDB and SQS use AWS-managed encryption

---

## 💰 Cost Optimization

- DynamoDB On-Demand billing
- No NAT Gateway or VPC-attached Lambdas
- Serverless services scale to zero when idle
- Infrastructure can be destroyed cleanly after demos

---

## 🧪 What This Project Demonstrates

- Real-world AWS serverless architecture
- Practical DevOps automation
- Infrastructure as Code with Terraform
- CI/CD pipeline integration
- Clean repository organization
- Production-style cloud engineering skills

---

## 🧹 Cleanup / Teardown

To avoid unnecessary AWS charges:

```bash
terraform destroy
```

👤 Author

Piyush Sharma

Cloud | DevOps | AWS | Linux | Networking
