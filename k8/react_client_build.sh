docker build -t navalta3030/react-client -f ./../Dockerfile ./../ --no-cache

docker push navalta3030/react-client:latest

kubectl apply -f .