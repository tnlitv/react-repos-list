.PHONY: dev test prod help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:  ## Run a development environment
	@docker-compose up --build

test: ## Run the test suite
	@docker-compose -f docker-compose.test.yml run --rm repos-list-test

prod: ## Run a production environment
	@docker-compose -f docker-compose.prod.yml up --build
