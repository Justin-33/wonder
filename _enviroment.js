const { execSync } = require('child_process');

function startEnvironment() {
  execSync('docker-compose up --build', { stdio: 'inherit' });
}

function destroyEnvironment() {
  execSync('docker-compose down', { stdio: 'inherit' });
}


const command = process.argv[2];

if (command === 'start') {
  startEnvironment();
} else if (command === 'destroy') {
  destroyEnvironment();
} else {
  console.log('Invalid command. Please choose either "start" or "destroy"');
  process.exit(1);
}
