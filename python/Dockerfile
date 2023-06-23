# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's source code
COPY . .

# Set the Flask app environment variable
ENV FLASK_APP=your_app.py

# Set the Flask environment to production
ENV FLASK_ENV=production

# Expose the port on which your Flask app runs
EXPOSE 5000

# Specify the command to run your application
CMD ["flask", "run", "--host=0.0.0.0"]
