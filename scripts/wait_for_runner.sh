#!/bin/bash

until [ $(curl -LI localhost:5000/status -o /dev/null -w '%{http_code}\n' -s) == "200" ]
do
    echo 'Runner is not ready yet'
    sleep 5
done

echo 'Runner is ready'