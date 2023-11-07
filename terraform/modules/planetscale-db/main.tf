terraform {
  required_providers {
    planetscale = {
      source  = "koslib/planetscale"
      version = "0.5"
    }
  }
}

resource "planetscale_database" "planetscale_database_instance" {
  name         = var.github_repository_name
  organisation = var.planetscale_organisation
  region       = "eu-west"
}
