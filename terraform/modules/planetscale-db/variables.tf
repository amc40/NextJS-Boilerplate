variable "github_repository_name" {
  description = "The name of the GitHub repository"
  type        = string
  nullable    = false
}

variable "planetscale_organisation" {
  description = "The name of the planetscale organisation to create the db in"
  type        = string
  nullable    = false
}
