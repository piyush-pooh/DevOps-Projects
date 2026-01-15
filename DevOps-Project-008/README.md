# 🌐 AWS Networking Fundamentals – VPC, Subnets & Internet Gateway

## 📌 Overview

This project documents the foundational concepts of **AWS Virtual Private Cloud (VPC)**, including subnets, CIDR blocks, IP addressing, Availability Zones, and Internet Gateways.  
It explains **why VPCs exist, how AWS networking works**, and how resources securely communicate within the AWS cloud.

The goal is to build **strong networking fundamentals**, which are critical for roles in **Cloud, DevOps, and Networking Engineering**.

---

## ☁️ What is a VPC?

If an **AWS Region** is a *country*, a **Virtual Private Cloud (VPC)** is your *own private city* inside that country.

A VPC is a **secure, isolated virtual network** in AWS where you control:
- IP address ranges
- Subnets
- Routing
- Security boundaries

It allows resources like **EC2 instances, databases, and services** to communicate in a controlled and private environment.

---

## 🤔 Why Do VPCs Matter?

Without VPCs, all AWS resources would exist in **one giant shared network**, with no isolation or privacy.

VPCs provide:
- 🔐 Network isolation
- 🧭 Controlled routing
- 🏗 Logical resource organization
- 🚫 Reduced exposure to the public internet

### Analogy
Imagine if every Google Drive file from every user existed in **one folder with no privacy or subfolders**.  
Managing and securing resources without VPCs would feel exactly like that.

---

## ☁️ Default VPC

When an AWS account is created, AWS automatically provisions a **default VPC**.

### Why does AWS do this?
- Enables users to launch EC2 instances immediately
- Removes the need to understand networking on Day 1

### Default VPC includes:
- A `/16` CIDR block
- Subnets in each Availability Zone
- An Internet Gateway
- Preconfigured routing

While useful for beginners, **custom VPCs** are recommended for production workloads with stricter security and networking requirements.

---

## 🌐 Can AWS Services Exist Without a VPC?

Yes, **some services do not require a VPC**, such as:
- Amazon S3
- AWS Lambda (outside VPC mode)
- CloudFront

However, services like:
- Amazon EC2
- RDS
- ElastiCache

**require a VPC** to operate securely.

---

## 🌍 Is a VPC the Internet?

No.

- The **internet** is a public, open network
- A **VPC** is private and isolated by default

AWS exists within **cyberspace**, which includes:
- Public internet
- Private corporate networks
- Cloud infrastructures

A VPC can be connected to the internet using an **Internet Gateway**, but it is not the internet itself.

---

## 📡 IP Addresses & IPv4

An **IP address** is like a street address for resources inside a VPC.  
AWS primarily uses **IPv4**, written as:

