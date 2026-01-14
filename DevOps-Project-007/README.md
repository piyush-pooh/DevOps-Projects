# 🚀 AWS Project 008 – Accessing Amazon S3 from a VPC using EC2

## 📌 Project Overview

This project demonstrates how to access **AWS services that do not live inside a VPC** (such as Amazon S3) from an **EC2 instance running inside a custom Amazon VPC**.

You will:

* Create a custom VPC with a public subnet
* Launch an EC2 instance inside the VPC
* Connect to the EC2 instance using **EC2 Instance Connect**
* Use the **AWS CLI** from the EC2 instance to interact with **Amazon S3**

This project helps build a clear mental model of how **VPC‑based resources interact with regional AWS services that exist outside the VPC boundary**.

---

## 🎯 Why This Project Matters

In real‑world AWS architectures, applications rarely exist in isolation.

Resources **inside a VPC** (EC2, ALB, RDS, EKS) frequently interact with services **outside a VPC**, such as:

* Amazon S3
* AWS IAM
* Amazon DynamoDB
* Amazon Route 53

Understanding *how authentication and connectivity works across this boundary* is critical for:

* Cloud Engineers
* DevOps Engineers
* Security Engineers
* SREs

---

## 🧱 Architecture Overview

```
EC2 Instance (Public Subnet)
        │
        ▼
   AWS CLI
        │
        ▼
Amazon S3 (Outside VPC)
```

> ⚠️ Note: No VPC Endpoint is used in this project. All access to S3 happens over the public AWS network.

---

## 🛠 Services Used

* **Amazon VPC** – Custom isolated network
* **Amazon EC2** – Compute inside the VPC
* **Amazon S3** – Object storage (outside the VPC)
* **AWS CLI** – Command‑line interaction with AWS
* **IAM Access Keys** – Authentication (used for learning purposes)

---

## 🧩 Step 1 – Create the VPC

**VPC Configuration:**

* Name: `NextWork`
* IPv4 CIDR: `10.0.0.0/16`
* Availability Zones: `1`
* Public Subnets: `1`
* Private Subnets: `0`
* NAT Gateway: `None`
* VPC Endpoints: `None`

> 💡 VPC Endpoints allow private access to AWS services like S3 without using the public internet. We intentionally skip this to understand the default behavior first.

---

## 🧩 Step 2 – Launch an EC2 Instance

**Instance Configuration:**

* Name: `Instance - NextWork VPC Project`
* AMI: Amazon Linux 2023
* Instance Type: `t2.micro`
* VPC: `NextWork`
* Subnet: Public Subnet
* Auto‑assign Public IPv4: **Enabled**

### 🔐 Security Group

* Name: `SG - NextWork VPC Project`
* Inbound Rules:

  * SSH (default – required for EC2 Instance Connect)

> EC2 Instance Connect requires a **public subnet and public IPv4 address**.

---

## 🧩 Step 3 – Connect Using EC2 Instance Connect

From the EC2 console:

1. Select the instance
2. Click **Connect**
3. Choose **EC2 Instance Connect**
4. Click **Connect** again

You now have terminal access to the EC2 instance 🎉

---

## 🧩 Step 4 – Understanding the AWS CLI

**AWS CLI** allows you to manage AWS services directly from a terminal.

All EC2 instances come with AWS CLI pre‑installed.

Example command:

```bash
aws s3 ls
```

Lists all S3 buckets the instance has access to.

---

## 🧩 Step 5 – Configure AWS Credentials

Initially, running `aws s3 ls` fails because the EC2 instance has **no credentials**.

### Configure AWS CLI:

```bash
aws configure
```

You will provide:

* Access Key ID
* Secret Access Key
* Default Region
* Default Output Format

> ⚠️ For production workloads, **IAM Roles** should be used instead of access keys.

---

## 🔑 What Are Access Keys?

Access keys are credentials used by applications and servers to authenticate with AWS.

They consist of:

* **Access Key ID** – like a username
* **Secret Access Key** – like a password

These credentials allow the EC2 instance to interact with AWS services such as S3.

---

## 🧩 Step 6 – Create and Populate an S3 Bucket

* Create an S3 bucket (example: `piyush-vpc-project`)
* Upload two files manually from the console

---

## 🧩 Step 7 – Access S3 from the EC2 Instance

### List all buckets:

```bash
aws s3 ls
```

### List objects inside a bucket:

```bash
aws s3 ls s3://piyush-vpc-project
```

---

## 🧩 Step 8 – Upload a File from EC2 to S3

### Create a local file:

```bash
sudo touch /tmp/test.txt
```

### Upload file to S3:

```bash
aws s3 cp /tmp/test.txt s3://piyush-vpc-project
```

### Verify upload:

```bash
aws s3 ls s3://piyush-vpc-project
```

Successful output confirms:
✅ EC2 can authenticate to AWS
✅ EC2 can interact with S3

---

## 🧠 Key Learnings

* Amazon S3 does **not** live inside a VPC
* Resources inside a VPC can still access AWS services outside
* Authentication is handled via **IAM credentials**, not networking
* AWS CLI is a powerful tool for automation and cloud management

---

## 🔐 Best Practice Note

While access keys were used for learning:

✅ **Recommended approach:**

* Attach an **IAM Role** to the EC2 instance
* Grant permissions via IAM policies
* Avoid storing credentials on servers

---

## ⚡ 30‑Second Summary

This project demonstrates how an EC2 instance inside a VPC can securely interact with AWS services that exist outside the VPC, such as Amazon S3.

You:

* Built a VPC
* Launched an EC2 instance
* Connected using EC2 Instance Connect
* Used AWS CLI + access keys
* Managed an S3 bucket from inside the VPC

This is a foundational skill for real‑world AWS architectures.

---

✨ *Onward to VPC Endpoints and private connectivity in the next project!*
