# 📦 DevOps-Project-005  

<img width="2956" height="1108" alt="image" src="https://github.com/user-attachments/assets/03ec738a-eab5-407d-af15-84e5ae06e07d" />

## AWS Secrets Access Monitoring & Alerting

---

## ⚡ 30-Second Summary

This project demonstrates how to **detect and alert on access to sensitive information in AWS** using native security and observability services.

Whenever a secret stored in **AWS Secrets Manager** is accessed, the system automatically:

<img width="2084" height="362" alt="image" src="https://github.com/user-attachments/assets/1f1fe0eb-aee4-4123-ba9d-bd7e3076f162" />


- 📜 Logs the activity via **AWS CloudTrail**
- 🔎 Filters the event using **Amazon CloudWatch Logs**
- 🚨 Triggers a **CloudWatch Alarm**
- 📩 Sends a **real-time email alert** via **Amazon SNS**

> This mirrors how production AWS environments monitor **credential access**, **insider threats**, and **security incidents**.

---

## 🎯 Why This Project Matters

Access to secrets such as **API keys**, **database passwords**, and **application credentials** is one of the **highest-risk actions** in any cloud environment.

This project demonstrates skills critical for roles such as:

- DevOps Engineer  
- Cloud Engineer  
- Security Engineer  
- Site Reliability Engineer (SRE)  

> 🔐 You’re not just learning AWS services — you’re building a **real security control**.

---

## 🧱 Architecture Overview

User / IAM Principal
│
▼
AWS Secrets Manager (Secret Access)
│
▼
AWS CloudTrail (Management Event Logged)
│
▼
CloudWatch Logs + Metric Filter
│
▼
CloudWatch Alarm
│
▼
SNS Topic → Email Notification


---

## 🛠️ Services Used

| Service | Purpose |
|------|--------|
| AWS Secrets Manager | Secure storage of sensitive data |
| AWS CloudTrail | Logs management API activity |
| Amazon CloudWatch | Log filtering, metrics, and alarms |
| Amazon SNS | Real-time email notifications |

---

## 🧪 Project Stages & Implementation

### 🟢 Stage 1: Secret Creation & Logging

#### 🔑 Step 1: Create a Secret
- Created a secret named `Secretinfo`
- Stored a dummy password (demo only)
- Secret type: API keys and application secrets

<img width="2934" height="1366" alt="image" src="https://github.com/user-attachments/assets/1c75dd5a-1ebc-4e76-9d0f-4a7e428dfd62" />


<img width="2896" height="554" alt="image" src="https://github.com/user-attachments/assets/db6465f9-d5c7-4772-af83-575bdaff6701" />

> In real environments, this would store database credentials, OAuth tokens, or production secrets.

---

#### 🏞️ Step 2: Enable CloudTrail
- Created a **multi-region trail**
- Enabled **Management Events**
- Enabled both **Read** and **Write** API activity
- Configured CloudTrail to send logs to **CloudWatch Logs**

<img width="2940" height="1552" alt="image" src="https://github.com/user-attachments/assets/a99b9cf5-c8db-41e2-b34b-3a56682f79e0" />


**IAM role created automatically:**


---

#### 😈 Step 3: Verify Logging
- Manually accessed the secret
- Confirmed:
  - CloudTrail recorded the event
  - Log entry appeared in CloudWatch Logs

---

### 🟡 Stage 2: Monitoring & Alerting

#### 🔎 Step 4: CloudWatch Metric Filter
Created a metric filter that detects:
- `GetSecretValue` API calls
- Access to the specific secret name

Matching log events are converted into **CloudWatch metrics**.

---

#### 🔔 Step 5: Alarm & Notification
- Created a **CloudWatch Alarm**
- Alarm triggers on **any secret access**
- Alarm publishes to an **SNS topic**
- Email endpoint subscribed to SNS

---

#### 💌 Step 6: Testing & Validation
- Accessed the secret again
- Verified:
  - CloudTrail logged the event
  - CloudWatch metric incremented
  - Alarm triggered
  - Email alert received

✅ **End-to-end security monitoring confirmed**

<img width="2100" height="772" alt="image" src="https://github.com/user-attachments/assets/d5cc2ce9-bbdc-49f7-83e5-b9c0dd5c0b4a" />


---

## 📚 Key Concepts Demonstrated

<details>
<summary><strong>🔍 What is CloudTrail?</strong></summary>

CloudTrail records **who did what, when, and from where** in your AWS account.  
It is essential for security audits, incident response, and compliance.

</details>

<details>
<summary><strong>📂 CloudTrail Event Types</strong></summary>

- **Management Events** ✅ (used here)  
- Data Events  
- Insights Events  
- Network Activity Events  

Secret access is logged as a **Management Event**, which AWS tracks by default.

</details>

<details>
<summary><strong>📖 Read vs Write API Events</strong></summary>

- **Read** → Viewing resources  
- **Write** → Creating, modifying, or accessing sensitive resources  

Accessing secrets is logged as a **Write event** due to its security impact.

</details>

---

## 🚀 Real-World Use Cases

- Detect leaked or compromised IAM credentials
- Monitor insider access to production secrets
- Meet compliance requirements (SOC2, ISO 27001, PCI-DSS)
- Improve incident response visibility

---

## 🧠 What I Learned

- How AWS logs sensitive access events internally
- How to convert logs into **actionable alerts**
- How real security monitoring pipelines are built
- Why **visibility is as important as prevention**

---

## 🧠 Key Takeaway

> This project demonstrates how security teams **detect, alert, and respond** to sensitive access events using AWS-native tooling — without third-party systems.



