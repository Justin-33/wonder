# Use a base image with Python pre-installed
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

##
RUN pip uninstall decouple

#
RUN pip install python-decouple

#
RUN pip install pymysql

# Copy the requirements file to the working directory
COPY requirements.txt .
# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt


ENV DATABASE_USER=root
ENV DATABASE_PASSWORD=examplepassword
ENV DATABASE_HOST=db
ENV DATABASE_PORT=3306
ENV PORT=5000


# Copy the application code to the container
COPY . .

# Expose the desired port
EXPOSE 5000


# Run the application
CMD ["python3", "app.py"]
