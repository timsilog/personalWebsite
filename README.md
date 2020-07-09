# personalWebsite
My personal website

To build image:
`docker build -t <SOME_TAG> .`

To see current images:
`docker images`

To tag newly built image:
`docker tag <IMAGE_ID> timsilog/personalwebsite_client:latest`

Push to dockerhub:
`docker push timsilog/personalwebsite_client`

Pull down with:
`docker pull timsilog/personalwebsite_client`

Copy the IMAGE ID to clipboard and paste in the command below.

To run:
Development:
`docker run -p 3000:80 IMAGE_ID`
and visit localhost:3000
Production:
`docker run -p 80:80 IMAGE_ID`

Note: Add the -d tag in the docker run command to detach and run in the background.

Clean up:
`docker system prune -a`