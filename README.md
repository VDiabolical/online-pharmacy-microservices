# Online Pharmacy Microservices App

A cloud-native microservices project for an online pharmacy, built using:

- Node.js for backend logic
- Docker for containerization
- AWS ECS for deployment
- Terraform for infrastructure as code

## ✅ Microservices

- Medicine Service (done)
- User Service (coming)
- Order Service (coming)
- Payment Service (coming)
- Prescription Service (coming)

## 🧪 How to run the medicine service

cd medicine-service
npm install
node index.js

## 🐳 Run with Docker

cd medicine-service
docker build -t medicine-service .
docker run -p 3000:3000 medicine-service

## ☁️ AWS ECR

The `medicine-service` Docker image is hosted on AWS ECR:
aws ecr create-repository --repository-name medicine-service --region us-east-1
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag medicine-service:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/medicine-service:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/medicine-service:latest
