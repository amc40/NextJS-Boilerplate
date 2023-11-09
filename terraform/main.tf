terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
    planetscale = {
      source  = "koslib/planetscale"
      version = "0.7.2"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

provider "planetscale" {
  service_token_id = var.planetscale_service_token_id
  service_token    = var.planetscale_service_token
}

module "vercel_project_instance" {
  source                 = "./modules/vercel-project"
  github_repository_name = var.github_repository_name
}

module "planetscale_database_instance" {
  source                   = "./modules/planetscale-db"
  github_repository_name   = var.github_repository_name
  planetscale_organisation = var.planetscale_organisation
}

