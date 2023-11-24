# Setup for development

## dotnet tools

The project uses a few dotnet tools, make sure to install them in your machine as follows:

    dotnet tool restore


## Git configuration


### Consistent line endings

On Windows, you typically want to convert LF to CRLF when checking out code and convert back to LF when committing:

```bash
git config --global core.autocrlf true
```

On Linux or macOS, you can configure Git to checkout as-is and commit LF:
bash

```powershell
git config --global core.autocrlf input
```
