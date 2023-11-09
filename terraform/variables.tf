variable "vercel_api_token" {
  description = "Full-Access Vercel API token obtained from https://vercel.com/account/tokens."
  type        = string
  sensitive   = true
  nullable    = false
}

variable "planetscale_organisation" {
  description = "The name of the planetscale organisation to create the db in"
  type        = string
  default     = "alan-chodyniecki"
}


variable "planetscale_service_token_id" {
  description = "Id of Planetscale Service Token"
  type        = string
  sensitive   = true
  nullable    = false
}

variable "planetscale_service_token" {
  description = "Planetscale Service Token"
  type        = string
  sensitive   = true
  nullable    = false
}

variable "github_repository_name" {
  description = "The name of the GitHub repository"
  type        = string
  nullable    = false
}

