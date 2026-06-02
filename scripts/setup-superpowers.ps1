# Vincula as skills do Superpowers em .cursor/skills/ (junctions no Windows).
# Execute após clonar o repo: git submodule update --init --recursive
# Depois: .\scripts\setup-superpowers.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$skillsSrc = Join-Path $root "superpowers\skills"
$skillsDst = Join-Path $root ".cursor\skills"

if (-not (Test-Path $skillsSrc)) {
    Write-Error "Submodule superpowers não encontrado. Rode: git submodule update --init --recursive"
}

New-Item -ItemType Directory -Force -Path $skillsDst | Out-Null

Get-ChildItem $skillsSrc -Directory | ForEach-Object {
    $link = Join-Path $skillsDst $_.Name
    $target = $_.FullName

    if (Test-Path $link) {
        Write-Host "OK (já existe): $($_.Name)"
        return
    }

    cmd /c mklink /J "`"$link`"" "`"$target`"" | Out-Null
    Write-Host "Vinculado: $($_.Name)"
}

Write-Host ""
Write-Host "Superpowers pronto. Reinicie o chat do Cursor Agent para carregar o hook sessionStart."
