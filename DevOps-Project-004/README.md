# 📦 DevOps-Project-004

## Multi-Cloud Data Transfer: AWS S3 → Google Cloud Storage (GCS)

---

## ⚡ 30-Second Summary

This project demonstrates how to design and implement a **secure multi-cloud data transfer architecture** by synchronizing data from **Amazon S3** to **Google Cloud Storage (GCS)**.

The solution uses **Google Cloud Storage Transfer Service** with **AWS IAM identity federation**, enabling GCP to securely access AWS resources using **temporary credentials** — without sharing long-lived access keys.

> 🎯 **Why it matters:**
> Multi-cloud architectures help organizations improve **resilience**, avoid **vendor lock-in**, and build **cost-optimized backup strategies**.

---

## 🎯 Project Goals

* Implement a **multi-cloud storage backup solution**
* Secure cross-cloud access using **IAM federation**
* Transfer data **without downloading it locally**
* Apply **least-privilege security principles**

---

## 🏗 Architecture Overview

```
AWS S3 (Source Bucket)
        │
        ▼
GCP Storage Transfer Service
        │
        ▼
Google Cloud Storage (Destination Bucket)
```

**Transfer Mode:** Batch-based
**Security Model:** Identity Federation (STS)

---

## 🛠 Technology Stack

| Category        | Services                                |
| --------------- | --------------------------------------- |
| Cloud Providers | AWS, Google Cloud Platform              |
| AWS Services    | S3, IAM, STS                            |
| GCP Services    | Cloud Storage, Storage Transfer Service |
| Security        | IAM Roles, Trust Policies               |
| Transfer Type   | Batch Transfer                          |

---

## 🧩 Implementation Breakdown

### 1️⃣ Source Setup – AWS S3

* Created an **Amazon S3 bucket** as the source storage
* Uploaded sample files to simulate production data
* Ensured bucket accessibility for transfer services

---

### 2️⃣ Destination Setup – Google Cloud

* Created a **GCP project**
* Enabled **Cloud Storage** and **Storage Transfer Service**
* Created a **GCS bucket** as the backup destination

---

### 3️⃣ Secure Identity Federation (Core Concept)

* Created a **custom AWS IAM role**
* Configured a **trust policy** allowing GCP federation
* Used `sts:AssumeRoleWithWebIdentity`
* Attached **AmazonS3ReadOnlyAccess**

> 🔐 **Why federation?**
> Temporary credentials are more secure than static access keys and automatically expire.

---

### 4️⃣ Storage Transfer Configuration

* Source: **Amazon S3 bucket**
* Destination: **GCS bucket**
* Scheduling mode: **Batch**
* Authentication: **IAM Role ARN**

Optional features reviewed:

* Prefix filtering
* Manifest-based selective transfer
* Overwrite and deletion policies

---

### 5️⃣ Transfer Execution & Validation

* Ran the transfer job
* Verified successful completion
* Confirmed file availability in GCS
* Ensured data integrity and permissions

---

## 🔐 Security Highlights

* ❌ No AWS access keys shared
* ✅ Temporary STS credentials
* ✅ Least-privilege IAM policies
* ✅ Public access prevention enabled
* ✅ Cloud-native authentication

---

## 💡 Key Learnings

* How **multi-cloud storage architectures** work in practice
* Secure cross-cloud authentication using **identity federation**
* Designing vendor-agnostic backup pipelines
* Managing large-scale data transfers safely

---

## 🌍 Real-World Use Cases

* Disaster recovery and backups
* Multi-cloud compliance strategies
* Cross-cloud analytics pipelines
* Vendor-neutral data replication

---

## 🚀 Future Enhancements

* Event-driven transfers using S3 notifications
* Infrastructure as Code with Terraform
* Encryption with customer-managed keys
* Monitoring with CloudWatch & Cloud Logging

---

## ✅ Project Status

* ✔ Architecture implemented
* ✔ Transfer tested successfully
* ✔ Security best practices applied
* ✔ Portfolio-ready documentation

---

## 📌 Key Takeaway

> This project demonstrates **real-world multi-cloud engineering**, not just service usage — focusing on **security, scalability, and cloud-agnostic design**.
