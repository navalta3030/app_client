docker build -t navalta3030/react-client -f --no-cache

docker push navalta3030/react-client:latest

kubectl apply -f .