# Contact Form Management System

The Contact Form Management System is a web application built using React.js, Node.js, MongoDB that enables users to submit contact forms, manage messages, and perform administrative tasks. This project focuses on various aspects of web development, including authentication, authorization, validation, backend-frontend integration, user feedback, and data visualization through charts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Additional Considerations](#additional-considerations)
- [Contributing](#contributing)

## Features

- User authentication and authorization based on roles. (admin full permission on app - reader only read-only messages) 
- Login page for users with username and password.
- User profile dropdown menu with logout functionality.
- Responsive design for various screen sizes.
- Interactive menu for users with different roles (admin, reader).
- Contact form page with form validation and country dropdown.
- Messages page displaying contact form messages (admin and reader only).
- Message details view, delete, and mark as read functionality.
- Users page for admins to manage users' details.
- Reports page with data visualization through charts.
- Snack bars for error and success messages.
- Support for dark and light themes.
- Support for English and Turkish languages.
- Pagination and sorting options for message listing.
- WebSocket support for real-time notifications.

## Getting Started

### Backend Setup

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Run `npm run start` to start the backend server on port 5165.
5. Access the backend at http://localhost:5165/. You should see "Hello, World!".

### Frontend Setup

1. Clone the repository to your local machine.
2. Navigate to the `frontend` directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Access the frontend at http://localhost:3000/.

## Usage

1. **Login**: Users can log in with their username and password on the login page. (For admin (admin:admin), for reader (reader1:reader1pass)
2. **Home**: After logging in, users are redirected to the contact form page.
3. **Navigation Menu**: The navigation menu displays links based on the user's role (admin, reader).
4. **User Dropdown**: Clicking the user's photo displays a dropdown menu with user information and logout.
5. **Contact Form**: Fill out the form fields (name, message, gender, country) and submit.
6. **Messages Page**: Admin and reader users can view and interact with messages.
7. **Message Details**: Clicking on a message displays its details, mark as read, and delete options.
8. **Users Page**: Admin users can manage users, add new users, update user details.
9. **Reports Page**: Admin users can view charts representing message statistics.
10. **Error Handling**: Errors and success messages are displayed using snack bars.

## Screenshots

### localhost:3000/contact 
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/29c14dbd-d112-421d-8120-87920039f4b3)

### localhost:3000/login (admin admin - reader1 reader1pass)
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/fd1eb65f-11e4-4909-a4d5-fec49b1e30fe)

### localhost:3000/messages
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/d2f92c56-af51-4a2b-8fef-4c66ded1571d)

### localhost:3000/messages/1
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/e00002b8-730d-40d8-8630-279af60977f2)

### localhost:3000/messagesPaginated also can be seen infinite scroll via IS 
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/eb14f774-f5e8-471f-b00e-d128e1e76780)

### localhost:3000/users
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/d45d1ad2-e035-4f67-9fd8-6694d064d510)

### localhost:3000/users/1
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/f5894d7e-5428-463a-8ac6-0a5d70b0feb7)

### localhost:3000/reports
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/10d7a7a5-fee7-4a27-bff1-6e245dd02d02)

### Dropdown 
![image](https://github.com/bagdadiemre/contact-form-management-system_react-nodejs/assets/54630643/b3932e14-e1ce-4715-9baa-0d957818e73b)


## Technologies Used

- React.js
- Node.js
- MongoDB
- JWT (JSON Web Tokens) for authentication
- Charting libraries for data visualization (e.g., Chart.js)
- UI framework (e.g., Material-UI)
- WebSocket for real-time notifications

## Additional Considerations

- Support for themes (dark, light).
- Support for multiple languages (en, tr).
- Pagination and sorting for message listing.
- Infinite scrolling for message pagination.
- Real-time notifications using WebSocket.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to create pull requests or raise issues in the repository.
