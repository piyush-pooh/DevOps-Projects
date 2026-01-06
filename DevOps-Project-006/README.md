# 📦 DevOps-Project-006  

# **VPC Traffic Flow and Security**

<img width="1522" height="806" alt="image" src="https://github.com/user-attachments/assets/548f4a49-7731-479b-87e9-d5dd37d6cf1a" />

## AWS VPC Networking: Route Tables, Security Groups & Network ACLs

---

## ⚡ 30-Second Summary

This project focuses on understanding and implementing **core AWS VPC networking components**, including **route tables**, **security groups**, and **network ACLs**, to control traffic flow within a Virtual Private Cloud.

The goal was not just to configure networking resources, but to **deeply understand how traffic moves** from the internet to an EC2 instance and back — and how AWS enforces security at multiple layers.

---

## 🎯 Why This Project Matters

Networking is the foundation of every cloud workload.

Misconfigured networking is one of the **top causes of security breaches and outages** in cloud environments.  
This project builds strong fundamentals required for roles like:

- DevOps Engineer  
- Cloud Engineer  
- Network Engineer  
- Site Reliability Engineer (SRE)

> 💡 Understanding VPC networking is a **non-negotiable skill** for production AWS environments.

---

## ☁️ What is Amazon VPC?

**Amazon VPC (Virtual Private Cloud)** provides a **logically isolated, customizable network** inside AWS where you can launch resources such as EC2 instances.

With VPC, you control:
- IP address ranges (CIDR blocks)
- Subnets
- Routing
- Internet access
- Network security

---

## 🧱 How Amazon VPC Was Used in This Project

In this project, I:
- Created a custom VPC with an IPv4 CIDR block
- Associated subnets with route tables
- Connected the VPC to the internet using an **Internet Gateway**
- Controlled traffic using **route tables**, **security groups**, and **network ACLs**

---

## 🗺 Route Tables (Traffic Direction Layer)

### What is a Route Table?

A **route table** is a set of rules (routes) that determine **where network traffic is sent**.

- Every subnet must be associated with a route table
- Route tables decide whether traffic stays inside the VPC or goes to the internet

> Think of a route table as a **GPS system** for your subnet traffic.

---

### Destination vs Target

| Field | Meaning |
|---|---|
| **Destination** | Final IP address range traffic wants to reach |
| **Target** | The next hop (gateway, interface, or local VPC) |

Example:
- `0.0.0.0/0` → Internet Gateway  
- `10.0.0.0/16` → Local VPC traffic  

`0.0.0.0/0` means **all IPv4 addresses**, making it the default route.

---

### Why a Route Table Makes a Subnet Public

<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/8e3e2222-c11e-4c07-9d8b-2782a49027c3" />


A subnet becomes **public** when:
- It has a route table
- The route table contains `0.0.0.0/0 → Internet Gateway`

<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/6e1bde83-5ca2-412c-96dd-9fd59e8570ff" />


Without this rule, traffic **cannot leave the VPC**.

---

## 🔐 Security Groups (Instance-Level Firewall)

### What is a Security Group?

Security groups act as **virtual firewalls** for AWS resources.

Key characteristics:
- Attached to **resources**, not subnets
- **Stateful** (return traffic is automatically allowed)
- Only allow rules (no deny rules)

---

### Inbound vs Outbound Rules

| Rule Type | Purpose |
|---|---|
| **Inbound** | Controls traffic entering a resource |
| **Outbound** | Controls traffic leaving a resource |

Examples:
- Inbound: HTTP traffic to a web server
- Outbound: Server calling external APIs

> By default, AWS allows **all outbound traffic**.

---

### Protocols & Ports (Quick Reference)

| Protocol | Purpose | Port |
|---|---|---|
| HTTP | Web traffic | 80 |
| HTTPS | Secure web traffic | 443 |
| SSH | Secure server access | 22 |
| FTP | File transfer | 21 |
| SMTP | Email | 25 |

---

### Why AWS Warns About `0.0.0.0/0`

<img width="713" height="1296" alt="image" src="https://github.com/user-attachments/assets/8313a5bd-5977-49a1-a343-78fc182f06e7" />

Allowing traffic from `0.0.0.0/0` means **any IP can access your resource**.

- ⚠️ Risky in private environments
- ✅ Required for **public websites**

Security is always about **context**, not absolutes.

<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/9a20cc00-400d-4c30-a9de-f81a7d189421" />

---

## 🚦 Network ACLs (Subnet-Level Firewall)

### What is a Network ACL?

<img width="1618" height="1530" alt="image" src="https://github.com/user-attachments/assets/d3cb4e54-e32d-44ca-90a3-674c35a54c88" />


Network ACLs control traffic **at the subnet level**.

Key characteristics:
- **Stateless**
- Supports **allow and deny** rules
- Rules are evaluated **in order (by rule number)**

> Think of Network ACLs as **traffic police** at subnet entry and exit points.

---

### Security Groups vs Network ACLs

| Feature | Security Group | Network ACL |
|---|---|---|
| Scope | Resource | Subnet |
| Stateful | Yes | No |
| Allow/Deny | Allow only | Allow + Deny |
| Rule Order | All evaluated | Numerical order |

Using both provides **defense in depth**.

---

### Default vs Custom Network ACLs

- **Default ACL**:
  - Allows all inbound and outbound traffic
- **Custom ACL**:
  - Denies all traffic by default
  - Requires explicit allow rules

---

### Rule Numbers (Why 100?)

Lower rule numbers are evaluated first.

Starting at **100** gives room to:
- Insert more specific rules later
- Override broader rules safely

---

### Subnet Associations

- Only **one Network ACL** can be associated with a subnet at a time
- Associating a new ACL **replaces** the default ACL

---

## 🔄 End-to-End Traffic Flow (Public Web Server)

1. Client sends request from the internet  
2. Internet Gateway receives traffic  
3. Route Table directs traffic to subnet  
4. Network ACL evaluates inbound rules  
5. Security Group checks inbound rules  
6. EC2 instance processes the request  
7. Response flows back through the same layers  

This layered model ensures **multiple security checkpoints**.

---

## 🧠 Key Learnings

- How AWS routes traffic internally
- Why public subnets require specific routing rules
- Difference between **stateful** and **stateless** firewalls
- Why layered security is critical in cloud networking
- How small misconfigurations can expose resources publicly

---

## 🧠 Final Takeaway

> Cloud networking is not about memorizing services —  
> it’s about understanding **how traffic flows**, **where it can be blocked**,  
> and **how security is enforced at every layer**.

---

## 💭 Reflection

- Focus on growth, not comparison  
- Stay consistent, even when progress feels invisible  
- Trust the process — skills compound over time  

> I know I will one day sit in places I once dreamed of —  
> and even in places I never imagined.

---

## ✅ Project Status

- ✔ VPC configured
- ✔ Routing validated
- ✔ Security layers understood
- ✔ Portfolio-ready documentation




