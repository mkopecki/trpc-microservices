# ⚡️ Microservice Communication with tRPC

## Introduction

RPC protocols such as gRPC are widely used to provide a typesafe communication layer between microservices.
This project provides a demo on how to use [tRPC](https://github.com/trpc/trpc) to allow fast, lightweight and strongly typed communication between Node.js microservices without the need for protobuf or other interface description languages.

## Prerequisites

- Node 18 - `@trpc/client` requires access to a native implementation of fetch

## Quickstart

**local setup of containerized microservices**

```sh
# build docker images
docker-compose build

# start containers in background
docker-compose up -d
```

**testing inter-service communication**

```sh
cd scripts
yarn test
```
