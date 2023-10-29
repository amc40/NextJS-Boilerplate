terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

module "vercel_project_custom" {
  source                               = "./modules/vercel-project"
  github_repository_name               = var.github_repository_name
  vercel_protected_deployment_password = var.vercel_protected_deployment_password
}

# resource "vercel_project" "vercel_project_with_github" {
#   name      = lower(var.github_repository_name)
#   framework = "nextjs"
#   git_repository = {
#     type = "github"
#     repo = "amc40/${var.github_repository_name}"
#   }
#   serverless_function_region = "lhr1"
#   password_protection = {
#     password = var.vercel_protected_deployment_password
#     # Remove to release
#     protect_production = true
#   }
# }


