# Shopping Queue Manangement

## Overview

This is a shopping queue management application that aims to streamline and simplify the process of managing shopping queues. It provides a user-friendly interface for both customers and staff to efficiently handle queue operations, reducing waiting times and enhancing the overall shopping experience.

The application is built using Vite as the development tool and pnpm as the package manager.


## Prerequisites
Before running the application, make sure you have pnpm installed. If you don't have pnpm, you can install it globally using the following command:
```
npm install -g npm
```

## Installation

1. Clone this repository to your local machine.

```
git clone https://github.com/Sulash-Manandhar/Shopping-queue-management.git
cd Shopping-queue-management
```

2. Install the project dependencies using pnpm.
```
pnpm install
```

## Usage
To start the application in development mode, use the following command:

```
pnpm run dev
```

This will launch the application on a development server, and you can access it by navigating to http://127.0.0.1:5173/ in your web browser.

## How it works

The Shopping Queue Management application optimizes the queuing process by intelligently assigning users to checkout stands based on the total number of items in their carts. The system aims to minimize waiting times and ensure efficient utilization of checkout stands. Here's a detailed overview of how the application works:

1. Checkout Stands and Queue Buttons: The application consists of multiple checkout stands, each with a corresponding "Join Queue" button placed above it. Customers can press the "Join Queue" button to add themselves to a checkout stand.

2. Smart User Assignment: When a customer clicks the "Join Queue" button, the application employs an intelligent algorithm to decide which checkout stand to assign the customer to. The algorithm takes into account the total number of items in each stand's queue. It assigns the customer to the checkout stand with the least total number of items in all users' carts.

3. Example Scenario: Let's consider two checkout stands:

- Stand 1: Currently has 2 users with a total of 5 items in their carts.
- Stand 2: Currently has 1 user with a total of 10 items in their cart.

In this scenario, if a new customer joins the queue, the application will assign them to Stand 1, as it has the least total number of items (5) compared to Stand 2 (10).

4. Dynamic Item Reduction: To simulate the checkout process, the application reduces the number of items in a user's cart every 5 seconds. This dynamic reduction mimics the process of customers checking out their items at the checkout counter.

5. User Removal from Stand: When the number of items in a user's cart reaches 1, the application removes the user from the checkout stand. This signifies that the user has completed their shopping and successfully checked out.

6. Real-time Updates: The application provides real-time updates to both customers and staff regarding queue status. Customers can see their position in the queue and receive notifications when their turn is approaching. Staff members can access a dashboard to monitor the status of all checkout stands.

7. Customizable Settings: The application allows for customization of queue parameters and settings, giving store administrators the flexibility to adapt the queuing system to their specific requirements.

With this efficient queuing system, customers can experience reduced waiting times, leading to an improved shopping experience. The staff can efficiently manage checkout stands and ensure smooth operations during busy hours. The dynamic nature of the application ensures that checkout stands are continuously optimized based on the number of items in customers' carts, resulting in an overall efficient shopping queue management system.


## Contributions
Contributions to this project are welcome! If you find any issues or have suggestions for improvement, feel free to open a new issue or submit a pull request.

## License
This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.