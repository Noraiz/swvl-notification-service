# swvl-notification-service

## Installation

- `docker-compose up -d --build`

### Services

docker-compose will spin the following services

- `api` is the express server running at port `3001`
- `mongodb` is the database service running at `27017`
- `rabbitmq` services is running at `5672` responsible for handling notification request and limit the rate of requests to providers (SMS, Email, Push notification)

### Postman collection

Postman collection for the service is provided with the repo. Run the requests from the `postman collection` in following order:

- create-user
- create-group (optional)
- create-notification
