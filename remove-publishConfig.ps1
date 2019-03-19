# Remove the publishConfig property from package.json
# This allows my CI build to override the private default 
# when the time to publish to npmjs comes
$packagePath = 'package.json';
$packageJson = Get-Content $packagePath -Raw | ConvertFrom-Json
$packageJson.PSObject.Properties.Remove('publishConfig');
$packageJson | ConvertTo-Json | Set-Content -Path $packagePath -Force