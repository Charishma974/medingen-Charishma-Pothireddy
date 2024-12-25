# Project Name

## Overview
This project is a full-stack web application with a **backend** built using Python (Flask) and a **frontend** built using React.js. The database schema is provided as an SQL export file.

## Project Structure

```
backend/
├── app/
│   ├── __init__.py      # Initializes the Flask application
│   ├── auth.py          # Handles authentication logic
│   ├── database.py      # Database connection and configuration
│   ├── models.py        # Database models
│   ├── routes.py        # API routes
├── .env                # Environment variables
├── app.py              # Main entry point for the backend
├── requirements.txt    # Python dependencies

frontend/
├── src/
│   ├── component/       # React components
├── App.js              # Main React application
├── index.js            # Entry point for React app

database_export.sql     # Database schema export
```

---

## Prerequisites

Ensure you have the following installed:
- **Python 3.x**
- **Node.js and npm**
- **MySQL Database**

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the `.env` file with required environment variables (e.g., database credentials).

5. Run the backend server:
   ```bash
   python app.py
   ```

The backend will start at `http://localhost:5000`.

---

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`.

---

## Database Setup

1. Create a MySQL database.
2. Import the `database_export.sql` file:
   ```sql
   SOURCE /path/to/database_export.sql;
   ```

3. Update your `.env` file with database credentials.

---

## Running the Project

1. Start the backend server.
2. Start the frontend server.
3. Access the application at `http://localhost:3000`.

---

## API Documentation
API endpoints are defined in `backend/app/routes.py`. Use tools like **Postman** or **cURL** for testing.

---

## Environment Variables
Define these in your `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
SECRET_KEY=your_secret_key
```

---

## Contributing
Feel free to fork this repository and submit pull requests.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any questions or feedback, please contact cherryspl09@gmail.com.

