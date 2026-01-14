# 📦 DevOps-Project-004

## Multi-Cloud Data Transfer: AWS S3 → Google Cloud Storage (GCS)


<img width="2108" height="1180" alt="image" src="https://github.com/user-attachments/assets/a2e37b4d-ed5d-4752-aaec-be74c104c71b" />

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

<img width="1902" height="1000" alt="image" src="https://github.com/user-attachments/assets/0e119a9f-d8c5-4e7a-9fc6-0d9389d5cf02" />


---

### 2️⃣ Destination Setup – Google Cloud

* Created a **GCP project**
* Enabled **Cloud Storage** and **Storage Transfer Service**
* Created a **GCS bucket** as the backup destination

<img width="2102" height="864" alt="image" src="https://github.com/user-attachments/assets/3367c03c-01d9-409a-8df4-671c358590f4" />


---

### 3️⃣ Secure Identity Federation (Core Concept)

* Created a **custom AWS IAM role**
* Configured a **trust policy** allowing GCP federation
* Used `sts:AssumeRoleWithWebIdentity`
* Attached **AmazonS3ReadOnlyAccess**

<img width="2708" height="850" alt="image" src="https://github.com/user-attachments/assets/415e7efe-8d15-494b-b035-d02e9e1799b6" />

<img width="2092" height="1132" alt="image" src="https://github.com/user-attachments/assets/e3d33892-6fa0-4d91-8253-a1d457ac5067" />

> 🔐 **Why federation?**
> Temporary credentials are more secure than static access keys and automatically expire.

---

### 4️⃣ Storage Transfer Configuration

* Source: **Amazon S3 bucket**
* Destination: **GCS bucket**
* Scheduling mode: **Batch**
* Authentication: **IAM Role ARN**

<img width="1904" height="1026" alt="image" src="https://github.com/user-attachments/assets/0eeef1aa-d2e0-4f38-b5ff-4bbbf09b95c6" />


Optional features reviewed:

* Prefix filtering
* Manifest-based selective transfer
* Overwrite and deletion policies

<img width="1020" height="1948" alt="image" src="https://github.com/user-attachments/assets/44ec0d99-7e8e-41d2-9740-92ebb57f8ef2" />


---

### 5️⃣ Transfer Execution & Validation

* Ran the transfer job
* Verified successful completion
* Confirmed file availability in GCS
* Ensured data integrity and permissions


<img width="2304" height="1464" alt="image" src="https://github.com/user-attachments/assets/6b0e92ed-6b4d-4d80-9d62-fa03d2282d43" />

<img width="2048" height="1066" alt="image" src="https://github.com/user-attachments/assets/eac95396-961f-44ca-a9a3-711a5219ef68" />

<img width="2304" height="1464" alt="image" src="https://github.com/user-attachments/assets/802d7012-ed28-4dc9-ac71-289d78676edf" />

<img width="2304" height="1464" alt="image" src="https://github.com/user-attachments/assets/7b06c3b9-e937-45eb-8b25-f1a823cd7e93" />

<img width="1704" height="1334" alt="image" src="https://github.com/user-attachments/assets/6ceccd09-2f59-4138-84ba-2ebe79142731" />

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
~~~
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "accounts.google.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "accounts.google.com:sub": "SUBJECT_ID"
        }
      }
    }
  ]
}
~~~


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
