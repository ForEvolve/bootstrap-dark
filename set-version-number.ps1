Param(
    [string]$workingDirectory,
    [string]$buildNumber
)

Set-Location $workingDirectory

Write-Output "Starting npm version: $buildNumber"
npm version $buildNumber -git-tag-version false
Write-Output "npm version completed"