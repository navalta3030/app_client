docker build -t navalta3030/react-client -f ./../Dockerfile ./../

docker push navalta3030/react-client

kubectl apply -f k8
kubectl set image deployments/react-client-deployment client=navalta3030/react-client