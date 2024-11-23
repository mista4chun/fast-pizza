# Project Requirements from the Business

The business requirements of the project are as follows:

1. **Application Overview**
   - A very simple application where users can order one or more pizzas from a menu.

2. **User Account**
   - Requires **no user accounts** and no login; users just input their names before using the app.

3. **Pizza Menu**
   - The pizza menu can change, so it should be **loaded from an API**. 

4. **Cart Functionality**
   - Users can add multiple pizzas to a cart before ordering.

5. **Order Details**
   - Ordering requires just the **user's name, phone number, and address**.
   - If possible, **GPS location** should also be provided to make delivery easier.

6. **Priority Orders**
   - Users can mark their order as **"priority"** for an additional **20% of the cart price**.

7. **Order Submission**
   - Orders are made by **sending a POST request** with the order data (user data + selected pizzas) to the API.

8. **Payment**
   - Payments are made **on delivery**, so **no payment processing** is necessary in the app.

9. **Order Identification**
   - Each order will get a **unique ID** that should be displayed so the user can later look up their order based on the ID.
   - Users should also be able to **mark their order as "priority"** even after it has been placed.

# Application Structure

## Feature Categories
1. **User**
2. **Menu**
3. **Cart**
4. **Order**

---

## Necessary Pages
1. **Homepage**
   - Path: `/`
2. **Pizza Menu**
   - Path: `/menu`
3. **Cart**
   - Path: `/cart`
