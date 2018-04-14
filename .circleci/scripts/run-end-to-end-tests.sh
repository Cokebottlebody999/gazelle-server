#!/bin/bash

# Run our server
cd ~/gazelle-server

forever start build/server.js &> /dev/null

echo "Gazelle server started"

# Wait for servers to start
IS_UP=1
while [ $IS_UP -ne 0 ]
do
  sleep 0.5
  curl -f http://localhost:3000/alive &> /dev/null
  IS_UP=$(echo $?)
done
# Now the server is running
echo "Gazelle server is responding"

# Run display needed for nightmare that we use for E2E tests
sudo Xvfb -ac -screen scrn 1280x2000x24 :9.0 &
SCREEN_PID=$(echo $!)
export DISPLAY=:9.0

echo "Starting test"

npm run test:e2e
EXIT_CODE=$(echo $?)

# Cleanup
echo "Tests finished, starting cleanup"

forever stopall

kill $SCREEN_PID

# We also have to kill the node processes that they spawn
ps -a | grep node | awk '{print $1}' | xargs kill
exit $EXIT_CODE