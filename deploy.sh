printf "Enabling Cloud Build APIs...\n"
gcloud services enable cloudbuild.googleapis.com
printf "Completed.\n\n"

printf "Building vgr Container...\n"
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/vgr:1.0.0 .
printf "Completed.\n\n"

printf "Deploying vgr To GKE Cluster...\n"
kubectl create deployment vgr --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/vgr:1.0.0
kubectl expose deployment vgr --type=LoadBalancer --port 80 --target-port 8080
printf "Completed.\n\n"

printf "Please run the following command to find the IP address for the vgr service: kubectl get service vgr\n\n"

printf "Deployment completed successfully!\n"