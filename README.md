# Increment Smart Contract

A simple Solidity smart contract that allows incrementing a counter and retrieving its current value.

## Getting Started

### Clone this repository

```bash
git clone https://github.com/vinsa61/increment-sc.git"
```

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 22.X.X or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

### Install dependencies

```bash
npm install
```

## Usage

### 1. Compile the smart contract

```bash
npx hardhat compile
```

### 2. Run the node server

Open a terminal and start the server using this command:

```bash
npx hardhat node
```

<img width="756" height="372" alt="Screenshot 2025-07-16 171937" src="https://github.com/user-attachments/assets/ea1f6c7e-a947-4e82-a907-f6e3754dbf23" />
<br/>The server will start at http://127.0.0.1:8545/ and display a list of accounts.
<br/><strong>Notes: Keep the terminal open to keep the server running.</strong>

### 3. Deploy the smart contract to local server

```bash
npx hardhat run scripts/deploy.ts
```

### 4. Run the test scripts

Open up another terminal and run the test scripts using this command:

```bash
npm hardhat test
```
