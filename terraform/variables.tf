variable "vercel_api_token" {
  description = "Full-Access Vercel API token obtained from https://vercel.com/account/tokens."
  type        =   string
  sensitive   = true
  nullable    = false
}

variable "vercel_protected_deployment_password" {
  description = "Password required to view protected deployments to Vercel"
  type        = string
  sensitive   = true
  nullable    = false
}

variable "github_repository_name" {
  description = "The name of the GitHub repository"
  type        = string
  nullable    = false
}
